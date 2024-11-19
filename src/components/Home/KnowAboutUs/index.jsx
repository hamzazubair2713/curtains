import React from "react";
import { StyledKnowAboutUs } from "./KnowAboutUs.styles";
import Image from "next/image";
import img from "../../../../public/assets/images/image-4.png";
import Button from "@/components/Button";
const KnowAboutUs = () => {
  return (
    <StyledKnowAboutUs>
      <div className="container">
        <div className="image-section">
          <h3>Get to know about us</h3>
          <div>
            <Image src={img} alt="img" priority={false} />
          </div>
        </div>
        <div className="text-wrapper">
          <div className="portfolio-items-wrapper">
            <div className="portfolio-items">
              <strong className="title">12 Years</strong>
              <p>Of Experiences</p>
            </div>
            <div className="portfolio-items">
              <strong className="title">1.000 +</strong>
              <p>Happy Clients</p>
            </div>
          </div>
          <p>
            We are experienced interior designer lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip.
          </p>
          <p>
            We have lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad
          </p>
          <div className="btn-wrap">
            <Button variant={"secondary"} width={"170px"}>
              Book a visit
            </Button>
            <Button outline={"secondary"} width={"170px"}>
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </StyledKnowAboutUs>
  );
};

export default KnowAboutUs;
