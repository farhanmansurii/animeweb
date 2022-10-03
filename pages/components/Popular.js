import React from "react";
import AnimeCard from "./AnimeCard";
import { useState } from "react";
const Popular = ({ baseURL }) => {
  const [list, setList] = useState([]);
  React.useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((animelist) => setList(animelist));
    return () => {};
  }, [baseURL]);
  return (
    <SimpleGrid minChildWidth="200px">
      {list.map((ele) => (
        <VStack key={ele.animeId}>
          <AnimeCard
            animeImg={ele.animeImg}
            title={ele.animeTitle}
            id={ele.animeId}
          />
        </VStack>
      ))}
    </SimpleGrid>
  );
};

export default Popular;
