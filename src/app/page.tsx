import React from "react";
import NavBar from "../Components/NavBar"; // Adjust the path as necessary
import TravelScheduler from "../Components/Hero";
import KeyFeatures from "@/Components/KeyFeature";
import ReviewsSection from "@/Components/Review";

const HomePage = () => {

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
