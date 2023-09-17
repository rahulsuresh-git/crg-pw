import React from "react";
import { Image as ChakraImage } from "@chakra-ui/react";

export default function Image({ alt, ...props }) {
    return <ChakraImage alt={alt} {...props}></ChakraImage>;
}
