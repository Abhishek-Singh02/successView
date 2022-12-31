import { FC } from "react";
import { CircleLoader, ScaleLoader } from "react-spinners";
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
            <ScaleLoader
                height={105}
                width={6}
                radius={6}
                margin={4}
                color="currentColor"
            />
        </Flex>
    );
};
