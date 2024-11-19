import React from "react";
import { SliderCard, StyledSummerSale } from "./SummerSale.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../../../../public/assets/images/item1.png";
import img2 from "../../../../public/assets/images/item2.png";
import { MdOutlineWhatsapp } from "react-icons/md";
import Image from "next/image";
import Button from "@/components/Button";
const SummerSale = () => {
  var settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    // responsive: [
    //   {
    //     breakpoint: 0,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };
  return (
    <StyledSummerSale>
      <div className="container">
        <p className="desc">from the shop</p>
        <h3>Our Summer Sale</h3>
        <Slider {...settings}>
          <SliderCard>
            <div className="img-wrap">
              <Image src={img1} alt="img1" />
            </div>
            <strong className="item-name">Emerson Zinc</strong>
            <div className="discreption">
              <p>200*280cm: From 650 AED</p>
              <p>300*340cm: From 1200 AED</p>
            </div>
            <button className="whatsapp-btn">
              <MdOutlineWhatsapp size={25} /> Order Now
            </button>
          </SliderCard>
          <SliderCard>
            <div className="img-wrap">
              <Image src={img2} alt="img1" />
            </div>
            <strong className="item-name">Emerson Zinc</strong>
            <div className="discreption">
              <p>200*280cm: From 650 AED</p>
              <p>300*340cm: From 1200 AED</p>
            </div>
            <button className="whatsapp-btn">
              <MdOutlineWhatsapp size={25} /> Order Now
            </button>
          </SliderCard>
          <SliderCard>
            <div className="img-wrap">
              <Image src={img2} alt="img1" />
            </div>
            <strong className="item-name">Emerson Zinc</strong>
            <div className="discreption">
              <p>200*280cm: From 650 AED</p>
              <p>300*340cm: From 1200 AED</p>
            </div>
            <button className="whatsapp-btn">
              <MdOutlineWhatsapp size={25} /> Order Now
            </button>
          </SliderCard>
          <SliderCard>
            <div className="img-wrap">
              <Image src={img1} alt="img1" />
            </div>
            <strong className="item-name">Emerson Zinc</strong>
            <div className="discreption">
              <p>200*280cm: From 650 AED</p>
              <p>300*340cm: From 1200 AED</p>
            </div>
            <button className="whatsapp-btn">
              <MdOutlineWhatsapp size={25} /> Order Now
            </button>
          </SliderCard>
        </Slider>
      </div>
      <div className="btn-loadmore">
        <Button width={"100%"}>Browse All Fabrics</Button>
      </div>
    </StyledSummerSale>
  );
};

export default SummerSale;
