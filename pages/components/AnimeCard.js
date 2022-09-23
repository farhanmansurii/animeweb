import { Button, Flex, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
function AnimeCard({ animeImg, title, id }) {
  return (
    <>
      <Link href={`/details?id=${id}`}>
        <Flex
          flexDir="column"
          p="3"
          _hover={{ borderRadius: "10px" }}
          width='100%'
          height='100%'
          align="center"
        >
          <Image
            src={animeImg}
            borderRadius="xl"
            _hover={{ height: "110%", width: "110%", transition: "0.2s" }}
            height= "100%" width= "100%"
            alt=""
          />
          <Text noOfLines={1} color="white">
            {title}
          </Text>
        </Flex>
      </Link>
    </>
  );
}

export default AnimeCard;
