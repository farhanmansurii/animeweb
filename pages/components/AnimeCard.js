import { Box, Flex, Text, Icon, Button, transition } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { AddIcon } from "@chakra-ui/icons";

function AnimeCard({ animeImg, title, id }) {
  return (
    <>
      <Link href={`/details?id=${id}`}>
        <div
          className="flex flex-col-reverse bg-cover text-center aspect-[2/3] sm:h-38 md:h-40 lg:h-48 sm:min-w-26 md:w-28 lg:w-30 bg-center bg-no-repeat whitespace-nowrap"
          style={{ backgroundImage: `url(${animeImg})` }}
        >
          <div className=" bg-gradient-to-t mt-30 from-black to-transparent">
            <div className="text-white text-sm sm:text-xs whitespace-pre-wrap my-4 mx-2 font-semibold line-clamp-3">
              {title}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}

export default AnimeCard;
