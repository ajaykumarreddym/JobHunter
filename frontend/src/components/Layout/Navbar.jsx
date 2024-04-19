import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigateTo = useNavigate();

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src="/jobhunter_whitelogo.png" alt="logo" />
        </div>
        <ul className={!show ? "menu" : "show-menu menu"}>
          <li>
            <Link to={"/"} onClick={() => setShow(false)}>
              HOME
            </Link>
          </li>
          <li>
            <Link to={"/job/getall"} onClick={() => setShow(false)}>
              ALL JOBS
            </Link>
          </li>
          <li>
            <Link to={"/applications/me"} onClick={() => setShow(false)}>
              MY APPLICATIONS
            </Link>
          </li>
          <li>
            <Link to={"/profile"} onClick={() => setShow(false)}>
              PROFILE
            </Link>
          </li>
        </ul>
        <div className="hamburger">
          <GiHamburgerMenu onClick={() => setShow(!show)} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
