import React from 'react'
import { Flex, Grid, HStack, Text, Button, Image, VStack } from '@chakra-ui/react'
import AnimeCard from './AnimeCard'
import { baseURL } from '..'
const Popular = () => {
  const [popular, setpopular] = React.useState([])
  React.useEffect(() => {
    fetch("https://gogoanime.herokuapp.com/popular")
      .then((response) => response.json())
      .then((animelist) => setpopular(animelist));
    return () => {

    }
  }, [])
  return (
    <HStack >{
      popular.map((ele) => (<VStack>
        <AnimeCard key={ele.animeId} animeImg={ele.animeImg} title={ele.animeTitle} />
        
      </VStack>
      )
      )}</HStack>
  )
}

export default Popular
