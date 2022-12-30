import { BlogCarousel, Flex } from "@/components";
import { UpcomingEdition } from "@/widgets";
import { FC } from "react";
import { useLocation } from "react-router-dom";

export type HomePageProps = {};

export const HomePage: FC<HomePageProps> = () => {
    const { state } = useLocation();
    console.log(state);

    return (
        <Flex width="full" padding={9} direction="column" gap={5}>
            <BlogCarousel />
            <UpcomingEdition />
        </Flex>
    );
};

export default HomePage;
