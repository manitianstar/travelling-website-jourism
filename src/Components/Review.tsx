"use client";

import React from "react";
import Card from "../app/Components/ReviewCards/card_review";

const reviews = [
  {
    id: "1",
    username: "Alice Johnson",
    rating: 5,
    description:
      "This was an amazing experience! The trip planning was seamless and everything was well organized. Highly recommend this service!",
  },
  {
    id: "2",
    username: "Mark Davis",
    rating: 4,
    description:
      "Great platform for trip planning. The recommendations were spot on and the calendar feature made it easy to manage my schedule.",
  },
  {
    id: "3",
    username: "Sophie Lee",
    rating: 5,
    description:
      "Absolutely loved using this service! The UI is smooth, and the planning tools are extremely helpful. Can't wait for my next trip!",
  },
  {
    id: "4",
    username: "Daniel Carter",
    rating: 3,
    description:
      "Good service but there’s room for improvement. Some trip suggestions were not relevant. Otherwise, a good experience.",
  },
  {
    id: "5",
    username: "Emma Watson",
    rating: 4,
    description:
      "Helpful trip planning tool! It made my vacation stress-free. Would love to see more personalized suggestions in the future.",
  },
];

const ReviewsSection = () => {
  return (
    <section className="w-full bg-blue-600 text-white py-12 px-6 sm:px-8 md:px-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        What Our Users Say
      </h2>

      {/* Scrollable Review Cards */}
      <div className="relative overflow-x-auto">
        <div className="flex space-x-6 overflow-x-scroll scrollbar-hide px-4">
          {reviews.map((review) => (
            <Card
              key={review.id}
              id={review.id}
              username={review.username}
              rating={review.rating}
              description={review.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
