/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import AnimeCard from "./components/AnimeCard";
const URL = "https://api.consumet.org/meta/anilist/";

const SearchPage = () => {
  const [val, setval] = useState("");
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    fetch(URL + val)
      .then((response) => response.json())
      .then((animelist) => setSearchList(animelist.results));
    return () => {};
  }, [val]);

  return (
    <>
      <input
        className="bg-transparent text-white"
        placeholder="Search Any Anime/Movie"
        input={val}
        onChange={(e) => setval(e.target.value)}
      />
      <div></div>
      <div className="p-5 grid">
        {searchList?.map((e, index) => (
          <>
            <AnimeCard
              animeImg={e.image}
              title={e.title.english || e.title.native}
              key={e.malId}
              rating={e.rating}
              id={e.malId}
            />
          </>
        ))}
      </div>
    </>
  );
};

export default SearchPage;
