import React, { lazy } from "react";
import LazyLoad from "react-lazyload";
import highlightOne from '../../../../assets/img/pages/home/highlight-1.jpg';
import highlightTwo from '../../../../assets/img/pages/home/highlight-2.jpg';
import highlightThree from '../../../../assets/img/pages/home/highlight-3.jpg';
import highlightFour from '../../../../assets/img/pages/home/highlight-4.jpg';
import aboutUsUpperDivider from '../../../../assets/img/pages/home/about-us-shape.png';
import aboutUsHero from '../../../../assets/img/pages/home/about-us-hero.png';
import "./Home.scss";
const Template = lazy(()=>import('../../layout/template'));
const ImageCarousel = lazy(()=>import('../../component/imageCarousel/ImageCarousel'));

const SLIDER_IMAGES = [
    {
        src: highlightOne,
        name: "highlight-one"
    },
    {
        src: highlightTwo,
        name: "highlight-two"
    },
    {
        src: highlightThree,
        name: "highlight-three"
    },
    {
        src: highlightFour,
        name: "highlight-four"
    },
]

const Home = (props) => {
    return(<Template>
        <div className="home-image-carousel-wrapper">
            <ImageCarousel>
                {
                    SLIDER_IMAGES.map((item, index) => {
                        return <div style={{position: "relative"}} key={`highlight-${index}`} className="carousel-image-wrapper">
                            <img src={item.src} alt={item.name} />
                            <div 
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "#000",
                                    opacity: "0.3",
                                    zIndex: 1,
                                    position: "absolute",
                                    top: 0,
                                    left: 0
                                }}
                            />
                        </div>
                    })
                }
            </ImageCarousel>
            <div className="home-title-wrapper">
                <h1>Program <br /> Pemulihan Ekonomi Nasional</h1>
                <h2>Subsektor Film</h2>
                <div className="home-subtitle-wrapper">
                    <p>Kementerian Pariwisata &amp; Ekonomi Kreatif / <br /> Badan Pariwisata &amp; Ekonomi Kreatif </p>
                </div>
            </div>
        </div>

        <div className="home-about-us-wrapper">
            <LazyLoad>
                <img className="home-about-us-upper-divider" src={aboutUsUpperDivider} alt="" />
            </LazyLoad>
            <div className="home-about-us-content">
                <div></div>
                <div className="home-about-us-text">
                    <h3>Tentang Kami</h3>
                    <p>Program Pemulihan Ekonomi Nasional (Program PEN) adalah rangkaian kegiatan untuk pemulihan perekonomian nasional yang merupakan bagian dari kebijakan keuangan negara yang dilaksanakan oleh Pemerintah untuk mempercepat penanganan pandemi Coronavirus Disease 2019 (COVID-19).</p>
                    <button onClick={() => window.location.href = "/tentang-kami"} className="green-button">
                        Selengkapnya
                    </button>
                </div>
                <div></div>
                <LazyLoad>
                    <img src={aboutUsHero} alt="about-us" />
                </LazyLoad>
                <div></div>
            </div>
        </div>

        <div className="home-our-program-wrapper">

        </div>
    </Template>)
}

export default Home;
