import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface AnalysisResult {
  sentiment: "positive" | "neutral" | "negative";
  intensity: number; // 1-5
  emotions: string[];
  summary: string;
  reflection: string;
  strategies: Array<{
    title: string;
    type: "breathing" | "gratitude" | "mindfulness" | "movement" | "connection";
    description: string;
    duration: string;
  }>;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { entry } = await req.json();
    if (typeof entry !== "string" || entry.trim().length === 0) {
      return new Response(
        JSON.stringify({ error: "Journal entry is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    if (entry.length > 4000) {
      return new Response(
        JSON.stringify({ error: "Entry too long (max 4000 chars)" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const systemPrompt = `You are MindEase, a warm, non-clinical AI mental wellness companion.
You read a short journal entry and reflect back with empathy, then suggest practical coping strategies.

RULES:
- You are NOT a therapist or doctor. Never diagnose.
- Use warm, plain, validating language. No jargon. No toxic positivity.
- Reflection should be 1-2 sentences acknowledging what the person feels.
- Suggest 3 strategies tailored to the mood (breathing, gratitude, mindfulness, movement, or connection).
- If the entry suggests crisis (self-harm, suicide), gently include a strategy with type "connection" recommending they reach out to a trusted person or crisis line.
- Keep everything concise.`;

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: `Journal entry:\n"""${entry}"""` },
          ],
          tools: [
            {
              type: "function",
              function: {
                name: "respond_with_analysis",
                description: "Return a structured emotional analysis and coping suggestions.",
                parameters: {
                  type: "object",
                  properties: {
                    sentiment: {
                      type: "string",
                      enum: ["positive", "neutral", "negative"],
                    },
                    intensity: {
                      type: "integer",
                      minimum: 1,
                      maximum: 5,
                      description: "How emotionally intense the entry is (1 mild, 5 strong).",
                    },
                    emotions: {
                      type: "array",
                      description: "Up to 4 short emotion labels (e.g., 'anxious', 'hopeful').",
                      items: { type: "string" },
                    },
                    summary: {
                      type: "string",
                      description: "One short phrase summarizing the mood (max 60 chars).",
                    },
                    reflection: {
                      type: "string",
                      description: "1-2 warm validating sentences directly to the user.",
                    },
                    strategies: {
                      type: "array",
                      minItems: 3,
                      maxItems: 3,
                      items: {
                        type: "object",
                        properties: {
                          title: { type: "string" },
                          type: {
                            type: "string",
                            enum: ["breathing", "gratitude", "mindfulness", "movement", "connection"],
                          },
                          description: { type: "string" },
                          duration: { type: "string", description: "e.g. '2 min'" },
                        },
                        required: ["title", "type", "description", "duration"],
                        additionalProperties: false,
                      },
                    },
                  },
                  required: ["sentiment", "intensity", "emotions", "summary", "reflection", "strategies"],
                  additionalProperties: false,
                },
              },
            },
          ],
          tool_choice: { type: "function", function: { name: "respond_with_analysis" } },
        }),
      },
    );

    if (!response.ok) {
      const text = await response.text();
      console.error("Gateway error", response.status, text);
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit reached. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "AI credits exhausted. Please add credits in workspace settings." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } },
        );
      }
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const data = await response.json();
    const toolCall = data.choices?.[0]?.message?.tool_calls?.[0];
    if (!toolCall?.function?.arguments) {
      throw new Error("AI returned no structured response");
    }
    const parsed: AnalysisResult = JSON.parse(toolCall.function.arguments);
    return new Response(JSON.stringify(parsed), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("analyze-mood error:", err);
    return new Response(
      JSON.stringify({ error: err instanceof Error ? err.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
