/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useRouter } from "next/router";
import { Text, Image, VStack, Container, Flex, HStack, SimpleGrid, Button, Divider } from "@chakra-ui/react";
import Link from "next/link";
import Episode from "./components/Episode";

function details() {
  const [deets, setDeets] = useState([]);
  const [epi, setEpi] = useState([]);
  const [target, setTarget] = useState();
  const [name, setName] = useState([]);
  const router = useRouter();
  const animename = router.query.id;
  const URL = "https://consumet-api.herokuapp.com/anime/gogoanime/info/";
  React.useEffect(() => {
    fetch('https://api.enime.moe/anime/' + animename)
      .then((response) => response.json())
      .then((animelist) => {
        setDeets(animelist)
        fetch('https://consumet-api.herokuapp.com/meta/anilist/info/' + animelist.anilistId).then((res) => res.json()).then(data => {
          setDeets(data)
          console.log(data)
          setName(data.title)
          setEpi(data.episodes)
        })


      })


    return () => { };
  }, []);

  return (
    <  >
      <Flex direction="column" align='center'  >
        <Flex bgRepeat='no-repeat' bgImage={deets.cover} bgSize='cover' bgPos='center' width='100%' >
          <Flex   bgGradient='linear(to-t, white, rgba(255, 255, 255, .1))' width='100%'>
            <Flex direction={{ base: 'column', md: 'row' }} align='center'>

              <Image src={deets.image} alt='' width={{ base: '250px', md: '200px' }} m='1rem' align='center' />
              <Flex direction="column" p="2rem" align='start'>
              <div className="text-shadow-xl text-black text-4xl font-semibold" >
                  {name.english}
                </div>
                <div className="text-shadow-md text-black text-sm  mt-2" >{deets.description}</div>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Text fontSize='2xl' m='1rem'>Episode List</Text>
        <SimpleGrid columns={[2, null, 3]} spacing='30px' width='90%'>
          {
            epi && epi.map((e, index) => <Link key={e.id} href={`/watch?id=${e.id}`}><Episode image={e.image} title={e.title} number={e.number} /></Link>)}
        </SimpleGrid>
      </Flex>
    </>
  );
}

export default details;
