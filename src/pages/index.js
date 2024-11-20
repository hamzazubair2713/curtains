import Hero from "@/components/Home/Hero";
import HomeSlider from "@/components/Home/HomeSlider/HomeSlider";
import KnowAboutUs from "@/components/Home/KnowAboutUs";
import Offers from "@/components/Home/Offers";
import Services from "@/components/Home/Services";
import SignatureCollection from "@/components/Home/SignatureCollection/SignatureCollection";
import SummerSale from "@/components/Home/SummerSale";
import Question from "@/components/Question/Question";
import Testimonials from "@/components/Testimonials";
import React from "react";

const index = () => {
  return (
    <>
      <Hero />
      <HomeSlider />
      <Services />
      <SignatureCollection />
      <Offers />
      <KnowAboutUs />
      <SummerSale />
      <Testimonials />
      <Question />
    </>
  );
};

export default index;
