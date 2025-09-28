"use client"

export default function FeedbackForm() {
  return (
    <div className="max-w-2xl mx-auto border-2 border-primary/20 rounded-lg shadow p-6">
      {/* Card Header */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Share Your Feedback</h2>
        <p className="text-gray-500 mt-2">
          Help us improve by sharing your thoughts and suggestions
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
            className="w-full h-12 px-3 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            required
            className="w-full h-12 px-3 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Feedback */}
        <div>
          <label htmlFor="feedback" className="block text-sm font-semibold text-gray-700 mb-1">
            Your Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            placeholder="Share your thoughts, suggestions, or concerns..."
            required
            rows={5}
            className="w-full px-3 py-2 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-500 transition-colors resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full h-12 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded transition-colors disabled:opacity-50"
        >
          {isSubmitting ? "Submitting..." : "Submit Feedback"}
        </button>

        {/* Message */}
        {message && (
          <div
            className={`text-center p-3 rounded-lg ${
              message.includes("Thank you")
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  )
}
