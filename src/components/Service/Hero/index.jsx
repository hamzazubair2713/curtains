import { StyledHero } from "./Hero.styles";
import product1 from "../../../../public/assets/images/product1.jpg";
import rating from "../../../../public/assets/images/rating.png";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { GrTwitter } from "react-icons/gr";
import Link from "next/link";
const Hero = () => {
  return (
    <StyledHero>
      <div className="container">
        <div className="image-wraper">
          <Image src={product1} alt="product1" priority />
        </div>
        <div className="text-wrap">
          <h1>Blackout Curtains</h1>
          <div className="review">
            <div className="rating">
              <Image src={rating} alt="rating" />
            </div>
            <p>5 Customer Review</p>
          </div>
          <div className="dec">
            <p>
              Discover the perfect solution for Dubai’s sunny climate with our
              range of blackout curtains at Easy Blinds & Curtains, designed to
              offer privacy and reduce heat.
            </p>
          </div>
          <div className="product-detail">
            <div style={{ width: "100%" }}>
              <div className="sizes-main-wrap">
                <span className="title">Size</span>
                <div className="size-wraper">
                  <div className="size active">L</div>
                  <div className="size">XL</div>
                  <div className="size">XS</div>
                </div>
              </div>
              <div className="sizes-main-wrap">
                <span className="title">Fabric</span>
                <div className="size-wraper">
                  <div className="color purple" />
                  <div className="color black" />
                  <div className="color brown" />
                </div>
              </div>
              <button className="estimate">Get Estimate </button>
            </div>
            <div className="product-detail-desc" style={{ width: "100%" }}>
              <div className="col">
                <div className="name">
                  <span>SKU</span>
                  <span>:</span>
                </div>
                <p>SS001</p>
              </div>
              <div className="col">
                <div className="name">
                  <span>Category</span>
                  <span>:</span>
                </div>
                <p>Curtains</p>
              </div>
              <div className="col">
                <div className="name">
                  <span>Tags</span>
                  <span>:</span>
                </div>
                <p>Curtains, Black, Shop</p>
              </div>
              <div className="col">
                <div className="name">
                  <span>Share</span>
                  <span>:</span>
                </div>
                <div className="social-links-wrapper">
                  <Link href="https://www.facebook.com/">
                    <FaFacebook />
                  </Link>
                  <Link href="https://www.facebook.com/">
                    <IoLogoLinkedin />
                  </Link>
                  <Link href="https://www.facebook.com/">
                    <GrTwitter />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledHero>
  );
};

export default Hero;
