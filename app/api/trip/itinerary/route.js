import { generateTripSuggestions } from "@/lib/gemini";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { destination, duration, interests, budget } = body;
    const interestsText = Array.isArray(interests) ? interests.join(", ") : interests || "general";

    const prompt = `Create a detailed day-by-day itinerary for a ${duration}-day trip to ${destination}.
    Consider these interests: ${interestsText}.
    Budget: ${budget}.
    Include:
    - Daily activities and attractions
    - Recommended restaurants
    - Transportation tips
    - Estimated costs per day
    Please format the response in a clear, structured way.`;
    

    const suggestion = await generateTripSuggestions(prompt);

    return NextResponse.json({ suggestion });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
