import "react-pagination-bar/dist/index.css";
import AnimeCard from "./components/AnimeCard";
import { SunIcon } from "@chakra-ui/icons";
import React from "react";
import { Swiper, SwiperSlide, FreeMode } from "swiper/react";
import "swiper/css";
export default function Home({ popular, action, adventure }) {
  return (
    <>
      <div className="mt-4">
        <div className="mt-4 mb-10 w-10/12 mx-auto">
          <div className="text-3xl font-semibold my-3">Popular Anime</div>
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
        <div className="mt-4 mb-10 w-10/12 mx-auto">
          <div className="text-3xl font-semibold my-3">Action Anime</div>
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
            {action.map((e) => (
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
        <div className="mt-4 mb-10 w-10/12 mx-auto">
          <div className="text-3xl font-semibold my-3">Adventure Anime</div>
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
            {adventure.map((e) => (
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
      </div>
    </>
  );
}
export async function getStaticProps() {
  const response = await fetch(
    "https://consumet-api.herokuapp.com/meta/anilist/advanced-search?sort=[%22SCORE_DESC%22]"
  );
  const popular = await response.json();
  const res = await fetch(
    "https://consumet-api.herokuapp.com/meta/anilist/advanced-search?genres=[%22Action%22]"
  );
  const action = await res.json();
  const resad = await fetch(
    "https://consumet-api.herokuapp.com/meta/anilist/advanced-search?genres=[%22Adventure%22]"
  );
  const adventure = await resad.json();
  return {
    props: {
      popular: popular.results,
      action: action.results,
      adventure: adventure.results,
    },
  };
}
