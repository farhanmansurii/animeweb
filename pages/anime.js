import React, { useEffect } from 'react'

function anime() {
  useEffect(() => {
    fetch("https://consumet-api.herokuapp.com/anime/gogoanime/anime").then((response) => response.json())
      .then((animelist) => console.log(animelist.results));

    return () => {
    }
  }, [])


  return (
    <div>anime</div>
  )
}

export default anime
