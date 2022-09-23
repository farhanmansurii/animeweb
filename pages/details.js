/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Text, Image, VStack, Container, Flex, HStack, SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import Episode from "./components/episode";

function details() {
  const [deets, setDeets] = useState([]);
  const [name, setName] = useState([]);
  const [epi, setEpi] = useState([]);
  const router = useRouter();
  const animename = router.query.id;
  const URL = "https://consumet-api.herokuapp.com/anime/gogoanime/info/";
  React.useEffect(() => {
    fetch(URL + animename)
      .then((response) => response.json())
      .then((animelist) => setDeets(animelist));
    fetch(URL + animename)
      .then((response) => response.json())
      .then((animelist) => setEpi(animelist.episodes));
    return () => { };
  }, []);

  return (
    <>
      <Flex bg="black" direction="column">
        <VStack>
          <Image src={deets.image} alt='' width="6s00px" p="3rem" />
          <Flex direction="column" pt="3rem">
            <Text
              fontWeight="bold"
              fontSize="3xl"
              textShadow="lg"
              textTransform="uppercase"
              color="white"
            >
              {deets.title}
            </Text>
            <Text color="white">{deets.description}</Text>
          </Flex>
        </VStack>
        <SimpleGrid bg='white'>
          {epi.map((e) => <Link key={e.id} href={`/watch?id=${e.id}` }>{e.id}</Link>)}
        </SimpleGrid>
      </Flex>
    </>
  );
}

export default details;
