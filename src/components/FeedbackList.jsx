"use client";

export default function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            No feedback submitted yet. Be the first to share your thoughts!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Recent Feedback
        </h2>
        <p className="text-gray-600">
          {feedback.length}{" "}
          {feedback.length === 1 ? "submission" : "submissions"}
        </p>
      </div>

      <div className="grid gap-4">
        {[...feedback]
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md border border-gray-200 hover:border-purple-300 transition-colors"
            >
              <div className="px-6 pt-6 pb-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.name}
                  </h3>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                    {new Date(item.createdAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{item.email}</p>
              </div>
              <div className="px-6 pb-6">
                <p className="text-gray-900 leading-relaxed">{item.feedback}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
