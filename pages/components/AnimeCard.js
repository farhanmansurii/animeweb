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
          width="11.6rem"
          height="18rem"
          align="center"
        >
          <Image
            src={animeImg}
            borderRadius="xl"
            _hover={{ height: "13rem", width: "9.8rem", transition: "0.2s" }}
            height="12.8rem"
            width="9.6rem"
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
