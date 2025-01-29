import React from "react";

import admin1 from "@/images/admins/admin-photo-1.jpg";
import admin2 from "@/images/admins/admin-photo-2.jpg";
import { MdLocalPhone, MdOutlineEmail } from "react-icons/md";

const Administration: React.FC = () => {
  return (
    <>
      <section className="section-administration">
        <div className="container">
          <div className="rows">
            <div className="row-1 row">
              <img src={admin1} alt="image" />
              <div className="info-box">
                <h3 className="title">
                  Aralboyi milliy tabiat bag'i direktori Erkinbay Allaniyazov
                  Amanbayevich
                </h3>
                <div className="body">
                  <div className="phone">
                    <span>
                      <MdLocalPhone /> Telefon
                    </span>
                    <p>+998(97) 561-74-72</p>
                  </div>
                  <div className="email">
                    <span>
                      <MdOutlineEmail /> Elektron manzili
                    </span>
                    <p>Orol@ormon.uz</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row-1 row">
              <img src={admin2} alt="image" />
              <div className="info-box">
                <h3 className="title">
                  Aralboyi milliy tabiat bag'i Qoriqlaw boyinsha direktor
                  orinbasari Salamat Amaniyazov Kurbashevich
                </h3>
                <div className="body">
                  <div className="phone">
                    <span>
                      <MdLocalPhone /> Telefon
                    </span>
                    <p>+99893-717-09-90</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Administration;
