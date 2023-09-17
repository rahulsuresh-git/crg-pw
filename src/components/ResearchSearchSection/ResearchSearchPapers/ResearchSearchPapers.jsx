import { Heading, Text } from "@chakra-ui/react";
import React from "react";

const RESEARCH_PAPER_DATA = [
    {
        title: "Programming Network Stack for Middleboxes with Rubik",
        authors:
            "Hao Li, Xian, Charghao Wu, Xi'an, Guangda Sun, Peng Zhang and Danfeng Shan, Xian",
    },
    {
        title: "Programming Network Stack for Middleboxes with Rubik",
        authors:
            "Hao Li, Xian, Charghao Wu, Xi'an, Guangda Sun, Peng Zhang and Danfeng Shan, Xian",
    },
];
export default function ResearchSearchPapers() {
    return (
        <div className="flex flex-col gap-4">
            {RESEARCH_PAPER_DATA.map((ele, key) => (
                <div>
                    <Heading as="h6" size="xs">
                        {ele.title}
                    </Heading>
                    <Text fontSize="xs">{ele.authors}</Text>
                </div>
            ))}
        </div>
    );
}
