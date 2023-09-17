import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
    Avatar,
    Box,
    Flex,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    Stack,
    useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Links = [
    { name: "Home", link: "/" },
    { name: "Conference", link: "/conference" },
];

export default function Header() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box
                bg={"gray.200"}
                px={4}
                position="fixed"
                width="full"
                zIndex={10}
            >
                <Flex
                    h={16}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <IconButton
                        size={"md"}
                        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                        aria-label={"Open Menu"}
                        display={{ md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                    />
                    <HStack spacing={8} alignItems={"center"}>
                        <HStack
                            as={"nav"}
                            spacing={4}
                            display={{ base: "none", md: "flex" }}
                        >
                            {Links.map((ele) => (
                                <Link
                                    key={ele.link}
                                    to={ele.link}
                                    className="font-bold"
                                >
                                    {ele.name}
                                </Link>
                            ))}
                        </HStack>
                    </HStack>
                    <Flex alignItems={"center"}>
                        <Menu>
                            <MenuButton as={Box} rounded={"full"} minW={0}>
                                <Avatar
                                    size={"sm"}
                                    src={
                                        "https://pbs.twimg.com/profile_images/1676112493796810752/So2lX55o_400x400.jpg"
                                    }
                                />
                            </MenuButton>
                        </Menu>
                    </Flex>
                </Flex>

                {isOpen ? (
                    <Box pb={4} display={{ md: "none" }}>
                        <Stack as={"nav"} spacing={4}>
                            {Links.map((ele) => (
                                <Link
                                    key={ele.link}
                                    to={ele.link}
                                    onClick={onClose}
                                    className="font-bold"
                                >
                                    {ele.name}
                                </Link>
                            ))}
                        </Stack>
                    </Box>
                ) : null}
            </Box>
        </>
    );
}
