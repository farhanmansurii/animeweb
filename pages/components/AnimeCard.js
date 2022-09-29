import { Box, Flex, Text, Icon, Button, transition } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { AddIcon } from "@chakra-ui/icons";

function AnimeCard({ animeImg, title, id }) {
  return (
    <>
      <Link href={`/details?id=${id}`}>
        <div
          className="flex flex-col-reverse bg-cover text-center aspect-[2/3] sm:h-36 md:h-40 lg:h-48 sm:w-24 md:w-28 lg:w-30 bg-center bg-no-repeat "
          height={[150, 175, 200]}
          style={{ backgroundImage: `url(${animeImg})` }}
          w={[100, 116, 133]}
        >
          <div className=" bg-gradient-to-t mt-30 from-black to-transparent">
            <div className="text-white text-sm whitespace-pre-wrap my-4 mx-2 font-semibold">
              {title}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default AnimeCard;
