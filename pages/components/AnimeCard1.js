import { Box, Button, Container, Flex ,Spacer,Text} from '@chakra-ui/react'
import React from 'react'

const AnimeCard1 = () => {
  return (<>
    <Box display='flex' height='300px' border='100px' flexDir='column-reverse' bgSize='cover'   bgRepeat="no-repeat"  mt='4rem' width='200px'  alignSelf='center'    backgroundImage='https://gogocdn.net/cover/made-in-abyss-retsujitsu-no-ougonkyou.png'  bgPos='center' >
     
      <Text position='absolute' color='white' width='fit-content' bgGradient='linear(to-t, black, rgba(255, 255, 255, .05))'>
        <Spacer height='100px'/>
        Hi Episode Name</Text> 
    </Box>
  </>
  )
}

export default AnimeCard1
