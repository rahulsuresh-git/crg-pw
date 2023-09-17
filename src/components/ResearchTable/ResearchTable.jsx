import {
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
} from "@chakra-ui/react";
import React from "react";

export default function ResearchTable({ data }) {
    return (
        <TableContainer>
            <Table variant="striped" colorScheme="gray">
                <Thead>
                    <Tr>
                        <Th className="font-source-code-pro">Award</Th>
                        <Th className="font-source-code-pro">Paper Title</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data.map((ele, key) => (
                        <Tr>
                            <Td>{ele.award}</Td>
                            <Td>{ele.title}</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    );
}
