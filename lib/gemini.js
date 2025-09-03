import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export async function generateTripSuggestions(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent(prompt);
    return result.response.text();  // <-- simplified
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
}

