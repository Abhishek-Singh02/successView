import { FC } from "react";
import MarqueeTag from "react-fast-marquee";
import { Text } from "../Text";
import { theme } from "@/styles";

export type MarqueeProps = { title: string };

export const Marquee: FC<MarqueeProps> = ({ title }) => {
    return (
        <MarqueeTag
            speed={100}
            gradient={false}
            //@ts-ignore
            style={{ backgroundColor: theme.colors.appSecondary }}
        >
            <Text color="base">{title}</Text>
        </MarqueeTag>
    );
};
