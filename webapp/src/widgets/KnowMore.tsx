import { FC } from "react";
import { Button, Flex, Separator, Text } from "@/components";
import { useNavigate } from "react-router-dom";

export type KnowMoreProps = {};

export const KnowMore: FC<KnowMoreProps> = () => {
    const navigate = useNavigate();
    return (
        <Flex
            width="full"
            direction="column"
            center
            onClick={() => navigate("about-us")}
            css={{ backgroundColor: "$appSecondary", cursor: "pointer" }}
        >
            <Text variant="overlineLarge" color="base">
                Wanna know More about us ?
            </Text>
            <Separator css={{ width: "25% !important" }} />
            <Flex width="full" justify="evenly" align="center" gap="6">
                <Separator />
                <Text
                    css={{ whiteSpace: "pre" }}
                    variant="overlineLarge"
                    color="base"
                >
                    Click here
                </Text>
                <Separator />
            </Flex>
        </Flex>
    );
};
