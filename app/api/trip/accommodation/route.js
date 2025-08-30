import { generateTripSuggestions } from "@/lib/gemini";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { destination } = body;

    const prompt = `Provide detailed accommodation recommendations for ${destination} including:
    - Top areas to stay
    - Top-rated hotels in different price ranges
    - Unique accommodation options (boutique hotels, hostels, etc.)
    - Pros and cons of each area
    Format the response in a clear, structured way.`;

    const suggestion = await generateTripSuggestions(prompt);
    return NextResponse.json({ suggestion });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
