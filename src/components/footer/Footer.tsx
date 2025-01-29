import React, { useRef } from "react";
import logo from "@/images/logo.jpg";

const Footer: React.FC = () => {
  const contactRef = useRef<HTMLDivElement | null>(null);
  
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-top top-inner">
            <a href="/" className="logo header-col-1">
              <img src={logo} alt="logo" />
              <span className="logo_title"> Aralboyi milliy tabiat bag'i </span>
            </a>
            <h2 className="section-title title">Bog'lanish</h2>
          </div>

          <section className="section-contact" ref={contactRef} id="section-contact">
            <div className="section-inner">
              <div className="contact-info">
                <p>
                  <span>Manzil:</span>Bozataw rayoni Erkindariya APJ
                </p>
                <p>
                  <span>Jumis waqti:</span>09:00 18:00
                </p>
                <p>
                  <span>Telefon:</span>+998 (93) 717 09 90
                </p>
                <p>
                  <span>Pochta:</span>Orol@ormon.uz
                </p>
              </div>
              <div className="google-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d471.91512807735603!2d59.43346368847492!3d42.8415370056892!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDLCsDUwJzI5LjMiTiA1OcKwMjYnMDEuMiJF!5e0!3m2!1sen!2s!4v1719555696620!5m2!1sen!2s"
                  width="100%"
                  height="450"
                  style={{ border: "0" }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
