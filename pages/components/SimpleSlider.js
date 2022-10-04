import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick-theme.css";
export default function SimpleSlider() {
  const [SliderImg, setSliderImg] = useState()
  React.useEffect(() => {
    const request = fetch("https://api.consumet.org/anime/gogoanime/top-airing")
    console.log(request)
    setSliderImg(request.results)
    return () => {
    }
  }, [])

  var settings = {

    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (

    <div className="w-[90vw] mx-auto ">
      <Slider  {...settings}>

        <div >
          <div className='w-vw flex place-items-center h-[200px] md:h-[300px] bg-no-repeat bg-cover bg-center bg-white' style={{ backgroundImage: `url("https://s4.anilist.co/file/anilistcdn/media/anime/banner/1535.jpg")` }}>2</div>
        </div>
        <div >
          <div className='w-vw flex place-items-center h-[200px] md:h-[300px] bg-no-repeat bg-cover bg-center bg-white' style={{ backgroundImage: `url("https://s4.anilist.co/file/anilistcdn/media/anime/banner/1535.jpg")` }}>2</div>
        </div>
        <div>
          <div className='w-vw flex place-items-center h-[200px] md:h-[300px] bg-no-repeat bg-cover bg-center bg-white' style={{ backgroundImage: `url("https://s4.anilist.co/file/anilistcdn/media/anime/banner/1535.jpg")` }}>2</div>
        </div>
        <div >
          <div className='w-vw flex place-items-center h-[200px] md:h-[300px] bg-no-repeat bg-cover bg-center bg-white' style={{ backgroundImage: `url("https://s4.anilist.co/file/anilistcdn/media/anime/banner/1535.jpg")` }}>2</div>
        </div>

      </Slider></div>
  );
}
