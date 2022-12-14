import {
    Button,
    Flex,
    Link,
    Separator,
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
    Text,
} from "@/components";
import { FC } from "react";
import Logo from "@/assets/logo.webp";
import { IconMenu2, IconSearch } from "@tabler/icons";

export type NavbarProps = {};

export const Navbar: FC<NavbarProps> = () => {
    return (
        <Flex
            width="full"
            align="center"
            css={{
                "@mbp1": { alignItems: "baseline" },
                backgroundColor: "$appSecondary",
                py: "$4",
                px: "$10",
                boxShadow: "$4",
            }}
        >
            <MobileMenu />
            <Flex
                width="full"
                direction="column"
                center
                gap="6"
                css={{ px: "$14" }}
            >
                <Link to="/">
                    <Flex center>
                        <img
                            src={Logo}
                            width="60%"
                            style={{ minWidth: "150px" }}
                        />
                    </Flex>
                </Link>
                <Separator css={{ "@mbp1": { display: "none" } }} />
                <Flex
                    width="full"
                    align="center"
                    justify="evenly"
                    css={{
                        px: "$14",
                        mb: "$6",
                        "@mbp1": { display: "none" },
                    }}
                >
                    <Link to="/">
                        <Text color="base" variant="captionMedium">
                            HOME
                        </Text>
                    </Link>

                    <Link to="magazines">
                        <Text color="base" variant="captionMedium">
                            MAGAZINES
                        </Text>
                    </Link>
                    <Link to="articles">
                        <Text color="base" variant="captionMedium">
                            ARTICLES
                        </Text>
                    </Link>
                    <Link to="about-us">
                        <Text color="base" variant="captionMedium">
                            ABOUT US
                        </Text>
                    </Link>
                    <Link to="contact">
                        <Text color="base" variant="captionMedium">
                            CONTACT
                        </Text>
                    </Link>
                    <Link to="subscribe">
                        <Text color="base" variant="captionMedium">
                            SUBSCRIBE NOW
                        </Text>
                    </Link>
                </Flex>
                <Text
                    css={{ "@mbp1": { textAlign: "center" } }}
                    color="primary"
                >
                    Get A Chance To Feature In Magazine By Submitting Your
                    Interview Today!
                </Text>
            </Flex>
            <Flex color="base">
                <IconSearch size="1.5rem" />
            </Flex>
        </Flex>
    );
};

const MobileMenu = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Flex color="base">
                    <IconMenu2 size="1.5rem" />
                </Flex>
            </SheetTrigger>

            <SheetContent>
                <Flex
                    width="full"
                    direction="column"
                    css={{ my: "$10", px: "$4" }}
                    gap="3"
                >
                    <Link to="/">
                        <Text color="base" variant="bodyMedium">
                            HOME
                        </Text>
                    </Link>
                    <Separator gutter={3} />
                    <Link to="about-us">
                        <Text color="base" variant="bodyMedium">
                            ABOUT US
                        </Text>
                    </Link>
                    <Separator gutter={3} />
                    <Link to="magazines">
                        <Text color="base" variant="bodyMedium">
                            MAGAZINES
                        </Text>
                    </Link>
                    <Separator gutter={3} />
                    <Link to="articles">
                        <Text color="base" variant="bodyMedium">
                            ARTICLES
                        </Text>
                    </Link>
                    <Separator gutter={3} />
                    <Link to="contact">
                        <Text color="base" variant="bodyMedium">
                            CONTACT
                        </Text>
                    </Link>
                    <Separator />
                    <Link to="subscribe">
                        <Text color="base" variant="bodyMedium">
                            SUBSCRIBE NOW
                        </Text>
                    </Link>
                </Flex>
            </SheetContent>
        </Sheet>
    );
};
