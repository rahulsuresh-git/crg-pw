import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import ConferenceTag from "../../components/ConferenceTag/ConferenceTag";
import ResearchPaperConnection from "../../components/ResearchPaperConnection/ResearchPaperConnection";
import ResearchTable from "../../components/ResearchTable/ResearchTable";

const RESEARCH_TREND_DATA = [
    { title: "Neural Network", value: 157 },
    { title: "Data Analysis", value: 131 },
    { title: "Fake Data Fake Data", value: 120 },
    { title: "Fake Data Fake Data", value: 120 },
    { title: "Fake Data Fake Data", value: 120 },
    { title: "Fake Data Fake Data", value: 120 },
    { title: "Fake Data Fake Data", value: 120 },
    { title: "Fake Data Fake Data", value: 120 },
    { title: "Fake Data Fake Data", value: 120 },
];

export default function Conference() {
    return (
        <Box className="px-8 pt-8">
            <Heading as="h3" size="lg" className="font-source-code-pro mb-6">
                Conference Name
            </Heading>
            <div className="flex gap-10 mb-6">
                <Heading as="h5" size="md" className="font-source-code-pro">
                    Attendance
                </Heading>
                <Heading as="h5" size="md" className="font-source-code-pro">
                    Paper
                </Heading>
            </div>
            <div className="flex gap-10 mb-2 md:w-[500px]">
                <Heading as="h6" size="sm" className="font-source-code-pro">
                    Submission Number
                </Heading>
                <Heading as="h6" size="sm" className="font-source-code-pro">
                    Acceptance Rate
                </Heading>
            </div>
            <div className="flex mb-6 md:w-[500px]">
                <div className="flex items-center gap-2 md:mr-28 mr-20">
                    <Heading
                        as="h2"
                        size="xl"
                        className="font-source-code-pro"
                        width={90}
                    >
                        1500
                    </Heading>
                    <Text size="xs" className=" text-xs">
                        + 15%
                    </Text>
                </div>
                <Heading as="h2" size="xl" className="font-source-code-pro">
                    50%
                </Heading>
            </div>
            <div className=" mb-6">
                <Heading
                    as="h6"
                    size="sm"
                    className="font-source-code-pro mb-4"
                >
                    Research Trend
                </Heading>
                <div className="flex  gap-2 md:gap-3 flex-wrap">
                    {RESEARCH_TREND_DATA.map((ele, key) => (
                        <ConferenceTag title={ele.title} value={ele.value} />
                    ))}
                </div>
            </div>
            <div className=" mb-6">
                <Heading
                    as="h6"
                    size="sm"
                    className="font-source-code-pro mb-4"
                >
                    Paper Connection
                </Heading>
                <div>
                    <ResearchPaperConnection />
                </div>
            </div>
            <div className=" mb-6">
                <Heading
                    as="h6"
                    size="sm"
                    className="font-source-code-pro mb-4"
                >
                    Awarded Paper and runner up
                </Heading>
                <div className="">
                    <ResearchTable
                        data={[
                            {
                                award: "Best Paper",
                                title: "Paper title that is usually long Paper title that is usually long Paper ",
                            },
                            {
                                award: "Best Paper",
                                title: "Paper title that is usually long Paper title that is usually long Paper ",
                            },
                            {
                                award: "Best Paper",
                                title: "Paper title that is usually long Paper title that is usually long Paper ",
                            },
                            {
                                award: "Best Paper",
                                title: "Paper title that is usually long Paper title that is usually long Paper ",
                            },
                            {
                                award: "Best Paper",
                                title: "Paper title that is usually long Paper title that is usually long Paper ",
                            },
                        ]}
                    />
                </div>
            </div>
        </Box>
    );
}
