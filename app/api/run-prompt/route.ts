import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { code } = await request.json();

    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    let response;
    if (code.includes('print')) {
      response = "Hello from the Universe! This is a mock response.";
    } else {
      response = `I processed your prompt: ${code}. Here's a mock response.`;
    }

    return NextResponse.json({ response });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process prompt' },
      { status: 500 }
    );
  }
}