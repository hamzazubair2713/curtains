import React from "react";
import { StyledServices } from "./Services.styles";
import bed from "../../../../public/assets/images/bed.svg";
import rugs from "../../../../public/assets/images/rugs.svg";
import blinds from "../../../../public/assets/images/blinds.svg";
import paint from "../../../../public/assets/images/paint.svg";
import curtains from "../../../../public/assets/images/curtains.svg";
import carpets from "../../../../public/assets/images/carpets.svg";
import flooring from "../../../../public/assets/images/flooring.svg";
import Image from "next/image";
const services = [
  {
    image: bed,
    name: "Beds",
  },
  {
    image: rugs,
    name: "Rugs",
  },
  {
    image: blinds,
    name: "Blinds",
  },
  {
    image: blinds,
    name: "Blinds",
  },
  {
    image: paint,
    name: "Paint Work",
  },
  {
    image: curtains,
    name: "Curtains",
  },
  {
    image: carpets,
    name: "Carpets",
  },
  {
    image: flooring,
    name: "Flooring",
  },
];
const Services = () => {
  return (
    <StyledServices>
      <div className="container">
        <h2 className="title">OUR SERVICES</h2>
        <div className="services-cols">
          {services.map((elem, ind) => (
            <div className="col" key={ind}>
              <div className="image-wrap">
                <Image src={elem.image} alt={elem?.name} priority={false} />
              </div>
              <p>{elem?.name}</p>
            </div>
          ))}
        </div>
      </div>
    </StyledServices>
  );
};

export default Services;
