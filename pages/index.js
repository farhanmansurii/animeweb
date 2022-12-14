import "react-pagination-bar/dist/index.css";
import AnimeCard from "./components/AnimeCard";
import React from "react";
import "swiper/css";
import requests from "./api/requests";
import SearchPage from "./searchpage";
import GenreSelector from "./components/GenreSelector";
import Hero from "./components/Hero";
import SimpleSlider from "./components/SimpleSlider";
export default function Home({ results }) {
  console.log(results)
  return (
    <>
    <SimpleSlider/>
       <GenreSelector />
      <div className="p-5 grid mx-auto my-10 grid-cols-2 gap-4 md:grid-cols-6 w-11/12 lg:w-10/12">
        {results.map((e) => (
          <AnimeCard
            animeImg={e.image}
            title={e.title.english || e.title.native}
            key={e.malId}
            rating={e.rating}
            id={e.malId}
          />
        ))}
      </div> 

      <div></div>
    </>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch('https://api.consumet.org/meta/anilist/trending'
    // requests[genre]?.url || requests.popular.url
  ).then((res) => res.json());
  return {
    props: {
      results: request.results,
    },
  };
}
