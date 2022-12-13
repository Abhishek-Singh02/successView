import { FC } from "react";
import { CircleLoader } from 'react-spinners';
import { Flex } from "../Flex";

export interface FullscreenLoaderProps {}

export const FullscreenLoader: FC<FullscreenLoaderProps> = ( { } ) => {
    return (
        <Flex
            direction="column"
            center
            color="primary"
            gap="4"
            css={{
                position: "absolute",
                zIndex: 99999,
                height: "100vh",
                width: '100vw',
                top: 0,
                left: 0
            }}
        >
            <CircleLoader color="currentColor"  />
        </Flex>
    )
}