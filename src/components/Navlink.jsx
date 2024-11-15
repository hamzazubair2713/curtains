import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Navlink = ({ href, children }) => {
  const { pathname } = useRouter();

  return (
    <Link href={href} className={`${pathname.includes(href) ? "active" : ""}`}>
      {children}
    </Link>
  );
};

export default Navlink;
