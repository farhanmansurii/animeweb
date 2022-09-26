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
      <Navbar />

      <Flex direction="column" mt="4rem">
        <Text fontSize="3xl"  align="center" my="1rem">
          Popular Anime
        </Text>
        <SimpleGrid minChildWidth="200px" >
          {popular.map((ele) => (
            <VStack key={ele.id}>
            <AnimeCard
              animeImg={ele.image}
              title={ele.title}
              id={ele.id}
            />
          </VStack>
          ))}
        </SimpleGrid>
        <Divider my="1rem" />
        <Text fontSize="3xl"  align="center" my="1rem">
          Recent Episodes
        </Text>
        <SimpleGrid minChildWidth="200px" >
          {action.map((ele) => (
            <VStack key={ele.id}>
              <AnimeCard
                animeImg={ele.image}
                title={ele.title}
                id={ele.id}
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
    'https://consumet-api.herokuapp.com/anime/gogoanime/top-airing');
  const popular = await response.json();
  const res = await fetch('https://consumet-api.herokuapp.com/anime/gogoanime/recent-episodes?type=1')
  const action = await res.json()
  return {
    props: { popular:popular.results, action: action.results },
  };
}
