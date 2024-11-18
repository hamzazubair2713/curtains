import React from "react";
import { StyledOffers } from "./Offers.styles";
import Image from "next/image";
import Image1 from "../../../../public/assets/images/Image-1.png";
import Image2 from "../../../../public/assets/images/image-2.png";
import Image3 from "../../../../public/assets/images/image-3.png";
import Button from "@/components/Button";
const Offers = () => {
  return (
    <StyledOffers>
      <div className="container">
        <div className="twoCol">
          <div className="whatoffer-imagetext">
            <h3>What we offer to you</h3>
            <p>
              We have expertise to make your home more catchy and neat. Also, we
              have some designers to design your home to be a better version.{" "}
            </p>
            <div className="image-wrap">
              <Image src={Image1} alt="Image1" priority={false} />
            </div>
          </div>
          <div className="offerlist-wrap">
            <div className="offer-col">
              <strong className="sub-heading">
                High Quality Interior Design
              </strong>
              <p>
                Transform your living and working spaces with exceptional
                interior design that blends functionality, elegance, and style
                Our high-quality interior design services focus on creating
                personalized spaces
              </p>
            </div>
            <div className="offer-col">
              <strong className="sub-heading">Professional Designer</strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="offer-col">
              <strong className="sub-heading">
                Excellent Quality of Services
              </strong>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
        <div className="twoCol">
          <div className="csr-text">
            <strong className="sub-heading">7-Day Customer Support</strong>
            <p>
              Your satisfaction is our priority, every day of the week. Our
              friendly team is always ready to assist with advice, or questions.
              We’re here to ensure you get the best for your home, anytime you
              need us.
            </p>
            <Button width={"196px"} outline={"secondary"}>
              BOOK A FREE VISIT
            </Button>
          </div>
          <div className="col-image-wrap">
            <Image src={Image2} alt="Image2" priority={false} />
          </div>
        </div>
        <div className="twoCol">
          <div className="col-image-wrap">
            <Image src={Image3} alt="Image2" priority={false} />
          </div>
          <div className="csr-text">
            <strong className="sub-heading">Premium Quality Guaranteed</strong>
            <p>
              Elevate your space with our commitment to excellence. Get expert
              advice and choose from premium, durable fabrics. Enjoy peace of
              mind with our 12-month warranty on all products.
            </p>
            <Button width={"196px"} outline={"secondary"}>
              BOOK A FREE VISIT
            </Button>
          </div>
        </div>
      </div>
    </StyledOffers>
  );
};

export default Offers;
