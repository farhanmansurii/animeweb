import {
  Flex,
  Grid,
  HStack,
  Text,
  Button, SimpleGrid,
  Image,
  VStack,
  Divider,
} from "@chakra-ui/react";
import ReactPlayer from 'react-player'
import Head from "next/head";
import AnimeCard from "./components/AnimeCard";
import Navbar from "./components/Navbar";
import ScrollContainer from "react-indiana-drag-scroll";
import React from "react";
import Popular from "./components/Popular";
export const baseURL = "https://gogoanime.herokuapp.com/";
export default function Home({ popular, action }) {
  return (
    <Grid>
      <Flex direction="column" mt="4rem">
        <Text fontSize="3xl"  align="center" my="1rem">
          Popular Anime
        </Text>
        <SimpleGrid columns={[2, null, 5]} width={['95%', null, '80%']} alignSelf='center'>
          {popular.slice(0,10).map((ele) => (
            <VStack key={ele.mal_id}>
            <AnimeCard
              animeImg={ele.animeImg}
              title={ele.animeTitle}
              id={ele.mal_id}
            />
          </VStack>
          ))}
        </SimpleGrid>
        <Divider my="1rem" />
        <Text fontSize="3xl"  align="center" my="1rem">
          Recent Episodes
        </Text>
        <SimpleGrid columns={[2, null, 5]} width={['95%', null, '70%']} alignSelf='center'>
          {action.map((ele) => (
            <VStack key={ele.animeId}>
              <AnimeCard
                animeImg={ele.animeImg}
                title={ele.episodeTitle + ele.episodeNum}
                id={ele.animeId}
              />
            </VStack>
          ))}
        </SimpleGrid>
      </Flex>
    </Grid>
  );
}
export async function getStaticProps() {

  const response = await fetch(
    'https://animeapi-demo.herokuapp.com/popular/');
  const popular = await response.json();
  const res = await fetch('https://animeapi-demo.herokuapp.com/animix/recent-episodes')
  const action = await res.json()
  return {
    props: { popular:popular, action: action },
  };
}
