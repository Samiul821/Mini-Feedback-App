"use client";

import FeedbackForm from "@/components/FeedbackForm";
import FeedbackList from "@/components/FeedbackList";
import React, { useState } from "react";

export default function page() {
  const [isLoading, setIsLoading] = useState(true);

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

        <FeedbackForm />

        <div className="pt-8">
          {
            isLoading ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">Loading feedback...</p>
              </div>
            ) : (
              <FeedbackList />
            )
          }
        </div>
      </div>
    </main>
  );
}
