import { Flex, Grid, HStack, Text, Button, Image, VStack } from '@chakra-ui/react'
import Head from 'next/head'
import AnimeCard from './components/AnimeCard'
import Navbar from './components/Navbar'
import ScrollContainer from 'react-indiana-drag-scroll'
import React from 'react'
import Popular from './components/Popular'
export const baseURL = 'https://gogoanime.herokuapp.com/'
export default function Home() {

  

  return (
    <Flex >
      <Navbar />
      <VStack mt='4rem' overflowX='clip'  >
        <Text>
          Popular Anime
        </Text>
        <Popular />
      </VStack>

    </Flex>
  )
}
