import React from "react";
import AnimeCard from "./AnimeCard";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide, FreeMode } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

const Row = ({ popular, text }) => {
  return (
    <div className="mt-4 mb-10 w-10/12 mx-auto">
      <div className="text-3xl font-semibold my-3">{text}</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={35}
        breakpoints={{
          "@0.00": {
            slidesPerView: 4.4,
            spaceBetween: 6,
          },
          "@0.75": {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 6,
            spaceBetween: 35,
          },
          "@1.30": {
            slidesPerView: 6,
            spaceBetween: 35,
          },
          "@1.50": {
            slidesPerView: 9,
            spaceBetween: 35,
          },
        }}
        s
        className="mySwiper"
      >
        {popular.map((e) => (
          <SwiperSlide key={e.malId}>
            <AnimeCard
              id={e.malId}
              title={e.title.english}
              animeImg={e.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Row;
