/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Text, Image, VStack, Container, Flex, HStack, SimpleGrid, Button, Divider } from "@chakra-ui/react";
import Link from "next/link";

function details() {
  const [deets, setDeets] = useState([]);
  const [epi, setEpi] = useState([]);
  const [target, setTarget] = useState([]);
  const tar = []
  const [name, setName] = useState([]);
  const router = useRouter();
  const animename = router.query.id;
  const URL = "https://consumet-api.herokuapp.com/anime/gogoanime/info/";
  React.useEffect(() => {
    fetch('https://api.enime.moe/anime/' + animename)
      .then((response) => response.json())
      .then((animelist) => {
        setDeets(animelist)
        setName(animelist.title)
        setEpi(animelist.episodes)
        console.log(animelist.episodes)
        
        
      })

    return () => { };
  }, []);

  return (
    <>
      <Flex direction="column">
        <Link href='/'>
          <Button> back to Home</Button>
        </Link>
        <Flex direction='row'>
          <Image src={deets.coverImage} alt='' width="300px" p="3rem" />
          <Flex direction="column" pt="3rem">
            <Text
              fontWeight="bold"
              fontSize="3xl"
              textShadow="lg"
              textTransform="uppercase"

            >
              {name.userPreferred}
            </Text>
            <Text >{deets.description}</Text>
          </Flex>
        </Flex>
        <Divider mt='1rem' />
        <Text fontSize='2xl' m='1rem'>Episode List</Text>
        <Divider mt='1rem' />
        <SimpleGrid columns={[3, null, 8]} minChildWidth='300px' mx='2rem' alignItems='center' >
          {
            epi && epi.map((e, index) => <Link key={e.id} href={`/watch?id=${e.id}`}><Container backgroundImage={e.image}><Button width='fit-content' m='0.5rem' >{e.number} {e.title}</Button></Container></Link>)}
        </SimpleGrid>
      </Flex>
    </>
  );
}

export default details;
