import React, { lazy } from "react";
import highlightOne from '../../../../assets/img/pages/home/highlight-1.jpg';
import highlightTwo from '../../../../assets/img/pages/home/highlight-2.jpg';
import highlightThree from '../../../../assets/img/pages/home/highlight-3.jpg';
import highlightFour from '../../../../assets/img/pages/home/highlight-4.jpg';
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
                            {/* <div 
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    backgroundColor: "var(--main-blue)",
                                    opacity: "0.7",
                                    zIndex: 2,
                                    position: "absolute",
                                    top: 0,
                                    left: 0
                                }}
                            /> */}
                        </div>
                    })
                }
            </ImageCarousel>
        </div>
    </Template>)
}

export default Home;
