import { Box, Flex, Text,Icon, Button, transition} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import {  AddIcon} from '@chakra-ui/icons'

function AnimeCard({ animeImg, title, id }) {
  return (
    <>
      <Link href={`/details?id=${id}`}>
        <Box display='flex' height='300px' textAlign='center' borderRadius='xl'  _hover={{ border:'5px solid gray', transition:'0.7'  } } flexDir='column-reverse' bgSize='cover' bgRepeat="no-repeat" mt='4rem' width={['170px', null, '200px']}  zalignSelf='center' backgroundImage={animeImg} bgPos='center' >
          <Flex dir="column" pt='6' pb='2' px='1' justifyContent='space-between' bgGradient='linear(to-t, black, rgba(255, 255, 255, .05))' borderBottomRadius='inherit'>
            <Text color='white' align='start' p='1rem' >
              {title}
            </Text>
            <Icon as={AddIcon} boxSize='25px' p='1.5' mr='1rem' mb='1rem' alignSelf='end' borderRadius='full'  bgColor="beige"/>          </Flex>
        </Box>
      </Link>
    </>
  );
}

export default AnimeCard;
