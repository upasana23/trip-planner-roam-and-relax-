import { generateTripSuggestions } from "@/lib/gemini";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { destination, cuisine_preferences } = body;

    const prompt = `Create a food and dining guide for ${destination} considering these preferences: ${cuisine_preferences}. Include:
    - Must-try local dishes
    - Top restaurants for different budgets
    - Best food markets and street food spots
    - Local food customs and etiquette
    Format the response in a clear, structured way.`;

    const suggestion = await generateTripSuggestions(prompt);
    return NextResponse.json({ suggestion });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
