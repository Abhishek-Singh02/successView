import { Anchor, Flex, Link, Text } from "@/components";
import { FC } from "react";
import Logo from "@/assets/logo2.webp";
import {
    IconBrandLinkedin,
    IconBrandFacebook,
    IconBrandTwitter,
    IconMail,
    IconBrandInstagram,
    IconBrandPinterest,
} from "@tabler/icons";

export type FooterProps = {};

export const Footer: FC<FooterProps> = () => {
    const year = new Date().getFullYear();
    return (
        <Flex width="full" direction="column">
            <Flex
                width="full"
                css={{
                    backgroundColor: "$appSecondary",
                    "@mbp1": {
                        flexDirection: "column",
                        gap: "$9",
                    },
                }}
                padding="9"
                justify="center"
            >
                <Flex direction="column" gap="5" width="full">
                    <img src={Logo} width="90%" style={{ minWidth: "100px" }} />
                    <Flex color="base" gap="5">
                        <Anchor
                            target="_blank"
                            href="https://instagram.com/truly_succeed?igshid=ZDdkNTZiNTM="
                        >
                            <IconBrandInstagram
                                strokeWidth={1}
                                style={{ cursor: "pointer" }}
                            />
                        </Anchor>
                        <Anchor
                            target="_blank"
                            href="https://www.linkedin.com/in/truly-succeed-876300262/"
                        >
                            <IconBrandLinkedin
                                strokeWidth={1}
                                style={{ cursor: "pointer" }}
                            />
                        </Anchor>
                        <Anchor
                            target="_blank"
                            href="mailto:info@trulysucceed.com"
                        >
                            <IconMail
                                strokeWidth={1}
                                style={{ cursor: "pointer" }}
                            />
                        </Anchor>
                        {/* <IconBrandPinterest
                            strokeWidth={1}
                            style={{ cursor: "pointer" }}
                        />
                        <IconBrandTwitter
                            strokeWidth={1}
                            style={{ cursor: "pointer" }}
                        /> */}
                    </Flex>
                </Flex>
                <Flex direction="column" gap="5" width="full">
                    <Text color="base" variant="captionMedium">
                        Our company is an archway that caters to Entrepreneurs’
                        quench of technology and business updates which are
                        currently ruling the business world.
                    </Text>
                    <Text color="base" variant="captionMedium">
                        We are ceaselessly proving the best platform for leading
                        companies, which aids indefinite progress while creating
                        meaningful learning experiences for the visitors and
                        invaluable brand awareness for the clients.
                    </Text>
                </Flex>
                <Flex
                    direction="column"
                    gap="5"
                    width="full"
                    css={{
                        "@bp1": {
                            ml: "$14",
                        },
                    }}
                >
                    <Text color="base" variant="overlineLarge">
                        Quick links
                    </Text>
                    <Link to="/">
                        <Text color="base" variant="overlineSmall">
                            Home
                        </Text>
                    </Link>
                    <Link to="about-us">
                        <Text color="base" variant="overlineSmall">
                            About us
                        </Text>
                    </Link>
                    <Link to="magazines">
                        <Text color="base" variant="overlineSmall">
                            Magazines
                        </Text>
                    </Link>
                    <Link to="articles">
                        <Text color="base" variant="overlineSmall">
                            Articles
                        </Text>
                    </Link>
                    <Link to="contact">
                        <Text color="base" variant="overlineSmall">
                            Contact
                        </Text>
                    </Link>
                </Flex>
            </Flex>
            <Flex
                width="full"
                padding="5"
                css={{
                    backgroundColor: "$appSecondary",
                    borderTop: "1px solid $appPrimary",
                }}
            >
                <Text color="base" variant="bodySmall">
                    @ Copyright {year}, Truly Succeed | All rights reserved.{" "}
                </Text>
            </Flex>
        </Flex>
    );
};
