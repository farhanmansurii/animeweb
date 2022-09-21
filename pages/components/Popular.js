import React from 'react'
import { Flex, VStack } from '@chakra-ui/react'
import AnimeCard from './AnimeCard'
const Popular = ({ baseURL }) => {
  const [list, setList] = React.useState([])
  React.useEffect(() => {
    fetch(baseURL)
      .then((response) => response.json())
      .then((animelist) => setList(animelist.data));
    return () => {

    }
  }, [])
  return (
    <Flex direction='row' mt='2' >
      {list.slice(0,8).map((ele) => (
        <VStack key={ele.slug} >
          <AnimeCard animeImg={ele.coverImage} title={ele.title.english} id={ele.id}  />
        </VStack>
      ))}
    </Flex>
  )
}

export default Popular
