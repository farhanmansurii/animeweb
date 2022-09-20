import React from 'react'
import { Flex, Grid, HStack, Text, Button, Image, VStack } from '@chakra-ui/react'
import AnimeCard from './AnimeCard'
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
const Popular = () => {
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref);
  const [popular, setpopular] = React.useState([])
  React.useEffect(() => {
    fetch("https://gogoanime.herokuapp.com/popular")
      .then((response) => response.json())
      .then((animelist) => setpopular(animelist));
    return () => {

    }
  }, [])
  return (
    <HStack  mt='4rem'  {...events}
    ref={ref} overflowX='scroll' overflow='hidden'>{
      popular.map((ele) => (<VStack key={ele.animeId} >
        <AnimeCard animeImg={ele.animeImg} title={ele.animeTitle}  link={ele.animeUrl}/>
      </VStack>
      )
      )}</HStack>
  )
}

export default Popular
