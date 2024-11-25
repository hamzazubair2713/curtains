import React from "react";
import { StyledServices } from "./Services.styles";
import Button from "@/components/Button";

const ServicesHero = () => {
  return (
    <StyledServices>
      <div className="container">
        <h1>Our Services</h1>
        <div className="desc">
          <p>
            Easy Blinds & Curtains Dubai stands out for our commitment to
            quality and customer satisfaction. With over ten years of experience
            in Dubai and notable 
          </p>
        </div>
        <Button width={"180px"}>Contact Us</Button>
      </div>
    </StyledServices>
  );
};

export default ServicesHero;
