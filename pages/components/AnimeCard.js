import { Box, Flex, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
function AnimeCard({ animeImg, title, id }) {
  return (
    <>
      <Link href={`/details?id=${id}`}>
      <Box display='flex' height='300px'  width='200px'  alignSelf='center' bgPos='center' bgGradient='linear(to-t, black, rgba(255, 255, 255, .05))' m='2rem' >
      <Box bgSize='cover' bgRepeat="no-repeat"  height='300px'  width='200px' zIndex='-1'   backgroundImage={animeImg}  >
      <Flex justify='space-between'alignSelf='self-end'>
        <Text noOfLines={1} >
            {title}
          </Text><Text  variant='unstyled' alignSelf='flex-end'>+</Text>
          </Flex>
      </Box>
    </Box></Link>
    </>
  );
}

export default AnimeCard;
