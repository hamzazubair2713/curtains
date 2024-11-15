import React, { useEffect, useState } from "react";
import { Nav, StyledHeader } from "./Header.styles";
import logo from "../../../public/assets/images/Logo.svg";
import Image from "next/image";
import Navlink from "../Navlink";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const [showShadow, setShowShadow] = useState(false);

  function handelNav(params) {
    setMenu(!menu);
  }
  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menu]);
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setShowShadow(true);
      } else {
        setShowShadow(false);
      }
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <StyledHeader $showShadow={showShadow}>
      <div className="container">
        <div className="logo-wrapper">
          <Image src={logo} alt="logo" priority />
        </div>
        <Nav $showMenu={menu}>
          <ul>
            <li>
              <Navlink href={"/"}>Home</Navlink>
            </li>
            <li>
              <Navlink href={"/service"}>Service</Navlink>
            </li>
            <li>
              <Navlink href={"/gallery"}>Gallery</Navlink>
            </li>
            <li>
              <Navlink href={"/about"}>About</Navlink>
            </li>
            <li>
              <Navlink href={"/blog"}>Blog</Navlink>
            </li>
            <li>
              <Navlink href={"/contact-us"}>Contact Us</Navlink>
            </li>
          </ul>
        </Nav>
        <div className="hamburger" onClick={handelNav}>
          {menu ? <RxCross2 size={25} /> : <HiOutlineMenuAlt3 size={25} />}
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
