import { Flex, Grid, HStack, Text, Button, Image, VStack, Divider } from '@chakra-ui/react'
import Head from 'next/head'
import AnimeCard from './components/AnimeCard'
import Navbar from './components/Navbar'
import ScrollContainer from 'react-indiana-drag-scroll'
import React from 'react'
import Popular from './components/Popular'
export const baseURL = 'https://gogoanime.herokuapp.com/'
export default function Home() {



  return (
    <Flex  overflow='hidden'>
      <Navbar />
      <Flex direction='column' overflow='hidden' mt='4rem'  >
        <Divider  my='1rem'/>
        <Text fontSize='2xl'>Popular Anime</Text>
        <Popular baseURL={"https://api.enime.moe/popular"} />
        <Divider  my='1rem'/>
      </Flex>

    </Flex>
  )
}
