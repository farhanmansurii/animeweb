/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
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
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
function details({ deets, epi }) {
  const [epid, setepid] = useState('')
  const [eplink, setEplink] = useState('')
  const URL = "https://consumet-api.herokuapp.com/anime/enime/watch?episodeId=";

  const getURL = async () => {
    await fetch(URL + epid)
      .then((response) => response.json())
      .then((animelist) => {

        for (const key in animelist.sources) {
          setEplink(animelist.sources[key].url);
        }
      });
  }

  useEffect(() => {
    getURL();
    return () => { };
  }, [epid]);
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
                    {deets.title.english}
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
      )}<div className=" sm:flex-column lg:flex-row w-fit mx-auto  ">
        <div>

          {!eplink ? <div className=" h-[225px] bg-black">hi</div>
            :
            <ReactPlayer height={225} width={300} controls={true} url={eplink ? eplink : ''} />
          }
        </div>

        <div className="h-[225px] overflow-y-scroll whitespace-nowrap">
          {epi &&
            epi.map((e) => (
              <div key={e.id} onClick={() => setepid(e.id)}>
                <div
                  className=" flex flex-col-reverse h-[150px] min-w-[220px] whitespace-nowrap"
                  style={{ backgroundImage: `url(${e.image})` }}
                >
                  <div className="self-bottom text-sm text-white mx-2 hidden  ">
                    {e.description}
                  </div>
                  <div className="self-bottom  text-white text-md mx-2 text-shadow-xl whitespace-pre-wrap line-clamp-3">
                    Ep {e.number} : {e.title}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  const animen = context.query.id
  const deets = await fetch("https://api.enime.moe/mapping/mal/ " + animen).then((res) => res.json())
  const epi = deets.episodes
  return {
    props: {
      deets, epi
    },
  };
}

export default details;
