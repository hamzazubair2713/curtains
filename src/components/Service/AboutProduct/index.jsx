import React from "react";
import { StyledAboutProduct } from "./AboutProduct.styles";
import img1 from "../../../../public/assets/images/Image-1.png";
import product1 from "../../../../public/assets/images/product1.jpg";
import whycurtains from "../../../../public/assets/images/whycurtains.png";

import Image from "next/image";
const AboutProduct = () => {
  return (
    <StyledAboutProduct>
      <div className="container">
        <h2>What are Blackout Curtains?</h2>
        <div className="twocol">
          <div className="">
            <Image src={img1} alt="img1" />
          </div>
          <div className="col desc">
            <p>
              Blackout curtains are specialized window coverings designed to
              block out light completely. Made from heavy, opaque fabrics, these
              curtains are essential for anyone looking to create an ideal
              sleeping or viewing environment. They are perfect for bedrooms,
              media rooms, and any space where control over light is necessary
            </p>
            <p>
              At our curtain shop in Dubai, we proudly offer a wide selection of
              curtains with blind options to suit every style and preference.
              From elegant drapes paired with sleek blinds to contemporary
              designs that blend functionality and aesthetics seamlessly, we
              have the perfect solution to enhance your windows.
            </p>
          </div>
        </div>
        <div className="twocol">
          <div className="col desc">
            <h2>Why You Need Blackout Curtains in Dubai</h2>
            <p>
              Living in Dubai means experiencing plenty of sunny days. Blackout
              curtains in Dubai offer several benefits:
            </p>
            <ul>
              <li>
                <strong>Sunlight Control : </strong>
                <span>
                  They block out the intense sunlight, which is especially
                  useful during the long sunny days in Dubai.
                </span>
              </li>
              <li>
                <strong>Temperature Regulation : </strong>
                <span>
                  By blocking the sun’s rays, blackout curtains help maintain
                  cooler room temperatures, reducing the reliance on air
                  conditioning and saving on energy costs.
                </span>
              </li>
              <li>
                <strong>Enhanced Privacy : </strong>
                <span>
                  These curtains provide maximum privacy, an essential feature
                  in the bustling city of Dubai.
                </span>
              </li>
            </ul>
          </div>
          <div className="product-image">
            <Image src={product1} alt="product1" />
          </div>
        </div>
      </div>
      <div className="why-purchase">
        <div className="container">
          <div className="twocol">
            <div className="text">
              <h3>Why Purchase from Easy Blinds & Curtains?</h3>
              <p>
                Choosing where to buy blackout curtains in Dubai is crucial.
                Here’s why Easy Blinds & Curtains stands out:
              </p>
              <ul>
                <li>
                  Decade of Expertise: With over ten years in the curtains and
                  blinds industry, we are a trusted name in Dubai.
                </li>
                <li>
                  Professional Team: Our team includes professional staff and
                  experienced stitchers who ensure high-quality products.
                </li>
              </ul>
              <p>Customization and Speed: We provide:</p>
              <ul>
                <li>
                  Custom-made blackout curtains delivered within 24 hours.
                </li>
                <li>
                  Free appointment scheduling and curtain installation within 48
                  hours.
                </li>
              </ul>
              <p>
                For those looking to buy curtains in Dubai, Easy Blinds &
                Curtains offers not just products but a promise of quality,
                efficiency, and satisfaction. Visit us today to find the perfect
                blackout curtains for your home!
              </p>
            </div>
            <div className="image-wraper">
              <Image src={whycurtains} alt="whycurtains" />
            </div>
          </div>
        </div>
      </div>
    </StyledAboutProduct>
  );
};

export default AboutProduct;
