import React from "react";
import { Input, InputGroup, InputLeftElement, Stack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import ResearchSearchAuthors from "./ResearchSearchAuthors/ResearchSearchAuthors";
import ResearchSearchPapers from "./ResearchSearchPapers/ResearchSearchPapers";

export default function ResearchSearchSection() {
    return (
        <>
            <Stack spacing={4} className="mb-6">
                <InputGroup bg="white" borderRadius="full" border="transparent">
                    <InputLeftElement pointerEvents="none">
                        <SearchIcon />
                    </InputLeftElement>
                    <Input
                        type="text"
                        placeholder="Research"
                        borderRadius="full"
                    />
                </InputGroup>
            </Stack>
            <div>
                <div className="mb-4">
                    <ResearchSearchAuthors />
                </div>
                <ResearchSearchPapers />
            </div>
        </>
    );
}
