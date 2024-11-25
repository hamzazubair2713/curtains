import Services from "@/components/Home/Services";
import ItemCard from "@/components/Home/SignatureCollection/ItemCard";
import ServicesHero from "@/components/Service/Services";
import fakeImage from "../../public/assets/images/itemImage.png";

import React from "react";
import Button from "@/components/Button";
import BookAppointment from "@/components/BookAppointment";

const OurServices = () => {
  const itemsArry = [
    {
      name: "Blackout Curtains signature Collection",
      desc: "Blackout Curtains Signature Collection Welcome to the world of serene interiors and flawless designs with Easy Blinds & Curtains, your ultimate solution for beating the scorching heat of Dubai’s summer.…",
      img: fakeImage,
    },
    {
      name: "Blackout Curtains signature Collection",
      desc: "Blackout Curtains Signature Collection Welcome to the world of serene interiors and flawless designs with Easy Blinds & Curtains, your ultimate solution for beating the scorching heat of Dubai’s summer.…",
      img: fakeImage,
    },
    {
      name: "Blackout Curtains signature Collection",
      desc: "Blackout Curtains Signature Collection Welcome to the world of serene interiors and flawless designs with Easy Blinds & Curtains, your ultimate solution for beating the scorching heat of Dubai’s summer.…",
      img: fakeImage,
    },
    {
      name: "Blackout Curtains signature Collection",
      desc: "Blackout Curtains Signature Collection Welcome to the world of serene interiors and flawless designs with Easy Blinds & Curtains, your ultimate solution for beating the scorching heat of Dubai’s summer.…",
      img: fakeImage,
    },
    {
      name: "Blackout Curtains signature Collection",
      desc: "Blackout Curtains Signature Collection Welcome to the world of serene interiors and flawless designs with Easy Blinds & Curtains, your ultimate solution for beating the scorching heat of Dubai’s summer.…",
      img: fakeImage,
    },
    {
      name: "Blackout Curtains signature Collection",
      desc: "Blackout Curtains Signature Collection Welcome to the world of serene interiors and flawless designs with Easy Blinds & Curtains, your ultimate solution for beating the scorching heat of Dubai’s summer.…",
      img: fakeImage,
    },
    {
      name: "Blackout Curtains signature Collection",
      desc: "Blackout Curtains Signature Collection Welcome to the world of serene interiors and flawless designs with Easy Blinds & Curtains, your ultimate solution for beating the scorching heat of Dubai’s summer.…",
      img: fakeImage,
    },
    {
      name: "Blackout Curtains signature Collection",
      desc: "Blackout Curtains Signature Collection Welcome to the world of serene interiors and flawless designs with Easy Blinds & Curtains, your ultimate solution for beating the scorching heat of Dubai’s summer.…",
      img: fakeImage,
    },
    {
      name: "Blackout Curtains signature Collection",
      desc: "Blackout Curtains Signature Collection Welcome to the world of serene interiors and flawless designs with Easy Blinds & Curtains, your ultimate solution for beating the scorching heat of Dubai’s summer.…",
      img: fakeImage,
    },
  ];
  return (
    <>
      <ServicesHero />
      <Services />
      <div className="services-product-wrapper">
        <div className="container">
          {itemsArry?.map((elem, ind) => (
            <ItemCard data={elem} key={ind} />
          ))}
        </div>
        <div className="btn-wrapper">
          <Button width={"100%"}>Load More</Button>
        </div>
      </div>
      <BookAppointment />
    </>
  );
};

export default OurServices;
