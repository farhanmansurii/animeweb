/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
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
      <div>hi</div>
    </>
  );
};

export default searchpage;
