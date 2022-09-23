import React, { useState,useEffect } from 'react'
import { useRouter } from 'next/router';
import { Container } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });
const Watch = () => {
  const router = useRouter();
  const episodeName = router.query.id;
  const URL = 'https://consumet-api.herokuapp.com/anime/gogoanime/watch/'
  const [eplink, setEplink] = useState()
  useEffect(() => {
    fetch(URL + episodeName)
      .then((response) => response.json())
      .then((animelist) => setEplink(animelist.sources[0].url));
    return () => { };
  }, []);
  return (<Container color='black' align='center' width='100%'>
    <ReactPlayer controls={true} playing={false} width='640px'  url={eplink} />
  </Container>
  )
}

export default Watch
