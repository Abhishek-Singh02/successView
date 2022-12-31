import { BlogCarousel, Flex, Marquee } from "@/components";
import { BlogUpdates, KnowMore, UpcomingEdition } from "@/widgets";
import { FC } from "react";
import { useLocation } from "react-router-dom";

export type HomePageProps = {};

export const HomePage: FC<HomePageProps> = () => {
    const { state } = useLocation();

    return (
        <Flex width="full" padding={9} direction="column" gap={9}>
            <Marquee title="Do check out our social media handles to stay updated !" />
            <BlogCarousel />
            <KnowMore />
            <UpcomingEdition />
            <BlogUpdates />
            <Marquee title="Check out our social media handles to stay updated !         " />
        </Flex>
    );
};

export default HomePage;
