import {
  Flex,
  Grid,
  HStack,
  Text,
  Button,
  Image,
  VStack,
  Divider,
} from "@chakra-ui/react";
import Head from "next/head";
import AnimeCard from "./components/AnimeCard";
import Navbar from "./components/Navbar";
import ScrollContainer from "react-indiana-drag-scroll";
import React from "react";
import Popular from "./components/Popular";
export const baseURL = "https://gogoanime.herokuapp.com/";
export default function Home() {
  return (
    <Grid background="black">
      <Navbar />
      <Flex direction="column" mt="4rem">
        <Text fontSize="2xl" color="white">
          Popular Anime
        </Text>
        <Popular baseURL={"https://api.enime.moe/popular"} />
        <Divider my="1rem" />
      </Flex>
    </Grid>
  );
}
