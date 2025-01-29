import React from "react";
import HeaderTop from "./HeaderTop";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  

  return (
    <>
      <HeaderTop />
      <div className="header-menu">
        <button className="collapse">
          Закрыть <span>&times;</span>
        </button>
        <div className="container">
          <ul className="menu">
            <li className="menu_item">
              <Link to="/">Bosh sahifa</Link>
            </li>
            <li className="menu_item">
              <Link to="/about">Biz haqimizda</Link>
            </li>
            <li className="menu_item">
              <Link to="/administration">Administratsiya</Link>
            </li>
            <li className="menu_item">
              <Link to="/photo-gallery">Foto galereya</Link>
            </li>
            <li className="menu-item">
              <Link to="/video-gallery">Video galereya</Link>
            </li>
            <li>
              <Link to="/tv">TV</Link>
            </li>
            <li className="menu_item">
              <a href="/#section-contact">
                Bog'lanish
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
