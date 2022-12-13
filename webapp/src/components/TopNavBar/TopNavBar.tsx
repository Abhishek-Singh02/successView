import { FC, ReactNode } from "react";
import { Text } from "../Text";
import { Flex } from "../Flex";

export interface TopNavBarProps {
    title?: string;
    start?: ReactNode;
    end?: ReactNode;
}

export const TopNavBar: FC<TopNavBarProps> = ( { title, end, start } ) => {
    return (
        <Flex
            width="full"
            height="12"
            css={{
                background: "$appBase ",
                borderBottom: "1px solid transparent",
                borderImage: "$appBottomBarTopBorderGradient 1",
                pb: "$6"
            }}
        >
            <Flex center height="full" css={{ flex: "0 0 1" }}>
                {start}
            </Flex>
            <Flex center height="full" css={{ flex: 1 }}>
                <Text variant="overlineLarge">{title}</Text>
            </Flex>
            <Flex center height="full" css={{ flex: "0 0 1" }}>
                {end}
            </Flex>
        </Flex>
    );
};
