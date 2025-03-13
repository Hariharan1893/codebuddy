import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

async function isProgrammingRelated(message: string): Promise<boolean> {
  const classificationPrompt = `
    Determine whether the following user query is related to coding or programming.
    Respond with only "Yes" or "No".

    User's Query: "${message}"
  `;

  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
  const response = await model.generateContent([classificationPrompt]);
  const classification = response.response.text().trim().toLowerCase();

  return classification === "yes";
}

export async function POST(req: Request) {
  try {
    const { message } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // First, check if the question is related to programming
    const isRelated = await isProgrammingRelated(message);
    if (!isRelated) {
      return NextResponse.json({ reply: "Sorry..Since I'm Expert in Coding and Programming, I can only answer questions related to that..." }, { status: 200 });
    }

    // Define the main Gemini prompt for answering
    const prompt = `
      You are a highly knowledgeable AI specializing in coding and programming. 
      Your role is to provide real-time assistance, multi-language support (Python, JavaScript, C++, Java, etc.), and help users from beginner to expert level. 
      Ensure AI-powered learning by giving insights, best practices, and detailed explanations.
      
      User's Query: "${message}"

      **Response Format:** 
      - If the answer contains a code snippet, enclose it within triple backticks (\`\`\`).
      - Use proper Markdown for formatting bold, italic, and lists.
    `;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const response = await model.generateContent([prompt]);

    const aiReply = response.response.text();

    return NextResponse.json({ reply: aiReply }, { status: 200 });
  } catch (error) {
    console.error("Chat API Error:", error);
    return NextResponse.json({ error: "Failed to generate a response" }, { status: 500 });
  }
}
