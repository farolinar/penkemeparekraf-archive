
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./ImageCarousel.scss";

const ImageCarousel = (props) => {
    return <Carousel 
        autoPlay
        dynamicHeight={false}
        emulateTouch 
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        className="image-carousel-wrapper"
    >
        {props.children}
    </Carousel>
}

export default ImageCarousel;
