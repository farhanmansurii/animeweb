/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Text, Image, VStack, Container, Flex, HStack, SimpleGrid, Button, Divider } from "@chakra-ui/react";
import Link from "next/link";

function details() {
  const [deets, setDeets] = useState([]);
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
  async function getServerSideProps() {
    return {
      props: {}, // will be passed to the page component as props
    }
  }

  return (
    <>
      <Flex bg="black" direction="column">
        <Flex direction='row'>
          <Image src={deets.image} alt='' width="300px" p="3rem" />
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
        </Flex>
        <Divider  mt='1rem'/>
        <Text fontSize='2xl' color='white' m='1rem'>Episode List</Text>
        <Divider  mt='1rem'/>
        <SimpleGrid  columns={[3, null, 8]}  mx='2rem' alignItems='center' >
          {
          epi && epi.map((e , index ) => <Link key={e.id} href={`/watch?id=${e.id}` }><Button width='fit-content' m='0.5rem' width='100px'>Ep No {index+1}</Button></Link>)}
        </SimpleGrid>
      </Flex>
    </>
  );
}

export default details;
