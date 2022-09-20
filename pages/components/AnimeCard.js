import { Button, Flex, Text, Image } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
function AnimeCard({ animeImg , title ,link}) {
  return (
    <Link href={link}>
      <Flex flexDir='column'  p='3'_hover={{background:'#D3D3D3' , borderRadius:'10px'}}>
        <Image src={animeImg} borderRadius='xl' layout='fill' height='12.8rem' minWidth='9.6rem' />
        <Text noOfLines={1}>{title}</Text>
      </Flex></Link>
  )
}

export default AnimeCard
