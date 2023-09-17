import { Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function TitleDescriptionSection({ title, description }) {
    return (
        <>
            <Heading as="h3" size="md" className="mb-3">
                {title}
            </Heading>
            <Text>{description}</Text>
        </>
    );
}
