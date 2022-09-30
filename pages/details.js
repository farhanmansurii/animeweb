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
    fetch("https://api.enime.moe/mapping/mal/" + animename)
      .then((response) => response.json())
      .then((animelist) => {
        setDeets(animelist);
        console.log(animelist);
        setName(animelist.title);
        setEpi(animelist.episodes);
      });

    return () => {};
  }, []);

  return (
    <>
      {deets && (
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
                  <div className="bg-white my-3 text-black w-fit  ">
                    {deets.status}
                  </div>
                  <div className="text-shadow-md line-clamp-5 text-black text-sm  mt-2">
                    {deets.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Text fontSize="2xl" m="1rem">
        Episode List
      </Text>

      <div className="flex flex-row overflow-x-scroll whitespace-nowrap">
        {epi &&
          epi.map((e) => (
            <Link key={e.id} href={`/watch?id=${e.id}`}>
              <div
                className=" flex flex-col-reverse h-[150px] min-w-[220px] m-1 p-3 whitespace-nowrap"
                style={{ backgroundImage: `url(${e.image})` }}
              >
                <div className="self-bottom text-sm text-white mx-2 hidden  ">
                  {e.description}
                </div>
                <div className="self-bottom  text-white text-md mx-2 text-shadow-xl whitespace-pre-wrap line-clamp-3">
                  Ep {e.number} : {e.title}
                </div>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
}

export default details;
