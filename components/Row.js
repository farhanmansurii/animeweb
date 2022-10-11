import React from 'react';
import AnimeCard from './AnimeCard';
const Row = ({ typeOfAnime, text }) => {
  return (<div className='w-10/12 mx-auto my-3rem  '>
    {typeOfAnime ? (<div className="text-3xl lg:text-3xl mx-3 font-semibold my-3 text-primary"> {text}</div>) : ('')}
    <div className=" flex overflow-x-scroll p-2 scrollbar-hide space-x-2 ">
      {typeOfAnime.map((e) =>
        <AnimeCard key={e.mal_id} animeImg={e.images.webp.image_url} title={e.title_english || e.title} id={e.mal_id} />
      )}
    </div>
  </div>
  )
}


export default Row
