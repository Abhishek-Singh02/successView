import { Flex, Text } from "@/components";
import { FC } from "react";
import Logo from "@/assets/about.png";

export type AboutUsProps = {};

export const AboutUs: FC<AboutUsProps> = () => {
    return (
        <Flex center>
            <Flex width="full" padding="9" direction="column" gap="7">
                <Text variant="heading6">
                    Welcome to Truly Succeed Magazine! We are a dynamic and
                    dedicated team of writers, editors, and designers committed
                    to delivering top-quality content and exceptional service to
                    our readers and advertisers.
                </Text>
                <Text variant="heading6">
                    Our team is made up of experienced professionals who are
                    passionate about what they do. We have engineers, designers,
                    business development specialists, and more, all working
                    together to deliver the best possible results.
                </Text>
                <Text variant="heading6">
                    At Truly Succeed, we understand the importance of staying
                    informed and up-to-date on the latest trends and
                    developments. That's why we work tirelessly to bring our
                    readers engaging and informative articles on a wide range of
                    topics, including business, finance, current events, and
                    more. Our goal is to provide a well-rounded and engaging
                    reading experience that keeps our readers coming back for
                    more.
                </Text>
                <Text variant="heading6">
                    But we don't just stop at delivering great content to our
                    readers. We also understand the importance of building
                    strong relationships with our advertisers and partners.
                    That's why we offer a range of advertising options and can
                    work with you to develop a customized marketing plan that
                    meets your needs and budget.
                </Text>
                <Text variant="heading6">
                    We take pride in the long-term relationships we have built
                    with our readers and partners, and strive to make a positive
                    impact on the lives of those we reach through our magazine.
                    Thank you for choosing Truly Succeed Magazine. We look
                    forward to working with you and helping you achieve your
                    business goals.
                </Text>
            </Flex>
            <Flex css={{ "@mbp1": { display: "none" }, mr: "$9" }}>
                <img src={Logo} height="100%" />
            </Flex>
        </Flex>
    );
};

export default AboutUs;
