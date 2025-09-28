"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardContent className="text-center py-12">
          <p className="text-muted-foreground text-lg">
            No feedback submitted yet. Be the first to share your thoughts!
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-foreground mb-2">
          Recent Feedback
        </h2>
        <p className="text-muted-foreground">
          {feedback.length}{" "}
          {feedback.length === 1 ? "submission" : "submissions"}
        </p>
      </div>

      <div className="grid gap-4">
        {feedback.map((item) => (
          <Card
            key={item.id}
            className="border border-border hover:border-primary/50 transition-colors"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-foreground">
                  {item.name}
                </CardTitle>
                <Badge variant="secondary" className="text-xs">
                  {new Date(item.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{item.email}</p>
            </CardHeader>
            <CardContent>
              <p className="text-foreground leading-relaxed">{item.feedback}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
