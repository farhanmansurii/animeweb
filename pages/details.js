/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import AnimeCard from "./components/AnimeCard";
import { useRef } from "react";
import Image from "next/image";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
function details({ deets, epi, relations }) {
  console.log(epi);
  console.log(deets);
  const [epid, setepid] = useState(epi[0].id);
  const [epnumber, setepnumber] = useState(1);
  const [eplink, setEplink] = useState("");
  const URL = "https://api.consumet.org/anime/enime/watch?episodeId=";

  const getURL = async () => {
    await fetch(URL + epid)
      .then((response) => response.json())
      .then((animelist) => {
        for (const key in animelist.sources) {
          setEplink(animelist.sources[key].url);
        }
      });
  };

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
            <div class="bg-gradient-to-t from-black to-transparent w-100">
              <div class="flex flex-col md:flex-row items-center  ">
                <div className=" p-2 my-3 mx-6">

                  <div className=" w-[233.33px] bg-no-repeat h-[350px] " style={{ backgroundImage: `url(${deets.coverImage})` }}>
                  </div>
                </div>
                <div className="flex flex-col p-2 ">
                  <div className="flex sm:flex-auto sm:mt-10 ">
                    <div className="text-shadow-xl text-white text-4xl font-semibold">
                      {deets.title.english}{" "}
                    </div>
                    <div className="px-2 py-1bg-transparent backdrop-blur text-white font-bold rounded-sm w-fit h-fit align-bottom mt-2 mx-4">
                      {" "}
                      {deets.format}
                    </div>
                  </div>

                  <div className="flex flex-wrap my-2">
                    <div className="px-2 py-1 my-1 bg-transparent backdrop-blur font-bold text-white mx-1  border-2 border-white  rounded-sm">
                      Category :
                    </div>
                    {deets.genre.map((e, index) => (
                      <div
                        key={index}
                        className="px-2 py-1 m-1 bg-transparent backdrop-blur  border border-white   font-semibold text-white rounded-sm"
                      >
                        {e}
                      </div>
                    ))}
                  </div>
                  <div className="px-2 py-1 m-1 bg-transparent backdrop-blur font-semibold text-white border-2 border-white rounded-sm w-fit">
                    Status : {deets.status}
                  </div>
                  {deets.format === "TV" && (
                    <div className="px-2 py-1 m-1 bg-transparent backdrop-blur font-semibold text-white  border-2 border-white rounded-sm w-fit">
                      Total Episodes : {deets.episodes.length} Episodes
                    </div>
                  )}
                  <div className="px-2 py-1 m-1 bg-transparent backdrop-blur font-semibold text-white rounded-sm  border-2 border-white w-fit">
                    Duration : {deets.duration} minutes
                  </div>
                  <div className="text-shadow-md line-clamp-5 text-white text-sm  mt-2">
                    {deets.description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {
        <div className=" place-self-center my-5 w-[300px] mx-auto whitespace-wrap ">
          {deets.format === "TV" && (
            <div className="my-5 text-xl text-white align-center font-semibold ">
              Currently Playing {'   '}
              {epi[epnumber - 1].title}
            </div>
          )}{" "}
          {deets.format !== "TV" && (
            <div
              onClick={() => {
                setepid(e.id);
              }}
              className="my-5 text-xl text-white align-center font-semibold "
            >
              {deets.format}
            </div>
          )}
          <ReactPlayer
            controls={true}
            height={168.8}
            width={300}
            url={eplink ||' '}
          />
        </div>
      }

      {deets.format === "TV" && (
        <div className="my-10 mx-auto p-5 text-xl  text-white font-semibold">
          Episode List
          <div className=" flex overflow-x-scroll  scrollbar-hide ">
            {epi.map((e) => (
              <div
                key={e.id}
                onClick={() => {
                  setepid(e.id), setepnumber(e.number);
                }}
                className="m-2 bg-cover h-[200px] w-[300px] "
                style={{ backgroundImage: `url(${e.image})` }}
              >
                <div className=" flex flex-col-reverse   bg-gradient-to-t mt-30  h-full from-black to-transparent w-[220px]  bg-cover ">
                  <div className="self-bottom text-sm line-clamp-2 text-white mx-2 whitespace-wrap ">
                    {e.description}
                  </div>
                  <div className="self-bottom font-semibold text-white bg-transparent backdrop-blur-sm text-md mx-2 text-shadow-xl whitespace-pre-wrap line-clamp-3">
                    Ep {e.number} : {e.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {relations.length < 1 ? (
        ""
      ) : (
        <div className="my-10 mx-auto p-5 text-xl text-white font-semibold">
          Related
          <div className=" grid my-5 grid-cols-2 gap-4 md:grid-cols-6 w-11/12 lg:w-10/12">
            {relations.map((e) => (
              <AnimeCard
                key={e.anime.mappings.mal}
                animeImg={e.anime.coverImage}
                title={e.anime.title.english || e.anime.title.userPreferred}
                id={e.anime.mappings.mal}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
export async function getServerSideProps(context) {
  const animen = context.query.id;
  const deets = await fetch(
    "https://api.enime.moe/mapping/mal/ " + animen
  ).then((res) => res.json());
  const epi = deets.episodes;
  const slug = deets.id;
  const relations = await fetch("https://api.enime.moe/anime/" + slug).then(
    (results) => results.json()
  );
  return {
    props: {
      deets,
      epi,
      relations: relations.relations,
    },
  };
}

export default details;
