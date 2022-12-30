import { BlogCarousel, Flex } from "@/components";
import { FC } from "react";
import { useLocation } from "react-router-dom";

export type HomePageProps = {};

export const HomePage: FC<HomePageProps> = () => {
    const { state } = useLocation();
    console.log(state);

    return (
        <Flex width="full" padding={9}>
            <BlogCarousel />
        </Flex>
    );
};

export default HomePage;
