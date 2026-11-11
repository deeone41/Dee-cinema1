import Carousel from 'react-bootstrap/Carousel';
import agbara from '../assets/slider/agbara.webp'
import avengers from '../assets/slider/avengers.jpg'
import boomsday from '../assets/slider/boomsday.jpg'
import nofury from '../assets/slider/nofury.jpg'
import street from '../assets/slider/street.webp'
import whalefall from '../assets/slider/whalefall.webp'

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={agbara} alt="" />
      </Carousel.Item>

      <Carousel.Item>
    <img src={avengers} alt="" />
      </Carousel.Item>

      <Carousel.Item>
    <img src={boomsday} alt="" />
      </Carousel.Item>

      <Carousel.Item>
    <img src={nofury} alt="" />
      </Carousel.Item>

      <Carousel.Item>
    <img src={avengers} alt="" />
      </Carousel.Item>

      <Carousel.Item>
    <img src={street} alt="" />
      </Carousel.Item>

      <Carousel.Item>
    <img src={whalefall} alt="" />
      </Carousel.Item>

    </Carousel>
  );
}

export default Slider;