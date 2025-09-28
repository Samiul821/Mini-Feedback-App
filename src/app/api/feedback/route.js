import { NextResponse } from "next/server";

// In-memory storage for feedback
const feedbackStorage = [];

export async function GET() {
  return NextResponse.json({ feedback: feedbackStorage });
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, feedback } = body;

    if (!name || !email || !feedback) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const newFeedback = {
      id: Date.now(),
      name,
      email,
      feedback,
      createdAt: new Date().toISOString(),
    };

    feedbackStorage.push(newFeedback);

    return NextResponse.json({
      message: "Feedback submitted successfully",
      feedback: newFeedback,
    });
  } catch (error) {
    console.error("POST /api/feedback error:", error);
    return NextResponse.json(
      { error: "Failed to process feedback" },
      { status: 500 }
    );
  }
}
