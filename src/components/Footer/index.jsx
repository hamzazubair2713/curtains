import React from "react";
import { StyledFooter } from "./Footer.styles";
import logo from "../../../public/assets/images/white-logo.png";
import arrow from "../../../public/assets/images/arrow.svg";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <div className="footer-title-wrap">
          <strong className="footer-title">
            Getting Interested? Let’s Contact Us
          </strong>
        </div>
        <div className="footer-main-wrap">
          <div className="company-detail">
            <figure className="logowrap">
              <Image src={logo} alt="logo" />
            </figure>
            <p>
              Curtain shop in Dubai is a renowned curtain and blind installation
              company of UAE. With years of experience in this industry, we are
              equipped with innovative techniques and a team of qualified
              professionals to provide you a seamless installation process.
            </p>
          </div>
          <div className="footer-links-wrap">
            <div className="col">
              <strong className="title">Quick Links</strong>
              <ul className="footer-links">
                <li>
                  <Image src={arrow} alt="arrow" />
                  <Link href={"/"} prefetch={false}>
                    Gym Flooring Dubai
                  </Link>
                </li>
                <li>
                  <Image src={arrow} alt="arrow" />
                  <Link href={"/"} prefetch={false}>
                    Rubber Floor Mats Dubai
                  </Link>
                </li>
                <li>
                  <Image src={arrow} alt="arrow" />
                  <Link href={"/"} prefetch={false}>
                    Artificial Grass
                  </Link>
                </li>
                <li>
                  <Image src={arrow} alt="arrow" />
                  <Link href={"/"} prefetch={false}>
                    Office Carpet
                  </Link>
                </li>
                <li>
                  <Image src={arrow} alt="arrow" />
                  <Link href={"/"} prefetch={false}>
                    Door Mat Dubai
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col">
              <strong className="title">Services</strong>
              <ul className="footer-links">
                <li>
                  <Image src={arrow} alt="arrow" />
                  <Link href={"tel:+971 56 4792450"} prefetch={false}>
                    +971 56 4792450
                  </Link>
                </li>
                <li>
                  <Image src={arrow} alt="arrow" />
                  <Link href={"mailto:info@curtainsdubai.com"} prefetch={false}>
                    info@curtainsdubai.com
                  </Link>
                </li>
                <li>
                  <Image src={arrow} alt="arrow" />
                  <address>
                    Naif St - Deira - Al Murar - Dubai - United Arab Emirates
                  </address>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;