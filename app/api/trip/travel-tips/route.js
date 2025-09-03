import { generateTripSuggestions } from "@/lib/gemini";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { destination, season } = body;

    const prompt = `Provide practical travel tips for visiting ${destination} during ${season}. Include:
    - Weather considerations and what to pack
    - Local transportation options and tips
    - Safety advice and common scams to avoid
    - Cultural customs and etiquette
    - Best time of day for popular attractions
    - Money-saving tips
    Format the response in a clear, structured way.`;

    const suggestion = await generateTripSuggestions(prompt);
    return NextResponse.json({ suggestion });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
