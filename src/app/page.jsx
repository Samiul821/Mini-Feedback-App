"use client";

import FeedbackForm from "@/components/FeedbackForm";
import FeedbackList from "@/components/FeedbackList";
import React, { useEffect, useState } from "react";

export default function page() {
  const [feedback, setFeedback] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFeedback = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/feedback");
      const data = await response.json();
      setFeedback(data.feedback || []);
    } catch (error) {
      console.error("Failed to fetch feedback:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  const handleFeedbackSubmitted = () => {
    fetchFeedback();
  };

  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-6xl space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Feedback Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Your voice matters. Share your feedback and help us build something
            amazing together.
          </p>
        </div>

        <FeedbackForm onFeedbackSubmitted={handleFeedbackSubmitted} />

        <div className="pt-8">
          {isLoading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading feedback...</p>
            </div>
          ) : (
            <FeedbackList feedback={feedback} />
          )}
        </div>
      </div>
    </main>
  );
}
