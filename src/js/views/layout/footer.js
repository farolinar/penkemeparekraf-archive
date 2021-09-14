import React from "react";
import LazyLoad from "react-lazyload";
import "./layout.scss";
// import icWa from "../../../assets/img/icons/ic-wa.png";
import icEmail from "../../../assets/img/icons/ic-email.png";

const Footer = () => {
    return(<div className="footer-wrapper">
        <h2>Kontak Kami</h2>
        <p>Hubungi kontak person dibawah ini untuk terhubung dengan kami</p>
        <div className="footer-contact-wrapper">
            <div className="footer-contact">
                <LazyLoad>
                    <img src={icEmail} alt="email" />
                </LazyLoad>
                <a href="mailto:penfilm@kemenparekraf.go.id" target="_blank" rel="noreferrer">penfilm@kemenparekraf.go.id</a>
            </div>
            {/* <div className="footer-contact">
                <LazyLoad>
                    <img src={icWa} alt="wa" />
                </LazyLoad>
                <a href="https://wa.me/6288888888888" target="_blank" rel="noreferrer">0888 8888 8888</a>
            </div> */}
        </div>
    </div>)
}

export default Footer;
