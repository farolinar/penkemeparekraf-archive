import React, { lazy } from "react";
import LazyLoad from "react-lazyload";
import highlightOne from '../../../../assets/img/pages/home/highlight-1.jpg';
import highlightTwo from '../../../../assets/img/pages/home/highlight-2.jpg';
import highlightThree from '../../../../assets/img/pages/home/highlight-3.jpg';
import highlightFour from '../../../../assets/img/pages/home/highlight-4.jpg';
import aboutUsUpperDivider from '../../../../assets/img/pages/home/about-us-shape.png';
import aboutUsHero from '../../../../assets/img/pages/home/about-us-hero.png';
// import icOurProgramTactical from '../../../../assets/img/pages/home/our-program-tactical-icon.png';
// import icOurProgramProduction from '../../../../assets/img/pages/home/our-program-production-icon.png';
import programTacticalHero from "../../../../assets/img/pages/program/program-tactical-hero.png";
// import ourProgramBg from '../../../../assets/img/pages/home/our-program-bg.jpg';
import "./Home.scss";
import { ROUTES } from "../../../constants";
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

// const OurPrograms = [
//     {
//         title: "Bantuan Pemerintah Promosi Film Indonesia",
//         desc: "Program ini mempromosikan film-film Indonesia terpilih yang akan tayang di media layanan multiplatform pada periode Oktober hingga November 2021.",
//         image: icOurProgramTactical,
//         url: `${ROUTES.program}?s=${ANCHOR.programPromosiTaktikalFilm}`
//     },
//     {
//         title: "Bantuan Pemerintah Produksi Film Indonesia",
//         desc: "Bantuan bagi rumah produksi perfilman untuk memproduksi film-film baru yang dapat ditayangkan melalui media penayangan multiplatform legal",
//         image: icOurProgramProduction,
//         url: `${ROUTES.program}?s=${ANCHOR.programProduksiFilm}`
//     }
// ]

const Home = (props) => {

    // const OurProgramItem = ({item}) => {
    //     return <div className="our-program-item-wrapper">
    //         <div className="our-program-item-content">
    //             <LazyLoad>
    //                 <img src={item.image} alt="" />
    //             </LazyLoad>
    //             <div className="our-program-item-text">
    //                 <p className="our-program-title">{item.title}</p>
    //                 <p className="our-program-desc">{item.desc}</p>
    //             </div>
    //         </div>
    //         <button>
    //             <a href={item.url}>Selengkapnya</a>
    //         </button>
    //     </div>
    // }

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
                    <p>Program Pemulihan Ekonomi Nasional yang selanjutnya disebut Program PEN adalah rangkaian kegiatan untuk pemulihan perekonomian nasional yang merupakan bagian dari kebijakan keuangan negara yang dilaksanakan oleh Pemerintah untuk mempercepat penanganan pandemi Coronavirus Disease 2019 (COVID-19) dan/atau menghadapi ancaman yang membahayakan perekonomian nasional dan/atau stabilitas sistem keuangan serta penyelamatan ekonomi nasional (PP No. 43/2020).</p>
                    <button onClick={() => window.location.href = ROUTES.aboutUs} className="green-button">
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
            {/* <div className="home-our-program-bg">
                <LazyLoad>
                    <img src={ourProgramBg} />
                </LazyLoad>
            </div> */}
            {/* <h2>Program Kami</h2> */}
            <div className="home-our-program-content">
                {/* {
                    OurPrograms.map((item, idx) => <OurProgramItem key={idx} item={item} />)
                } */}
                <div className="our-program-content-new">
                    <LazyLoad>
                        <img src={programTacticalHero} alt="program-kami" />
                    </LazyLoad>
                    <div className="our-program-content-text">
                        <h2>Program Kami</h2>
                        <h3>Bantuan Pemerintah Promosi Film Indonesia</h3>
                        <p>Bertujuan untuk meningkatkan awareness masyarakat untuk tetap mendukung kemajuan dan pengembangan industri perfilman Indonesia melalui kegiatan promosi Film Indonesia yang akan tayang di media penayangan multiplatform legal, untuk dipromosikan pada jangka waktu Oktober-November 2021.</p>
                        <button>
                            <a href={ROUTES.program}>Selengkapnya</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div className="home-register-wrapper">
            <div className="home-register-content">
                <h2>Pendaftaran</h2>
                <p>Undangan bagi Rumah Produksi Film Indonesia untuk berpartisipasi dan mendaftar dalam program Pemulihan Ekonomi Nasional (PEN) Subsektor Film melalui Skema Bantuan Pemerintah Promosi Film Indonesia</p>
                <br />
                <br />
                <br />
                <p>Pendaftaran akan berlangsung mulai</p>
                <p>17 - 27 September 2021</p>
                <div className="home-register-button">
                    <button>
                        <a href={ROUTES.registerTerms}>Syarat Pendaftaran</a>
                    </button>
                    <button>
                        <a href={ROUTES.downloadForm}>Unduh Formulir</a>
                    </button>
                    <button>
                        <a href={ROUTES.uploadForm}>Unggah Formulir</a>
                    </button>
                </div>
            </div>
        </div>
    </Template>)
}

export default Home;
