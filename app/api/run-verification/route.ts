import { NextResponse } from 'next/server';

const mockInsights = [
  "This matches a historical disinformation pattern from 2019. Context: Similar narratives were used to spread misinformation about public health issues.",
  "Detected a recurring propaganda pattern from 2021. Context: This aligns with known coordinated disinformation campaigns.",
  "Found matching patterns from 2020. Context: Similar language and structure were used in verified false narratives.",
  "Identified similarities with debunked claims from 2022. Context: The narrative structure follows known disinformation templates.",
];

export async function POST(request: Request) {
  try {
    const { code } = await request.json();

    // Simulate AI processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    let insight;
    if (code.includes('process_news_stream')) {
      const randomInsight = mockInsights[Math.floor(Math.random() * mockInsights.length)];
      insight = `Verified: ${randomInsight}`;
    } else {
      insight = `Analyzed: ${code}. No known patterns detected.`;
    }

    return NextResponse.json({ insight });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process verification request' },
      { status: 500 }
    );
  }
}