/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Text, Image, VStack, Container, Flex, HStack, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";

function details() {
  const [deets, setDeets] = useState([]);
  const [name, setName] = useState([]);
  const [epi, setEpi] = useState([]);
  const router = useRouter();
  const animename = router.query.id;
  const URL = "https://gogoanime.herokuapp.com/anime-details/";
  React.useEffect(() => {
    fetch(URL + animename)
      .then((response) => response.json())
      .then((animelist) => setName(animelist.title));
    fetch(URL + animename)
      .then((response) => response.json())
      .then((animelist) => setDeets(animelist));
    fetch(URL + animename)
      .then((response) => response.json())
      .then((animelist) => setEpi(animelist.episodesList));
    return () => {};
  }, []);

  return (
    <>
      <Flex bg="black" direction="column">
        <VStack>
          <Image src={deets.animeImg} width="6s00px" p="3rem" />
          <Flex direction="column" pt="3rem">
            <Text
              fontWeight="bold"
              fontSize="3xl"
              textShadow="lg"
              textTransform="uppercase"
              color="white"
            >
              {deets.animeTitle}
            </Text>
            <Text color="white">{deets.synopsis}</Text>
          </Flex>
        </VStack>
        <Text color='white'  fontSize='2xl'>Episodes 1 to {epi.length} </Text>
        <SimpleGrid bg='white'>
ji
        {epi.map((e)=>(<Link href={e.episodeUrl} >{e.episodeId}</Link>))}
        </SimpleGrid>
      </Flex>
    </>
  );
}

export default details;
