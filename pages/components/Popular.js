import React from "react";
import { Flex, VStack, Grid } from "@chakra-ui/react";
import AnimeCard from "./AnimeCard";
const Popular = ({ baseURL }) => {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((animelist) => setList(animelist.data));
    return () => {};
  }, []);
  return (
    <Grid templateColumns="repeat(6, 1fr)" gap={2}>
      {list.map((ele) => (
        <VStack key={ele.slug}>
          <AnimeCard
            animeImg={ele.coverImage}
            title={ele.title.english}
            id={ele.id}
          />
        </VStack>
      ))}
    </Grid>
  );
};

export default Popular;
