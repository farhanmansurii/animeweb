/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { useRouter } from "next/router";
import {
  Text,
  Image,
  VStack,
  Container,
  Flex,
  HStack,
  SimpleGrid,
  Button,
  Divider,
} from "@chakra-ui/react";
import Link from "next/link";
import Episode from "./components/Episode";

function details() {
  const [deets, setDeets] = useState([]);
  const [epi, setEpi] = useState([]);
  const [target, setTarget] = useState();
  const [name, setName] = useState([]);
  const router = useRouter();
  const animename = router.query.id;
  React.useEffect(() => {
    fetch("https://api.enime.moe/anime/" + animename)
      .then((response) => response.json())
      .then((animelist) => {
        setDeets(animelist);
        console.log(animelist.coverImage);
        setName(animelist.title);
        setEpi(animelist.episodes);
        console.log(animelist.episodes);
      });

    return () => {};
  }, []);

  return (
    <>
      <div class=" flex-column  ">
        <div
          style={{ backgroundImage: `url(${deets.bannerImage})` }}
          class="bg-cover bg-center "
        >
          <div class="bg-gradient-to-t from-white to-transparent w-100">
            <div class="flex flex-col md:flex-row items-center  ">
              <Image
                src={deets.coverImage}
                alt=""
                width={{ base: "250px", md: "150px" }}
                mt="5rem"
                mx="2rem"
                align="center"
              />
              <div className="flex flex-col p-2 ">
                <div className="text-shadow-xl text-black text-4xl font-semibold">
                  {name.english}
                </div>
                <div className="text-shadow-md text-black text-sm  mt-2">
                  {deets.description}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Text fontSize="2xl" m="1rem">
        Episode List
      </Text>
      <SimpleGrid columns={[2, null, 3]} spacing="30px" width="90%">
        {epi &&
          epi.map((e) => (
            <Link
              key={e.sources[0].target}
              href={`/watch?id=${e.sources[0].target}`}
            >
              <div style={{ backgroundImage: `url(${e.image})` }}>
                {e.title}
              </div>
            </Link>
          ))}
      </SimpleGrid>
    </>
  );
}

export default details;
