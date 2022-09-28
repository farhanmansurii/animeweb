import React from "react";
import { Flex, VStack, Grid, SimpleGrid } from "@chakra-ui/react";
import AnimeCard from "./AnimeCard";
const Popular = ({ baseURL }) => {
  const [pageApi, setPageApi] = useState(1);
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((animelist) =>setList(animelist));
    return () => {};
  }, [baseURL]);
  return (
    <SimpleGrid  minChildWidth="200px" >
      {list.map((ele) => 
        <VStack key={ele.animeId}>
          <AnimeCard
            animeImg={ele.animeImg}
            title={ele.animeTitle}
            id={ele.animeId}
          />
        </VStack>
      )}
    </SimpleGrid>
  );
};

export default Popular;
