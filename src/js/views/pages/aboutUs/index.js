import React, { lazy } from 'react';
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
                <LazyLoad>
                    <img src={aboutUsHero} alt="about-us" />
                </LazyLoad>
            </div>
        </div>

        <div className="about-us-selection-wrapper">
            {/* <div className="about-us-bg">
                <LazyLoad>
                    <img src={aboutUsBg} alt="about-us" />
                </LazyLoad>
            </div> */}
            <div className="about-us-bg-filter"></div>
            <h2>Alur Seleksi Proposal Program PEN Film</h2>
            <div className="about-us-selection-content-wrapper">
                <div className="about-us-selection-content">
                    <LazyLoad>
                        <img src={aboutUsSelection} alt="about-us" />
                    </LazyLoad>
                </div>
            </div>
        </div>
    </Template>)
}

export default AboutUs;
