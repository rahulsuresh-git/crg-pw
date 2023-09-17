import React from "react";
import { Link } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import Section from "../../components/Section/Section";
import {
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    ScaleFade,
    Stack,
    Text,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import ResearchSearchSection from "../../components/ResearchSearchSection/ResearchSearchSection";
import TitleDescriptionSection from "../../components/TitleDescriptionSection/TitleDescriptionSection";
import Image from "../../components/Image/Image";
import Header from "../../components/Header/Header";

export default function Home() {
    return (
        <>
            <ScaleFade initialScale={0.9} in={true}>
                <Hero />
            </ScaleFade>
            <Section
                minH={250}
                className="bg-blue-200"
                left={
                    <ScaleFade initialScale={0.9} in={true}>
                        <div className="md:w-[350px] flex h-full justify-start items-center flex-col">
                            <div className="mt-10">
                                <TitleDescriptionSection
                                    title="Discover relevant people and papers"
                                    description="Our AI recommendation tools will give you people and research
                    paper relevant to you and your research"
                                />
                            </div>
                        </div>
                    </ScaleFade>
                }
                right={
                    <ScaleFade initialScale={0.9} in={true}>
                        <div className="md:w-[350px]">
                            <ResearchSearchSection />
                        </div>
                    </ScaleFade>
                }
            />
            <Section
                minH={250}
                className="bg-blue-200"
                left={
                    <div className="md:w-[400px]">
                        <div className="border-md overflow-hidden  border-blue-500 border-4 rounded-3xl">
                            <Image
                                src={require("../../assets/image-1.jpg")}
                                width="100%"
                            ></Image>
                        </div>
                    </div>
                }
                right={
                    <div className="md:w-[350px] w-full ">
                        <TitleDescriptionSection
                            title="Put yourself out there"
                            description={
                                <Text align="right">
                                    Trying to look for new opportunities? Using
                                    our profile and posting features, you can
                                    showcase your ideas and accomplishments and
                                    learn about other people
                                </Text>
                            }
                        />
                    </div>
                }
            />
            <Section
                minH={250}
                className="bg-blue-200"
                left={
                    <div className="md:w-[350px] w-full ">
                        <TitleDescriptionSection
                            title="Connect with like-minded people"
                            description="Using our messaging system, you can reach out to other researchers to make connections with like-minded people and industry professionals."
                        />
                    </div>
                }
                right={
                    <div className="md:w-[400px]">
                        <div className="">
                            <Image
                                src={require("../../assets/image-2.png")}
                                width="100%"
                            ></Image>
                        </div>
                    </div>
                }
            />
        </>
    );
}
