import React from "react";
import NavBar from "../Components/NavBar"; // Adjust the path as necessary
import TravelScheduler from "../Components/Hero";
import KeyFeatures from "@/Components/KeyFeature";
import ReviewsSection from "@/Components/Review";

const HomePage = () => {
  const scrollToHome = () => {
    // Logic for scrolling to home section
  };
  const scrollToFeatures = () => {
    // Logic for scrolling to features section
  };
  const scrollToHowItWorks = () => {
    // Logic for scrolling to how it works section
  };

  return (
    <div>
      <section>
        <NavBar />
      </section>
      <br /><br></br>
      <section>
        <TravelScheduler />
      </section>
      {/* <section>
        <TravelScheduler></TravelScheduler>
      </section> */}
      <section>
        <KeyFeatures></KeyFeatures>
      </section>
      <section>

      </section>
      <ReviewsSection></ReviewsSection>
    </div>
  );
};

export default HomePage;
