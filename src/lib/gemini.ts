import { GoogleGenerativeAI } from "@google/generative-ai";
import { themes } from "../data/themes";

// Access the API key from environment variables
const getGenAI = () => {
    const key = import.meta.env.VITE_GEMINI_API_KEY;
    if (!key) {
        console.warn("Missing VITE_GEMINI_API_KEY");
        throw new Error("Missing API Key");
    }
    return new GoogleGenerativeAI(key);
}

export interface AnalysisResult {
    bestTrackId: string;
    bestSubTrackTitle: string;
    matchScore: number;
    reasoning: string;
    suggestions: string[];
}

export const analyzeAbstract = async (abstractText: string): Promise<AnalysisResult> => {
    const genAI = getGenAI();
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Create a context string from your actual themes data
    const context = JSON.stringify(themes.map(t => ({
        id: t.id,
        title: t.title,
        description: t.description,
        tracks: t.tracks.map(sub => ({ title: sub.title, topics: sub.topics }))
    })));

    const prompt = `
    You are an expert academic advisor for the Environmental Summit 2025.
    
    CONFERENCE TRACK DATA:
    ${context}

    USER ABSTRACT:
    "${abstractText}"

    TASK:
    Analyze the abstract and determine the single best fit Track and Sub-track.
    
    RESPONSE FORMAT (JSON ONLY, no markdown formatting):
    {
      "bestTrackId": "exact id from data",
      "bestSubTrackTitle": "exact sub-track title from data",
      "matchScore": number (0-100 confidence),
      "reasoning": "Two clear sentences explaining why this fits.",
      "suggestions": ["Three specific improvements to make this abstract better suited for this specific track."]
    }
  `;

    try {
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text().replace(/```json|```/g, "").trim();
        return JSON.parse(text) as AnalysisResult;
    } catch (error) {
        console.error("Gemini Error:", error);
        throw new Error("Analysis failed");
    }
};
