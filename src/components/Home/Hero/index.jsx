import React from "react";
import { StyledHero } from "./Hero.styles";
import Button from "@/components/Button";
import Image from "next/image";
import mainimg from "../../../../public/assets/images/hero_img.png";
import floatingStar from "../../../../public/assets/images/floatingStar.svg";

const Hero = () => {
  return (
    <StyledHero>
      <div className="container">
        <div className="text-wrap">
          <h1>Curtains & Blinds Without hassle</h1>
          <p>
            Easy Blinds & Curtains Dubai stands out for our commitment to
            quality and customer satisfaction. With over ten years of experience
            in Dubai and notable 
          </p>
          <Button width={"180px"}>Contact Us</Button>
          <div className="floating-right">
            <Image src={floatingStar} alt="floatingStar" />
          </div>
          <div className="floating-left">
            <Image src={floatingStar} alt="floatingStar" />
          </div>
        </div>
      </div>
      <div className="imag-wrap">
        <Image src={mainimg} alt="mainimg" priority />
      </div>
    </StyledHero>
  );
};

export default Hero;
