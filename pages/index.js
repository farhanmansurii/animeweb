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
export default function Home({ popular }) {
  return (
    <Grid background="black">
      <Navbar />

      <Flex direction="column" mt="4rem">
        <Text fontSize="3xl" color="white" align="center" my="1rem">
          Popular Anime
        </Text>
        <SimpleGrid minChildWidth="200px" >
          {popular.map((ele) => (
            <VStack key={ele.animeId}>
              <AnimeCard
                animeImg={ele.animeImg}
                title={ele.animeTitle}
                id={ele.animeId}
              />
            </VStack>
          ))}
        </SimpleGrid>
        <Divider my="1rem" />
      </Flex>
    </Grid>
  );
}
export async function getStaticProps() {

  const response = await fetch(
    'https://gogoanime.herokuapp.com/popular');

  const popular = await response.json();

  return {
    props: { popular },
  };
}
