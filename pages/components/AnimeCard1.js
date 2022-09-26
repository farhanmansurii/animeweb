import { Box, Button, Container, Flex ,Text} from '@chakra-ui/react'
import React from 'react'

const AnimeCard1 = () => {
  return (<>
    <Box display='flex' height='300px'  width='200px'  alignSelf='center' bgPos='center' bgGradient='linear(to-t, black, rgba(255, 255, 255, .05))' >
     <Box bgSize='cover' bgRepeat="no-repeat"  height='300px'  width='200px' zIndex='-1'   backgroundImage='https://gogocdn.net/cover/made-in-abyss-retsujitsu-no-ougonkyou.png'  >
      <Flex justify='space-between' alignSelf='flex-end'>

      <Text>Hi Episode Name</Text> 
      <Text  variant='unstyled' alignSelf='flex-end'>+</Text>
      </Flex>
      </Box>
    </Box>
  </>
  )
}

export default AnimeCard1
