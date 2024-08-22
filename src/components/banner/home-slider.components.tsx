import { Carousel } from "flowbite-react";

// images
import SliderComponents from "../../components/common/slider/slider.components";
import banner1 from "../../assets/images/banner 1.jpg";
import banner2 from "../../assets/images/banner 2.jpg";
import banner3 from "../../assets/images/banner 3.jpg";
import banner4 from "../../assets/images/banner 4.jpg";
import banner5 from "../../assets/images/banner 5.jpg";
import banner6 from "../../assets/images/banner 6.jpg";
import banner7 from "../../assets/images/banner 7.jpg";

const HomeSlider = () => {
  return (
    <>
      <div className="h-[600px]">
        <Carousel slideInterval={5000}>
          <SliderComponents
            image={banner1}
            link="http://localhpst:banner1"
            alt="image error "
          />
          <SliderComponents
            image={banner2}
            link="http://localhpst:banner2"
            alt="image error "
          />
          <SliderComponents
            image={banner3}
            link="http://localhpst:banner3"
            alt="image error "
          />
          <SliderComponents
            image={banner4}
            link="http://localhpst:banner4"
            alt="image error "
          />
          <SliderComponents
            image={banner5}
            link="http://localhpst:banner5"
            alt="image error "
          />
          <SliderComponents
            image={banner6}
            link="http://localhpst:banner6"
            alt="image error "
          />
          <SliderComponents
            image={banner7}
            link="http://localhpst:banner7"
            alt="image error "
          />
        </Carousel>
      </div>
    </>
  );
};

export default HomeSlider;
