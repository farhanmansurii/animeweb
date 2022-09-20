import { Button, Flex, Text, Image } from '@chakra-ui/react'
import React from 'react'
function AnimeCard({ animeImg , title }) {
  return (
    <>
      <Flex flexDir='column' mx='2' maxH='300px '>
        <Image src={animeImg} borderRadius='xl' layout='fill' height='12.8rem' minWidth='9.6rem' />
        <Text noOfLines={1}>{title}</Text>
      </Flex></>
  )
}

export default AnimeCard
