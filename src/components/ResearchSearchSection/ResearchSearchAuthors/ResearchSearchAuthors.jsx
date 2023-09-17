import { Avatar, Heading } from "@chakra-ui/react";
import React from "react";

const data = [{ name: "Hao Li" }, { name: "JW Hong" }];
export default function ResearchSearchAuthors() {
    return (
        <div className="flex gap-3 flex-col justify-center">
            {data.map((ele) => (
                <div className="flex items-center gap-2">
                    <Avatar name={ele.name} />
                    <Heading as="h5" size="sm">
                        {ele.name}
                    </Heading>
                </div>
            ))}
        </div>
    );
}
