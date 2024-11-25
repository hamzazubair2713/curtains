import React from "react";
import { StyledRelatedProduct } from "./RelatedProduct.styles";
import ItemCard from "@/components/Home/SignatureCollection/ItemCard";
import fakeImage from "../../../../public/assets/images/itemImage.png";
import Button from "@/components/Button";

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
];
const RelatedProduct = () => {
  return (
    <StyledRelatedProduct>
      <div className="container">
        <h3>Related Products</h3>
        <div className="related-products">
          {itemsArry?.map((elem, ind) => (
            <ItemCard data={elem} key={ind} />
          ))}
        </div>
        <div className="button-wrap">
          <Button width={"100%"}>Show more</Button>
        </div>
      </div>
    </StyledRelatedProduct>
  );
};

export default RelatedProduct;
