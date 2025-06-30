import { Star } from "lucide-react";

export function CustomerReviewCard({ review }) {
  const totalStars = 5;

  return (
    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6 bg-white w-full max-w-3xl">
      {/* Profile Picture */}
      <div className="w-16 h-auto rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
        {review.profilePicture ? (
          <img
            src={review.profilePicture}
            alt={review.customerName}
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-sm text-gray-400">No Image</span>
        )}
      </div>

      {/* Review Details */}
      <div className="flex flex-col gap-4">
        {/* Stars */}
        <div className="flex gap-1 text-yellow-500">
          {Array.from({ length: totalStars }, (_, i) => (
            <Star
              key={i}
              size={16}
              className="text-yellow-500"
              fill={i < review.stars ? "currentColor" : "none"}
            />
          ))}
        </div>

        {/* Heading */}
        <h1 className="text-lg font-semibold text-gray-800">
          {review.heading}
        </h1>

        {/* Description */}
        <p className="text-gray-600 text-sm text-justify">
          {review.description}
        </p>

        {/* Customer Name */}
        <p className="text-sm font-medium text-gray-700">
          — {review.customerName}
        </p>
      </div>
    </div>
  );
}
