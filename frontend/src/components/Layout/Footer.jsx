import React, { useContext } from "react";
import { FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Context } from "../../main";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By CodeWithAjju.</div>
      <div>
        <Link to={"https://twitter.com/iam_ajayreddy"} target="_blank">
        <FaTwitter />
        </Link>
        <Link to={"https://www.youtube.com/channel/UCLxeV2U9xPq5cADTeOY777A"} target="_blank">
          <FaYoutube />
        </Link>
        <Link to={"https://www.linkedin.com/in/ajay-reddy-236631223/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/_whyajay/?hl=en"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;