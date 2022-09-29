import "react-pagination-bar/dist/index.css";
import AnimeCard from "./components/AnimeCard";
import { SunIcon } from "@chakra-ui/icons";
import React from "react";
import { Swiper, SwiperSlide, FreeMode } from "swiper/react";
import "swiper/css";
import Row from "./Row";
import Episode from "./components/Episode";
export default function Home({ popular, action, adventure  }) {
  return (<>
  <div className="mt-4">
  <Row popular={popular} text="Popular Anime" />
  <Row popular={action} text="Action Anime"/>
  <Row popular={adventure} text="Adventure Anime"/>
  </div> 
  </>
  );
}
export async function getStaticProps() {
  const response = await fetch("https://consumet-api.herokuapp.com/meta/anilist/advanced-search?sort=[%22SCORE_DESC%22]");
  const popular = await response.json();
  const res = await fetch("https://consumet-api.herokuapp.com/meta/anilist/advanced-search?genres=[%22Action%22]");
  const action = await res.json();
  const resad = await fetch("https://consumet-api.herokuapp.com/meta/anilist/advanced-search?genres=[%22Adventure%22]");
  const adventure = await resad.json();
  return {
    props: { popular: popular.results , action: action.results, adventure: adventure.results },
  };
}
