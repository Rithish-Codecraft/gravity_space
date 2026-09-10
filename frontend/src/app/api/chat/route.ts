import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { messages, profileData } = body;

    const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

    if (!OPENROUTER_API_KEY) {
      return NextResponse.json({ error: "OpenRouter API key not configured" }, { status: 500 });
    }

    const systemPrompt = `You are Nexora Copilot, an AI assistant for B2B procurement and government schemes in India.
Your goal is to help users find relevant business opportunities and government schemes.
You have access to the user's detailed profile. Always use this context to tailor your advice.
USER PROFILE CONTEXT:
${JSON.stringify(profileData, null, 2)}

Provide concise, highly relevant, and actionable advice.`;

    const openRouterPayload = {
      model: "google/gemini-2.5-flash", // Using gemini-2.5-flash via OpenRouter
      messages: [
        { role: "system", content: systemPrompt },
        ...messages
      ]
    };

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://sih.feenixs.com", 
        "X-Title": "Nexora Dashboard"
      },
      body: JSON.stringify(openRouterPayload)
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenRouter Error:", errorText);
      return NextResponse.json({ error: "Failed to fetch from OpenRouter" }, { status: 500 });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
