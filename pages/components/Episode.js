import { Container, Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Episode = ({image , number , title}) => {
  return (
  <Container dir='column'  h={[ '112.50px', '168.75px']} w={['200px', '300px']} _hover={{bgColor:'gray.200'}} borderRadius='2xl' bgColor='gray.100' p='1rem' m='1rem'>

    <Container width='90%' height='90%' _hover={{scaleX:'106%'}} bgImage={image} backgroundSize='cover' borderRadius='xl' align='center'>

    </Container>
    <Text mx='0.5rem' noOfLines='1'>Ep {number} : {title}</Text>
  </Container>
  )
}

export default Episode
