import React, { useState } from "react";

type CardProps = {
  id: string;
  username: string;
  rating: number;
  description: string;
};

const Card: React.FC<CardProps> = ({ id, username, rating, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Ensure description is valid
  if (!description || typeof description !== "string" || description.trim().length < 5 || description.trim().length > 500) {
    return null; // Hide card if description is invalid
  }

  const shouldTruncate = description.length > 250;
  const displayText =
    shouldTruncate && !isExpanded
      ? description.slice(0, 250) + "..."
      : description;

  return (
    <div
      key={id}
      className="bg-[#1A1A1A] text-white max-w-xs rounded-md p-4 flex items-start gap-4 shadow-md"
    >
      {/* Left Section: Profile Image */}
      <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-lg font-bold">
      {username ? username.charAt(0).toUpperCase() : "?"}
      </div>

      {/* Right Section: Content */}
      <div className="flex-1">
        {/* Name and Rating */}
        <div className="flex items-center justify-between">
          <div className="w-40">
            <h4 className="text-xl font-bold text-white truncate">{username || "Unknown User"}</h4>
          </div>
          <span className="bg-gray-800 text-xs px-2 py-1 rounded-md flex items-center gap-1">
            {rating}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="text-yellow-400"
            >
              <path d="M3.612 15.443c-.396.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.32-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.63.283.95l-3.523 3.356.83 4.73c.078.443-.35.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-gray-400 mt-2">
          {displayText}
          {shouldTruncate && (
            <button
              className="text-blue-500 ml-2 focus:outline-none"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

export default Card;
