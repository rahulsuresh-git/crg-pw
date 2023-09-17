import { Tag, Text } from "@chakra-ui/react";
import React from "react";

export default function ConferenceTag({ title, value }) {
    return (
        <Tag
            borderRadius="full"
            bg="gray.200"
            className=" md:px-4 px-2 py-1 flex items-center gap-3 w-max"
        >
            <Text className="text-sm font-bold">{title}</Text>
            <Text className="text-[10px] font-bold" color="gray.500">
                {value}
            </Text>
        </Tag>
    );
}
