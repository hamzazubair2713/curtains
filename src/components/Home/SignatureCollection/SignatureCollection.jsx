import React, { useState } from "react";
import { StyledSignatureCollection } from "./SignatureCollection.styles";
import ItemCard from "./ItemCard";
import fakeImage from "../../../../public/assets/images/itemImage.png";
import Button from "@/components/Button";
const SignatureCollection = () => {
  const itemsArry = [
    {
      btn: "Bestsellers",
      items: [
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
      ],
    },
    {
      btn: "Curtains",
      items: [
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
      ],
    },
    {
      btn: "Blinds",
      items: [
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
      ],
    },
    {
      btn: "New Collection",
      items: [
        {
          name: "Blackout Curtains signature Collectio",
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
      ],
    },
  ];
  const [cardItems, setCardItems] = useState(0);
  return (
    <StyledSignatureCollection>
      <div className="container">
        <strong className="section-title">OUR SIGNATURE COLLECTIONS</strong>
        <div className="tab-wrapper">
          <div className="tab-head">
            {itemsArry?.map((elem, ind) => (
              <div
                className={`tab-btn ${
                  itemsArry[cardItems]?.btn === elem.btn ? "tab-btn-active" : ""
                }`}
                key={ind}
                onClick={() => setCardItems(ind)}
              >
                {elem.btn}
              </div>
            ))}
          </div>
          <div className="tab-body">
            {itemsArry[cardItems]?.items?.map((elem, ind) => (
              <ItemCard key={ind} data={elem} />
            ))}
          </div>
        </div>
        <div className="btn-wrapper">
          <Button width={"100%"}>View More</Button>
        </div>
      </div>
    </StyledSignatureCollection>
  );
};

export default SignatureCollection;
