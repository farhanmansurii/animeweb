import React, { useEffect, useState } from "react";
import AnimeCard from '../components/AnimeCard';
const URL = "https://api.enime.moe/search/";
const SearchPage = () => {
  const [val, setval] = useState("");
  const [searchList, setSearchList] = useState([]);
  useEffect(() => {
    fetch(URL + val)
      .then((response) => response.json())
      .then((animelist) => setSearchList(animelist.data));

    return () => { };
  }, [val]);

  return (
    <>
      <div className="form-control  place-content-center">
        <div className="flex place-self-center mt-4 ">
          <input type="text" placeholder="Search Any Anime/Movie" input={val} onChange={(e) => setval(e.target.value)} className="input  input-ghost " />

        </div>
        <div></div>
        <div className=" flex overflow-x-scroll p-2 scrollbar-hide space-x-2 ">
          {searchList !== null ?
            (<div className=" flex overflow-x-scroll p-2 scrollbar-hide space-x-2 ">
              {searchList?.map((e) =>
                <AnimeCard key={e.mappings.mal} animeImg={e.coverImage} title={e.title.userPreferred || e.title} id={e.mappings.mal} />
              )}
            </div>) : <div>Search</div>}

        </div>
      </div>
    </>
  )
}

export default SearchPage;
