import { Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
const data = [ { name :'Home' ,link : '/' },{ name :'Manga' ,link : '/manga' },{ name :'Anime' ,link : '/anime' },{ name :'My List' ,link : '/mylist' } ]
const Navbar = () => {
  return (
    <Flex as="header" position="fixed" w="100%" backgroundColor="rgba(255, 
      255, 255, 0.8)" backdropFilter="saturate(180%) blur(5px)" 
      p='0.5rem' > 
    {
      data.map((e,index)=>
      <Link key={index} href={e.link}>
      <Button mx='1rem' variant='unstyled' fontStyle='normal' >{e.name}</Button>
      </Link>

      )
    }
    
    </Flex>
      
  )
}

export default Navbar
