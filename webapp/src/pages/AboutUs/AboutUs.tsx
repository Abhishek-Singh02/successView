import { Flex, Text } from "@/components";
import { FC } from "react";
import Logo from "@/assets/about.png";

export type AboutUsProps = {};

export const AboutUs: FC<AboutUsProps> = () => {
    return (
        <Flex center>
            <Flex width="full" padding="9" direction="column" gap="7">
                <Text variant="heading6">
                    Truly Succeed is a media publication that gives information
                    about technology and business news. It's for people at the
                    highest levels of business, so they can stay up-to-date on
                    the latest news and trends. It helps them make better
                    decisions and be successful in their business world.
                </Text>
                <Text variant="heading6">
                    Truly Succeed offers business leaders, managers, and HR
                    personnel the chance to showcase their innovative strategies
                    and uncover useful solutions to help their businesses
                    thrive. With this platform, you can learn how to be better
                    at what you do, and ultimately, reach success in growing
                    your business.
                </Text>
                <Text variant="heading6">
                    Truly Succeed is a website that helps businesses stay up to
                    date with new products, services, and technology. They
                    provide businesses with important information so they can be
                    successful.
                </Text>
                <Text variant="heading6">
                    We want to make a place for successful people to talk and
                    tell their stories so that younger people can learn from
                    them. We want the young people to be able to use what they
                    learn to make better businesses for customers and become
                    leaders in the future.
                </Text>
            </Flex>
            <Flex css={{ "@mbp1": { display: "none" }, mr: "$9" }}>
                <img src={Logo} height="100%" />
            </Flex>
        </Flex>
    );
};

export default AboutUs;
