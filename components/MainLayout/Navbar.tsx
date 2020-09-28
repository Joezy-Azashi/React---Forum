import Link from "next/link";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";

import { Store } from "../../contextStore";
const navFontSize = {
  fontSize: "18px",
};
const Navbar = (props) => {
  

  return (
    <div
      className="hor-header header d-flex navbar-collapse"
      style={{ height: "80px !important" }}
    >
      <div className="container">
            <a className="header-brand row" href="#">
              <img
                src="/assets/images/Logo.png"
                className="header-brand-img login-logo"
                alt="logo"
              /><h1 style={{fontWeight: "bolder", color: "blueviolet"}}>Azashi</h1>
            </a>
          
      </div>
    </div>
  );
};

export default Navbar;
