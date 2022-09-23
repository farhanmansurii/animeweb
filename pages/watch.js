import React, { useState } from 'react'
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });
const watch = () => {
  const router = useRouter();
  const episodeName = router.query.id;
  const URL = 'https://consumet-api.herokuapp.com/anime/gogoanime/watch/'
  const [eplink, setEplink] = useState()
  React.useEffect(() => {
    fetch(URL + episodeName)
      .then((response) => response.json())
      .then((animelist) => setEplink(animelist.sources[0].url));
    return () => { };
  }, []);
  return (<>
    <ReactPlayer controls={true} playing={false} light={false} url={eplink} />
  </>
  )
}

export default watch
