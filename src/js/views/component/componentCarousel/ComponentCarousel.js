
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./ComponentCarousel.scss";

const ComponentCarousel = (props) => {
    return <Carousel 
        autoPlay={false}
        dynamicHeight={false}
        emulateTouch 
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        className="component-carousel-wrapper"
    >
        {props.children}
    </Carousel>
}

export default ComponentCarousel;
