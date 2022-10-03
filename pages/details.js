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
import AnimeCard from "./components/AnimeCard";
import { useRef } from "react";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
function details({ deets, epi, relations }) {
  const [epid, setepid] = useState(epi[0].id)
  const [epnumber, setepnumber] = useState(1)
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
                  <div className="flex sm:flex-auto">|
                    <div className="text-shadow-xl text-black text-4xl font-semibold">
                      {deets.title.english}  </div><div className="px-2 py-1bg-transparent backdrop-blur text-black font-bold rounded-sm w-fit h-fit align-bottom mt-2 mx-4"> {deets.format}</div>
                  </div>


                  <div className="flex flex-wrap my-2" >
                    <div className="px-2 py-1 my-1 bg-transparent backdrop-blur font-bold text-black mx-1  border-2 border-black  rounded-sm">Category  :</div>
                    {deets.genre.map((e ,index) =>
                      <div key={index} className="px-2 py-1 m-1 bg-transparent backdrop-blur  border border-black   font-semibold text-black rounded-sm">{e}</div>)}
                  </div>
                  <div className="px-2 py-1 m-1 bg-transparent backdrop-blur font-semibold text-black border-2 border-black rounded-sm w-fit">Status : {deets.status}</div>
                  {deets.format === 'TV' && <div className="px-2 py-1 m-1 bg-transparent backdrop-blur font-semibold text-black  border-2 border-black rounded-sm w-fit">Total Episodes : {deets.episodes.length} Episodes</div>}
                  <div className="px-2 py-1 m-1 bg-transparent backdrop-blur font-semibold text-black rounded-sm  border-2 border-black w-fit">Duration : {deets.duration} minutes</div>
                  <div className="text-shadow-md line-clamp-5 text-black text-sm  mt-2">
                    {deets.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {<div className=" place-self-center my-5 w-[300px] mx-auto whitespace-wrap ">
        <div className="my-5 text-xl align-center font-semibold ">Currently Playing Ep {epi[epnumber].number - 1} - {epi[epnumber-1].title}
        </div>
        <ReactPlayer controls={true} height={168.8} width={300} url={eplink && eplink} />
      </div>
      }

      {deets.format !== 'TV' && <div onClick={() => { setepid(e.id) }}>Movie </div>}
      {deets.format === 'TV' && <div className="my-10 mx-auto p-5 text-xl font-semibold">Episode List
        <div className=" flex overflow-x-scroll  scrollbar-hide ">
          {
            epi.map((e) => (
              <div key={e.id} onClick={() => { setepid(e.id), setepnumber(e.number) }} className='m-2 bg-cover h-[200px] w-[300px] ' style={{ backgroundImage: `url(${e.image})` }}>
                <div
                  className=" flex flex-col-reverse   bg-gradient-to-t mt-30  h-full from-white to-transparent w-[220px]  bg-cover "
                >
                  <div className="self-bottom text-sm line-clamp-2 text-black mx-2 whitespace-wrap ">
                    {e.description}
                  </div>
                  <div className="self-bottom font-semibold text-black bg-transparent backdrop-blur-sm text-md mx-2 text-shadow-xl whitespace-pre-wrap line-clamp-3">
                    Ep {e.number} : {e.title}
                  </div>
                </div>
              </div>
            ))}

        </div></div>}<div className="my-10 mx-auto p-5 text-xl font-semibold">Related
        <div className=" grid my-5 grid-cols-2 gap-4 md:grid-cols-6 w-11/12 lg:w-10/12">
          {relations.map((e) =>
            <AnimeCard  key={e.anime.mappings.mal} animeImg={e.anime.coverImage} title={e.anime.title.english || e.anime.title.userPreferred} id={e.anime.mappings.mal} />)

          }
        </div></div>
    </>
  );
}
export async function getServerSideProps(context) {
  const animen = context.query.id
  const deets = await fetch("https://api.enime.moe/mapping/mal/ " + animen).then((res) => res.json())
  const epi = deets.episodes
  const slug = deets.id
  const relations = await fetch("https://api.enime.moe/anime/" + slug).then((results) => results.json())
  return {
    props: {
      deets, epi, relations: relations.relations
    },
  };
}

export default details;
