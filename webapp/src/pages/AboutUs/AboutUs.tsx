import { Flex, Text } from "@/components";
import { FC } from "react";
import Logo from "@/assets/sample.png";

export type AboutUsProps = {};

export const AboutUs: FC<AboutUsProps> = () => {
    return (
        <Flex center>
            <Flex width="full" padding="9" direction="column" gap="5">
                <Text variant="heading6">
                    At our company, we are committed to providing innovative
                    solutions and exceptional service to our clients. We believe
                    that by working together and leveraging the unique skills
                    and expertise of our team, we can achieve great things.
                </Text>
                <Text variant="heading6">
                    Our team is made up of experienced professionals who are
                    passionate about what they do. We have engineers, designers,
                    business development specialists, and more, all working
                    together to deliver the best possible results.
                </Text>
                <Text variant="heading6">
                    We are constantly seeking out new opportunities and
                    challenges, and we are not afraid to take risks in order to
                    push the boundaries of what is possible. We are dedicated to
                    staying at the forefront of our industry, and we are always
                    looking for ways to improve and evolve.
                </Text>
                <Text variant="heading6">
                    We take pride in our work and in the relationships we have
                    built with our clients. We believe in building partnerships
                    based on trust and mutual respect, and we are committed to
                    delivering the highest level of service and support.
                </Text>
                <Text variant="heading6">
                    Thank you for considering us for your next project. We look
                    forward to the opportunity to work with you and to help
                    bring your vision to life.
                </Text>
            </Flex>
            <Flex css={{ "@mbp1": { display: "none" } }}>
                <img src={Logo} width="90%" />
            </Flex>
        </Flex>
    );
};

export default AboutUs;
