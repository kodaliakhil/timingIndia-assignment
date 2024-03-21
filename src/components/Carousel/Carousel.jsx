import Carousel from "react-bootstrap/Carousel";
import { useState } from "react";

const CarouselComp = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={1000} indicators={false} style={{height:"40vh"}}>
      <Carousel.Item style={{height:"40vh"}}>
        <div className="w-100 d-flex justify-content-center">
          <img src="https://www.ifinish.in/uploads/EB_9d12d071c18b535cda26f47f20e5c7ae.jpg"  style={{width:"90%"}}/>
        </div>
      </Carousel.Item>
      <Carousel.Item style={{height:"40vh"}}>
        <div className="w-100 d-flex justify-content-center">
          <img src="https://www.ifinish.in/uploads/EB_d843407a1a701630bb297c1148229eff.jpg" style={{width:"90%"}}/>
        </div>
      </Carousel.Item>
      <Carousel.Item style={{height:"40vh"}}>
        <div className="w-100 d-flex justify-content-center">
          <img src="https://www.ifinish.in/uploads/EB_7fbfc161a3b873bf2119c788ed93d1f4.jpg" style={{width:"90%"}}/>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComp;
