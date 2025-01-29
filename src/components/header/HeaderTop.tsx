import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaRegEye,
  FaTelegram,
} from "react-icons/fa6";
import logo from "@/images/logo.jpg";
import { IoMdVolumeHigh } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import headerTopBg from "@/images/bg/headerTop-bg.webp";

const HeaderTop: React.FC = () => {
  const [fontSize, setFontSize] = useState("0");

  const headerTopStyle = {
    backgroundImage: `url(${headerTopBg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    boxShadow: "inset 0 100vh 0 #018b28cc",
  };

  return (
    <>
      <div className="header-top" style={headerTopStyle}>
        <div className="container">
          <div className="top-inner">
            <a href="/" className="logo header-col-1">
              <img src={logo} alt="logo" />
              <span className="logo_title"> Aralboyi milliy tabiat bag'i </span>
            </a>
            <div className="phone-box header-col-2">
              <p className="phone_title">Ishonch raqami</p>
              <a href="tel: (+998 97) 561-74-72"> (+998 97) 561-74-72 </a>
            </div>
            <div className="header-col-3">
              <div className="social-media_links">
                <a href="#" className="header-icon">
                  <FaFacebookF />
                </a>
                <a href="#" className="header-icon">
                  <FaInstagram />
                </a>
                <a href="#" className="header-icon">
                  <FaTelegram />
                </a>
              </div>

              <div className="accessibility">
                <button className="header-icon">
                  <IoMdVolumeHigh />
                </button>
                <div className="accessibility-box">
                  <button className="header-icon" id="accessibility-view_btn">
                    <FaRegEye />
                  </button>
                  <div className="accessibility__appearance__inner">
                    <div className="view">
                      <p
                        className="accessibility__appearance__inner__text"
                        data-type="header-appearance"
                      >
                        Ko'rinish
                      </p>
                      <div className="btns">
                        <button
                          className="accessibility__appearance__inner__item no-mode"
                          data-type="header-appearance"
                        >
                          A
                        </button>
                        <button
                          className="accessibility__appearance__inner__item black-and-white"
                          data-type="header-appearance"
                        >
                          A
                        </button>
                        <button
                          className="accessibility__appearance__inner__item black"
                          data-type="header-appearance"
                        >
                          A
                        </button>
                      </div>
                    </div>
                    <p
                      className="accessibility__appearance__inner__text"
                      data-type="header-appearance"
                    >
                      Shirift o'lchami <span id="fontSize"></span>
                    </p>
                    <input
                      data-type="header-appearance"
                      type="range"
                      id="range"
                      min="0"
                      max="5"
                      value={fontSize}
                      onChange={(e) => setFontSize(e.target.value)}
                      step="0.1"
                    />
                  </div>
                </div>
              </div>

              <div className="lang-switch">
                <span className="current-lang">O'zbek</span>
                <ul className="lang-list">
                  <li className="lang-select_item">
                    <a href="/">O'zbek</a>
                  </li>
                  <li className="lang-select_item">
                    <a href="/">Русский</a>
                  </li>
                  <li className="lang-select_item">
                    <a href="/">English</a>
                  </li>
                </ul>
              </div>

              <button className="search-button header-icon">
                <IoSearchOutline />
              </button>
            </div>
            <button className="header-bar">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
