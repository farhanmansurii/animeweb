/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { Button, Input, Text } from "@chakra-ui/react";
import Link from "next/link";

const searchpage = () => {
  const [val, setval] = useState("");
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    fetch(URL + val)
      .then((response) => response.json())
      .then((animelist) => setSearchList(animelist.data));
    return () => {};
  }, [val]);

  return (
    <>
      <Input
        variant="flushed"
        bg="inherit"
        placeholder="Search Any Anime/Movie"
        input={val}
        onChange={(e) => setval(e.target.value)}
      />
      <Text>{val}</Text>
      {searchList?.map((e, index) => (
        <>
          <Link key={index} href={`/details?id=${e.id}`}>
            <Button>{e.title.userPreferred}</Button>
          </Link>
        </>
      ))}
    </>
  );
};

export default searchpage;
