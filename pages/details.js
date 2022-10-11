/* eslint-disable react-hooks/rules-of-hooks */
import dynamic from "next/dynamic";
import React from "react";
import Animedetails from "../components/Animedetails";
import Episodes from "../components/Episodes";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
function details({ deets, anilistdeets }) {
  const epi = anilistdeets.episodes
  console.log(anilistdeets)
  console.log(deets)
  return (
    <>
      {!deets ? (<div>No Data Found</div>) : (
        <div className=" flex-column  ">
          <Animedetails deets={deets} anilistdeets={anilistdeets} />
        </div>
      )}

      {anilistdeets ?
        (

          <div className=" w-10/12 mx-auto">
            <Episodes deets={anilistdeets} epi={epi} />
          </div>
        ) : (<div className=" w-full mx-auto">No episodes</div>)
      }

    </>
  );
}
export async function getServerSideProps(context) {
  const animen = context.query.id;
  const deets = await fetch(
    "https://api.jikan.moe/v4/anime/" + animen
  ).then((res) => res.json());
  const anilistdeets = await fetch(
    "https://api.enime.moe/mapping/mal/" + animen
  ).then((res) => res.json());

  return {
    props: {
      deets: deets.data,
      anilistdeets: anilistdeets
    },
  };
}

export default details;
