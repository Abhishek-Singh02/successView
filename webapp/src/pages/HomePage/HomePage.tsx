import { BlogCarousel, Flex } from "@/components";
import { BlogUpdates, KnowMore, UpcomingEdition } from "@/widgets";
import { FC } from "react";
import { useLocation } from "react-router-dom";

export type HomePageProps = {};

export const HomePage: FC<HomePageProps> = () => {
    const { state } = useLocation();

    return (
        <Flex width="full" padding={9} direction="column" gap={9}>
            <BlogCarousel />
            <KnowMore />
            <UpcomingEdition />
            <BlogUpdates />
        </Flex>
    );
};

export default HomePage;
