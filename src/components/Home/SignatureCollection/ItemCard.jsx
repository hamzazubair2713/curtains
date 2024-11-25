import React from "react";
import { StyledItemCard } from "./SignatureCollection.styles";
import { BsArrowRight } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";
const ItemCard = ({ data }) => {
  return (
    <StyledItemCard>
      <strong className="card-title">{data?.name}</strong>
      <div className="description">
        <p>
          {data?.desc.length > 200
            ? data?.desc.slice(0, 200) + "...."
            : data?.desc}
        </p>
      </div>
      <Link href={"/product/256"}>
        <BsArrowRight size={22} color="#18191A" />
      </Link>
      <div className="image-wraper">
        <Image src={data?.img} alt="product-image" />
      </div>
    </StyledItemCard>
  );
};

export default ItemCard;
