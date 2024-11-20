import React from "react";
import Slider from "react-slick";
import { StyledTestimonials } from "./Testimonials.styles";
import img1 from "../../../public/assets/images/testimonial1.jpg";
import img2 from "../../../public/assets/images/img2.png";
import img3 from "../../../public/assets/images/img3.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
var settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};
const Testimonials = () => {
  const list = [
    {
      img: img1,
      message: (
        <>
          “I didn't expect the result is very amazing like these. For you who
          want to rebuild your interior, I really recommended curtains services
          for you”
        </>
      ),
      name: "Christinie Debora",
      designation: "CEO",
      company: "Bukain.co",
    },
    {
      img: img2,
      message: (
        <>
          “Working with curtains was a seamless experience. They transformed our
          office interior into a space that's both functional and stylish.
          Highly recommended!”
        </>
      ),
      name: "Curtis Draper",
      designation: "GM",
      company: "BrightEdge ",
    },
    {
      img: img3,
      message: (
        <>
          “From concept to completion, curtains exceeded our expectations. Their
          attention to detail and creativity brought our dream home to life.
          Truly exceptional service!”
        </>
      ),
      name: "David Ramirez",
      designation: "Homeowner",
      company: "",
    },
  ];
  return (
    <StyledTestimonials>
      <div className="container">
        <div className="text-wrap">
          <h2>Several happy clients</h2>
          <p>
            There are some happy clients using our services. We prove that our
            job is really magical
          </p>
        </div>
        <Slider {...settings}>
          {list?.map((elem, ind) => (
            <div className="testimonial-card" key={ind}>
              <div className="img-wrapper">
                <Image src={elem?.img} alt="img1" width={150} />
              </div>
              <div className="message">{elem?.message}</div>
              <hr />
              <strong className="name">{elem?.name}</strong>
              <div className="designation">
                <span>{elem?.designation} </span>
                <span> {elem?.company}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </StyledTestimonials>
  );
};

export default Testimonials;
