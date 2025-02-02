import React from "react";
import Image from "next/image";

const KeyFeatures = () => {
  const features = [
    {
      title: "Trip Planning",
      altText: "Trip Planning",
      description:
        "Plan your trips effortlessly with an easy-to-use interface. Customize your journey based on your preferences, destinations, and activities.",
      icon: "/trip_planning_icon.png", // Replace with relevant trip planning icon
    },
    {
      title: "Calendar View",
      altText: "Calendar View",
      description:
        "Manage your travel itinerary with our intuitive calendar. Stay on top of flight dates, bookings, and activities all in one place.",
      icon: "/trip_calender_view.png", // Replace with relevant calendar icon
    },
    {
      title: "Destination Discovery",
      altText: "Destination Discovery",
      description:
        "Explore new destinations and discover the best places to visit based on your interests. Get personalized recommendations for your next adventure.",
      icon: "/destination_discovery.jpg", // Replace with a destination-related icon
    },
    {
      title: "Packing List Generator",
      altText: "Packing List Generator",
      description:
        "Create your personalized packing list with ease. Our tool suggests items based on your destination, weather, and trip type.",
      icon: "/packing list generator.png", // Replace with relevant packing list icon
    },
  ];

  return (
    <div className="text-white bg-blue-600 h-full w-screen">
      <div className="py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16" data-aos="zoom-in-up">
          Key Features
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="hover:scale-110 bg-neutral-800 rounded-2xl transition-transform duration-500"
            >
              <div className="group relative rounded-lg p-6 w-64 text-center" data-aos="flip-up">
                <div className="absolute -top-8 left-[50%] transform -translate-x-1/2 flex items-center justify-center">
                  <div className="flex items-center justify-center p-0">
                    <Image
                      src={feature.icon}
                      alt={feature.altText}
                      width={100}
                      height={100}
                      unoptimized={true}
                      quality={100}
                      className="w-[75px] h-[75px]"
                    />
                  </div>
                </div>

                {/* Card Content */}
                <h3 className="mt-10 text-xl font-semibold text-gray-200">{feature.title}</h3>
                <p className="mt-2 text-gray-300 text-lg mb-8">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
