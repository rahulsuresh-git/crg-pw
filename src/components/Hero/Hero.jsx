import { ChevronDownIcon } from "@chakra-ui/icons";
import { Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Sparkles from "../Sparkles/Sparkles";

export default function Hero() {
    return (
        <div className="w-full h-[500px] flex justify-center items-center text-center p-4 flex-col pt-20">
            <Heading className="mb-14">
                Know your <Sparkles>research community</Sparkles>
            </Heading>
            <div className="mb-20 flex-col flex gap-4">
                <Button colorScheme="blue" width={250}>
                    Log In
                </Button>
                <Button colorScheme="blue">Create Account</Button>
            </div>
            <div>
                <Text>Learn More</Text>
                <ChevronDownIcon w={10} h={10} />
            </div>
        </div>
    );
}
