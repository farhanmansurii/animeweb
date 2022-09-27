import { Box, Flex, Text, Image, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
function AnimeCard({ animeImg, title, id }) {
  return (
    <>
      <Link href={`/details?id=${id}`}>
      <Box display='flex' height='300px' textAlign='center' borderRadius='xl' flexDir='column-reverse' bgSize='cover' bgRepeat="no-repeat" mt='4rem'  width={['170px', null, '200px']} alignSelf='center' backgroundImage={animeImg} bgPos='center' >

            
      <Text position='absolute' color='white' pt='6' pb='3' px='1' width='inherit' borderBottomRadius='inherit' bgGradient='linear(to-t, black, rgba(255, 255, 255, .05))'>
                  {title}
                </Text>
          </Box>
        </Link>
    </>
  );
}

export default AnimeCard;
