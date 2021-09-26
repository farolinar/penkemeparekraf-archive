import React from 'react';
import LazyLoad from 'react-lazyload';
import Template from '../../layout/template';
import aboutUsText from '../../../../assets/img/pages/aboutUs/about-us-text.png';
import aboutUsHero from '../../../../assets/img/pages/aboutUs/about-us-hero.jpg';
import aboutUsSelection from '../../../../assets/img/pages/aboutUs/about-us-selection-clean.png';
import "./AboutUs.scss";

const AboutUs = () => {
    return(<Template>
        <div className="about-us-main-wrapper">
            <h2>Tentang Kami</h2>
            <div className="about-us-content">
                <div>
                    <img src={aboutUsText} alt="about-us" />
                </div>
                <div className="lazyload-wrapper">
                    <img src={aboutUsHero} alt="about-us" />
                </div>
            </div>
        </div>

        <div className="about-us-selection-wrapper">
            {/* <div className="about-us-bg">
                <div className="lazyload-wrapper">
                    <img src={aboutUsBg} alt="about-us" />
                </div>
            </div> */}
            <div className="about-us-bg-filter"></div>
            <h2>Alur Seleksi Proposal Program PEN Film</h2>
            <div className="about-us-selection-content-wrapper">
                <div className="about-us-selection-content">
                    <div className="lazyload-wrapper">
                        <img src={aboutUsSelection} alt="about-us" />
                    </div>
                </div>
            </div>
        </div>
    </Template>)
}

export default AboutUs;
