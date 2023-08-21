import React from "react";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import "../css/FooterCss.css";
import { AppleLogo } from "phosphor-react";

const Footer = () => {
  return (
    <footer className="FooterWrapper">
      <div className="FooterContainer">
        <div>
          <div className="FooterTitle">
            <AppleLogo size={30} />
            Apple Shop
          </div>
          <br />
          <div className="FooterTitle">ABOUT US</div>
          <ul className="FooterLinks">
            <li>
              <div>About the company</div>
            </li>
            <li>
              <div>Contact</div>
            </li>
            <li>
              <div>Terms & Conditions</div>
            </li>
            <li>
              <div>Privacy Policy</div>
            </li>
            <li>
              <div>Sell on Apple Shop</div>
            </li>
          </ul>
        </div>

        <div>
          <div className="FooterTitle">ASSISTANCE</div>
          <ul className="FooterLinks">
            <li>
              <div>How To Buy</div>
            </li>
            <li>
              <div>Shipping</div>
            </li>
            <li>
              <div>Payment Options</div>
            </li>
            <li>
              <div>FAQ</div>
            </li>
            <li>
              <div>Warranty</div>
            </li>
            <li>
              <div>Cancelations & Returnings</div>
            </li>
          </ul>
        </div>

        <div>
          <div className="FooterTitle">CONTACT</div>
          <ul className="FooterLinks">
            <li>
              <div>Call Center</div>
            </li>
            <li>
              <div>Email</div>
            </li>
            <li>
              <div>GET SOCIAL</div>
            </li>
          </ul>
          <br />
          <br />
          <div className="SocialLinks">
            <BsFacebook></BsFacebook>
            <BsInstagram></BsInstagram>
            <BsTwitter></BsTwitter>
            <BsYoutube></BsYoutube>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>
          Copyright © 2023 Apple Shop All rights reserved. All product images on
          the site are the property of Apple Shop Privacy Policy | terms of
          service
        </p>
      </div>
    </footer> //it is toke from web site Mobile Shop Online
  );
};

export default Footer;
