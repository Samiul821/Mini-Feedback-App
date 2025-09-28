"use client";

import React from "react";

export default function page() {
  return (
    <main className="min-h-screen bg-background py-12 px-4">
      <div className="container mx-auto max-w-6xl space-y-12">
        {/* Header */}
          <div className="text-center space-y-4">
             <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Feedback Hub</h1>
             <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">Your voice matters. Share your feedback and help us build something amazing together.</p>
          </div>
      </div>
    </main>
  );
}
