import "react-pagination-bar/dist/index.css";
import AnimeCard from "./components/AnimeCard";
import { SunIcon } from "@chakra-ui/icons";
import React from "react";
import { Swiper, SwiperSlide, FreeMode } from "swiper/react";
import "swiper/css";
export const baseURL = "https://gogoanime.herokuapp.com/";
export default function Home({ popular, action }) {
  return (
    <div className="flex px-10 place-self-center scrollbar-hide overflow-x-scroll whitespace-nowrap space-x-10 flex-nowrap w-full xl:w-10/12 ">
      <Swiper
        slidesPerView={2}
        breakpoints={{
          667: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {popular.map((ele) => (
          <SwiperSlide key={ele.slug}>
            <AnimeCard
              animeImg={ele.coverImage}
              title={ele.title.userPreferred}
              id={ele.slug}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
export async function getStaticProps() {
  const response = await fetch("https://api.enime.moe/popular");
  const popular = await response.json();
  const res = await fetch("https://api.enime.moe/recent");
  const action = await res.json();
  return {
    props: { popular: popular.data, action: action.data },
  };
}
