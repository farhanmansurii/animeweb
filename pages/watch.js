import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Container } from "@chakra-ui/react";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
const Watch = () => {
  const router = useRouter();
  const episodeName = router.query.id;
  const [eplink, setEplink] = useState();
  useEffect(() => {
    fetch(URL + episodeName)
      .then((response) => response.json())
      .then((animelist) => {
        setEplink(animelist.sources[0]?.url);
      });
    return () => {};
  }, []);
  return <ReactPlayer width={400} controls={true} url='' />;
};

export default Watch;
