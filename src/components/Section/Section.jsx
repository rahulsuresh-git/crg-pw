import { Box } from "@chakra-ui/react";
import React from "react";

export default function Section({ left, right, className, ...props }) {
    return (
        <Box
            className={`py-10 px-2 flex justify-center  ${className}`}
            {...props}
        >
            <div className=" flex justify-between w-3/4 md:flex-nowrap flex-wrap gap-8 ">
                <div className="md:flex-1 flex justify-start">{left}</div>
                <div className="md:flex-1 flex justify-end">{right}</div>
            </div>
        </Box>
    );
}
