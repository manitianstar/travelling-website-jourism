"use client"; // Client-side component

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Dialog, DialogTrigger, DialogContent } from "@radix-ui/react-dialog"; // Assuming you're using Radix UI for Dialogs

const TravelScheduler = () => {
  // List of image sources for the carousel
  const images = [
    "/goa_image.jpeg",
    "/Manali_City.jpg",
    "/Darjeeling-toy-train-route.webp",
    "/Dholavira-Rann-Of-Kutch-Tour-from-Mumbai.jpg"
  ];

  // State to track the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-blue-600 overflow-hidden text-white py-4 px-6 sm:px-8 md:px-16">
      <div className="flex flex-col md:flex-row md:space-x-8 items-center justify-between space-y-8 md:space-y-0">
        <div className="md:w-1/2">
          <div className="flex items-center gap-2">
            <Image
              src="/smile 2.png"
              alt="Travel icon"
              className="w-[50px] h-[50px]"
              width={50}
              height={50}
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold italic leading-tight mb-4">
              Hey, Travel Enthusiast
            </h1>
          </div>
          <p className="text-neutral-100 text-lg sm:text-xl md:text-2xl mb-6 leading-relaxed w-[70%]">
            <strong>
              Plan Your Perfect Trip, Anywhere, Anytime{" "}
              <span className="bg-clip-text text-transparent bg-custom-gradient4">
                with TripPlannerPal!
              </span>
            </strong>
          </p>
          <p className="text-neutral-300 text-sm sm:text-base md:text-lg mb-8 leading-relaxed w-[80%]">
            A platform to simplify your travel planning and make your trips unforgettable.
          </p>
          <div className="flex gap-2 md:gap-6 mt-6 md:mt-12">
            {/* Dialog buttons */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="relative inline-flex h-auto bg-custom-gradient2 hover:from-pink-600 hover:to-orange-600 overflow-hidden border-2 border-white rounded-[8px]">
                  <span className="inline-flex h-[61px] w-full gap-1 md:gap-[14px] cursor-pointer items-center justify-center rounded-[8px] py-2 md:py-[15px] px-3 md:px-[21px] text-sm font-medium text-white backdrop-blur-3xl">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="31"
                        className="w-[22px] md:w-[26px] h-[25px] md:h-[31px]"
                        viewBox="0 0 26 31"
                        fill="none"
                      >
                        <path
                          d="M25.3685 23.1164C24.6748 24.6516 24.3436 25.3369 23.4503 26.6932C22.2058 28.5874 20.4497 30.9466 18.2737 30.9666C16.3409 30.9846 15.8442 29.7096 13.2201 29.725C10.5962 29.7403 10.0494 30.9893 8.1164 30.9713C5.94042 30.9519 4.27796 28.8215 3.03202 26.9261C-0.450586 21.6286 -0.814443 15.4123 1.33345 12.1078C2.85981 9.75787 5.26879 8.38484 7.53291 8.38484C9.83837 8.38484 11.2879 9.64781 13.1948 9.64781C15.0442 9.64781 16.1706 8.38281 18.8366 8.38281C20.8517 8.38281 22.9869 9.47904 24.5086 11.3731C19.523 14.1026 20.3336 21.2142 25.3685 23.1164Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M17.0953 5.06511C18.0641 3.82275 18.7985 2.07011 18.5314 0.277344C16.9491 0.385482 15.0996 1.39161 14.0193 2.70261C13.0385 3.89224 12.2286 5.65694 12.5437 7.37221C14.2697 7.42633 16.0571 6.39544 17.0953 5.06511Z"
                          fill="#F5F5F5"
                        />
                      </svg>
                    </span>
                    <div className="text-left">
                      <span className="block text-xs font-bold leading-tight">
                        Download on the
                      </span>
                      <span className="block text-lg font-semibold leading-tight">
                        App Store
                      </span>
                    </div>
                  </span>
                </button>
              </DialogTrigger>
            
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <button className="relative inline-flex h-auto bg-custom-gradient2 hover:from-pink-600 hover:to-orange-600 overflow-hidden border-2 border-white rounded-[8px]">
                  <span className="inline-flex h-[61px] w-full gap-1 md:gap-[14px] cursor-pointer items-center justify-center rounded-[8px] py-2 md:py-[15px] px-3 md:px-[21px] text-sm font-medium text-white">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="27"
                        height="29"
                        className="w-[22px] md:w-[27px] h-[25px] md:h-[29px]"
                        viewBox="0 0 27 29"
                        fill="none"
                      >
                        <path
                          d="M4.91987 28.0649C4.28691 28.4735 3.52669 28.5971 2.81348 28.4288L15.3455 15.9102L19.4071 19.9674L4.91987 28.0649Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M1.2577 27.4095C0.908256 26.9453 0.707031 26.3754 0.707031 25.7724V3.47296C0.707031 2.87003 0.908256 2.30009 1.2577 1.83594L14.0581 14.6226L1.2577 27.4095Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M24.7073 17.004L21.057 19.0442L16.6318 14.6238L21.0573 10.2031L24.708 12.2436C25.5825 12.733 26.1047 13.6228 26.1047 14.6238C26.1047 15.6248 25.5825 16.5144 24.7073 17.004Z"
                          fill="#F5F5F5"
                        />
                        <path
                          d="M15.3446 13.3383L2.81348 0.820392C3.01887 0.772034 3.228 0.746094 3.43703 0.746094C3.95382 0.746094 4.46869 0.892876 4.91912 1.18356L19.4064 9.28092L15.3446 13.3383Z"
                          fill="#F5F5F5"
                        />
                      </svg>
                    </span>
                    <div className="text-left">
                      <span className="block text-xs font-bold leading-tight">
                        Get it on
                      </span>
                      <span className="block text-lg font-semibold leading-tight">
                        Google Play
                      </span>
                    </div>
                  </span>
                </button>
              </DialogTrigger>
              
            </Dialog>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="md:w-1/2 flex items-center justify-center relative animate-floating">
          <div className="relative w-full max-w-lg h-[500px]"> {/* Fixed height for image container */}
            <div className="w-full h-full flex justify-center items-center">
              {/* Carousel Image */}
              <Image
                src={images[currentImageIndex]}
                alt={`Travel Image ${currentImageIndex + 1}`}
                width={500} // Fixed width
                height={500} // Fixed height to match the container size
                className="object-cover z-0" // Ensure the image covers the area without distorting
                quality={100}
                unoptimized={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelScheduler;
