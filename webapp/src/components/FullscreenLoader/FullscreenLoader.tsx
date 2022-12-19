import { FC } from "react";
import { CircleLoader } from "react-spinners";
import { Flex } from "../Flex";

export interface FullscreenLoaderProps {}

export const FullscreenLoader: FC<FullscreenLoaderProps> = ({}) => {
    return (
        <Flex
            direction="column"
            center
            color="secondary"
            gap="4"
            css={{
                position: "relative",
                zIndex: 99999,
                height: "100vh",
                width: "100vw",
                top: 0,
                left: 0,
            }}
        >
            <CircleLoader size={100} color="currentColor" />
        </Flex>
    );
};
