import React from "react";
import AnimeCard from "./AnimeCard";
import { Scrollbar } from "swiper";
import { Swiper, SwiperSlide, FreeMode } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
export const Row = ({ popular, text }) => {
  return (
    <div className="mt-4 w-10/12 mx-auto">
      <div className="text-3xl font-semibold my-3">{text}</div>
      <Swiper
        slidesPerView={7}
        spaceBetween={35}
        scrollbar={{
          hide: false,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          "@0.75": {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 4,
            spaceBetween: 35,
          },
          "@1.30": {
            slidesPerView: 5,
            spaceBetween: 35,
          },
          "@1.50": {
            slidesPerView: 9,
            spaceBetween: 35,
          },
        }}
        modules={[Scrollbar]}
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
