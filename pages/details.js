/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Text, Image, VStack, Container, Flex, HStack } from "@chakra-ui/react";

function details() {
  const [deets, setDeets] = useState([]);
  const [name, setName] = useState([]);
  const [epi, setEpi] = useState([]);
  const router = useRouter();
  const animename = router.query.id;
  const URL = "https://api.enime.moe/anime/";
  React.useEffect(() => {
    fetch(URL + animename)
      .then((response) => response.json())
      .then((animelist) => setName(animelist.title));
    fetch(URL + animename)
      .then((response) => response.json())
      .then((animelist) => setDeets(animelist));
    fetch(URL + animename)
      .then((response) => response.json())
      .then((animelist) => setEpi(animelist.episodes));
    return () => {};
  }, []);

  return (
    <>
      <Flex bg="black" direction="column">
        <VStack>
          <Image src={deets.coverImage} width="6s00px" p="3rem" />
          <Flex direction="column" pt="3rem">
            <Text
              fontWeight="bold"
              fontSize="3xl"
              textShadow="lg"
              textTransform="uppercase"
              color="white"
            >
              {name.english}
            </Text>
            <Text color="white">{deets.description}</Text>
          </Flex>
        </VStack>
        {epi.map((e) => (
          <Container key={e.id} size="sm" bg="blackAlpha.200" m="1">
            <Image src={e.image} width="500px" p="3rem" alt="images" />
            <Text color="white">
              {e.number} {e.title}
            </Text>
          </Container>
        ))}
      </Flex>
    </>
  );
}

export default details;
