import React, { lazy } from "react";
import LazyLoad from "react-lazyload";
import highlightOne from '../../../../assets/img/pages/home/highlight-1-new.png';
import highlightTwo from '../../../../assets/img/pages/home/highlight-2-new.png';
import highlightThree from '../../../../assets/img/pages/home/highlight-3-new.png';
import highlightFour from '../../../../assets/img/pages/home/highlight-4-new.png';
import aboutUsUpperDivider from '../../../../assets/img/pages/home/about-us-shape.png';
import aboutUsHero from '../../../../assets/img/pages/home/about-us-hero.png';
// import icOurProgramTactical from '../../../../assets/img/pages/home/our-program-tactical-icon.png';
// import icOurProgramProduction from '../../../../assets/img/pages/home/our-program-production-icon.png';
import programTacticalHero from "../../../../assets/img/pages/program/program-tactical-home-hero.png";
import programProductionHero from "../../../../assets/img/pages/program/program-production-home-hero.png";
import programPraProductionHero from "../../../../assets/img/pages/program/program-pra-production-hero.png";
// import ourProgramBg from '../../../../assets/img/pages/home/our-program-bg.jpg';
import "./Home.scss";
import { ANCHOR, ROUTES } from "../../../constants";
import RegisterPage from "../../component/registerPage";
import { Fragment } from "react";
import ComponentCarousel from "../../component/componentCarousel/ComponentCarousel";
import CarouselPengumuman, { PENGUMUMAN_TYPES } from "../../component/carouselPengumuman";
const Template = lazy(()=>import('../../layout/template'));
const ImageCarousel = lazy(()=>import('../../component/imageCarousel/ImageCarousel'));

const SLIDER_IMAGES = [
    {
        src: null,
        name: PENGUMUMAN_TYPES.produksi
    },
    {
        src: null,
        name: PENGUMUMAN_TYPES.promosi
    },
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
                        if(Object.values(PENGUMUMAN_TYPES).indexOf(item.name) > -1) {
                            return <CarouselPengumuman type={item.name}/>
                        }
                        else return <div style={{position: "relative"}} key={`highlight-${index}`} className="carousel-image-wrapper">
                            <img src={item.src} alt={item.name} />
                            {/* <div 
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
                            /> */}
                        </div>
                    })
                }
            </ImageCarousel>
            {/* <div className="home-title-wrapper">
                <h1>Program <br /> Pemulihan Ekonomi Nasional</h1>
                <h2>Subsektor Film</h2>
                <div className="home-subtitle-wrapper">
                    <p>Kementerian Pariwisata &amp; Ekonomi Kreatif / <br /> Badan Pariwisata &amp; Ekonomi Kreatif </p>
                </div>
            </div> */}
        </div>

        <div className="home-about-us-wrapper">
            <div className="lazyload-wrapper">
                <img className="home-about-us-upper-divider" src={aboutUsUpperDivider} alt="" />
            </div>
            <div className="home-about-us-content">
                <div></div>
                <div className="home-about-us-text">
                    <h2>Tentang Kami</h2>
                    <p>Program Pemulihan Ekonomi Nasional yang selanjutnya disebut Program PEN adalah rangkaian kegiatan untuk pemulihan perekonomian nasional yang merupakan bagian dari kebijakan keuangan negara yang dilaksanakan oleh Pemerintah untuk mempercepat penanganan pandemi Coronavirus Disease 2019 (COVID-19) dan/atau menghadapi ancaman yang membahayakan perekonomian nasional dan/atau stabilitas sistem keuangan serta penyelamatan ekonomi nasional (PP No. 43/2020).</p>
                    <button onClick={() => window.location.href = ROUTES.aboutUs} className="green-button">
                        Selengkapnya
                    </button>
                </div>
                <div></div>
                <div className="lazyload-wrapper">
                    <img src={aboutUsHero} alt="about-us" />
                </div>
                <div></div>
            </div>
        </div>

        <div className="home-our-program-wrapper">
            {/* <div className="home-our-program-bg">
                <div className="lazyload-wrapper">
                    <img src={ourProgramBg} />
                </div>
            </div> */}
            {/* <h2>Program Kami</h2> */}
            <div className="home-our-program-content">
                {/* {
                    OurPrograms.map((item, idx) => <OurProgramItem key={idx} item={item} />)
                } */}
                <div className="our-program-content-new">
                    <ComponentCarousel>
                        <div className="our-program-content">
                            <div className="lazyload-wrapper">
                                <img src={programTacticalHero} alt="program-kami" />
                            </div>
                            <div className="our-program-content-text">
                                <h2>Program Kami</h2>
                                <h3>Bantuan Pemerintah<br />Promosi Film Indonesia</h3>
                                <p>Bertujuan untuk meningkatkan minat masyarakat menonton Film Indonesia Siap Tayang Terpilih dan mendukung kemajuan industri perfilman melalui kegiatan promosi film</p>
                                {/* <br /> */}
                                <p>Pelaksanaan Promosi dilakukan pada jangka waktu Oktober - 10 Desember 2021.</p>
                                <p>Sebanyak 22 Rumah Produksi telah ditetapkan sebagai Penerima Bantuan Terpilih pada Bantuan Pemerintah Promosi Film Indonesia.</p>
                                <p>Pendaftar maupun penerima bantuan terpilih tidak akan dipungut biaya dalam keseluruhan rangkaian proses Program Pemulihan Ekonomi Nasional Subsektor Film.</p>
                                <button>
                                    <a href={`${ROUTES.program}?s=${ANCHOR.programPromosiTaktikalFilm}`}>Selengkapnya</a>
                                </button>
                            </div>
                        </div>
                        <div className="our-program-content">
                            <div className="lazyload-wrapper">
                                <img src={programPraProductionHero} alt="program-kami" />
                            </div>
                            <div className="our-program-content-text">
                                <h2>Program Kami</h2>
                                <h3>Bantuan Pemerintah<br />Pra-Produksi Film Indonesia</h3>
                                <p>Bertujuan menggerakkan Ekosistem Perfilman Indonesia dan mendukung penyerapan tenaga kerja di industri untuk Film Panjang dan/atau Film Dokumenter Panjang Indonesia yang akan melaksanakan Pra-Produksi di tahun 2021</p>
                                {/* <br /> */}
                                <p>Target Penerima Bantuan sebanyak 50 Rumah Produksi yang memiliki rencana kegiatan Pra-Produksi Film. Rumah Produksi dapat mengajukan maksimal 2 (dua) proposal kegiatan pra-produksi film panjang dan/atau film dokumenter panjang pada tahun 2021. Nilai bantuan yang diberikan sebesar Rp. 860.000.000,- untuk setiap film yang telah lolos kurasi.</p>
                                <button>
                                    <a href={`${ROUTES.program}?s=${ANCHOR.programPraProduksiFilm}`}>Selengkapnya</a>
                                </button>
                            </div>
                        </div>
                        <div className="our-program-content">
                            <div className="lazyload-wrapper">
                                <img src={programProductionHero} alt="program-kami" />
                            </div>
                            <div className="our-program-content-text">
                                <h2>Program Kami</h2>
                                <h3>Bantuan Pemerintah<br />Produksi Film Indonesia</h3>
                                <p>Bertujuan mendorong produksi karya kreatif Film Pendek dan Film Dokumenter Pendek, untuk penyerapan tenaga kerja dan menggerakkan ekosistem perfilman Indonesia.</p>
                                {/* <br /> */}
                                <p>Pelaksanaan produksi Film Terpilih wajib selesai hingga tahap final pada akhir periode program sampai dengan 10 Desember 2021.</p>
                                <p>Pendaftar maupun penerima bantuan terpilih tidak akan dipungut biaya dalam keseluruhan rangkaian proses Program Pemulihan Ekonomi Nasional Subsektor Film</p>
                                <button>
                                    <a href={`${ROUTES.program}?s=${ANCHOR.programProduksiFilm}`}>Selengkapnya</a>
                                </button>
                            </div>
                        </div>
                    </ComponentCarousel>
                </div>
            </div>
        </div>
        <RegisterPage />
        {/* <div className="home-register-wrapper">
            <div className="home-register-content">
                <h2>Pendaftaran</h2>
                <p>Undangan bagi Insan Perfilman Indonesia untuk berpartisipasi dan mendaftar dalam program Pemulihan Ekonomi Nasional (PEN) Subsektor Film melalui Skema Promosi - Pra-Produksi - Produksi</p>
                <br />
                <br />
                <br />
                <p>Pendaftaran akan berlangsung mulai dari</p>
                <br />
                <p>8 - 15 Oktober 2021</p>
                <div className="home-register-button">
                    <button>
                        <a href={ROUTES.registerTacticalTerms}>Syarat Pendaftaran</a>
                    </button>
                    <button>
                        <a href={ROUTES.downloadForm}>Unduh Formulir</a>
                    </button>
                    <button>
                        <a href={ROUTES.uploadForm}>Unggah Formulir</a>
                    </button>
                </div>
            </div>
        </div> */}
    </Template>)
}

export default Home;
