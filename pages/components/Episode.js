import { Container, Flex, Text } from "@chakra-ui/react";
import React from "react";

const Episode = ({ image, number, title,description }) => {
  return (<>
         
    <div className=" flex flex-col-reverse h-[150px] min-w-[220px] m-1 p-3 whitespace-nowrap"   style={{ backgroundImage: `url(${image})` }} >
      <div className="self-bottom text-sm text-white mx-2 hidden  ">{description}</div>
      <div className="self-bottom  text-white text-md mx-2 text-shadow-xl whitespace-pre-wrap">Ep {number} : {title}</div>
    </div>
  </>
  );
};

export default Episode;
