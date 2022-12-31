import { BlogCarousel, Flex, Marquee } from "@/components";
import { useGetAllNews } from "@/hooks";
import { BlogUpdates, KnowMore, Top10, UpcomingEdition } from "@/widgets";
import { FC } from "react";
import { useLocation } from "react-router-dom";

export type HomePageProps = {};

export const HomePage: FC<HomePageProps> = () => {
    const { state } = useLocation();
    const { data } = useGetAllNews();
    console.log(data);

    return (
        <Flex width="full" padding={9} direction="column" gap={9}>
            <Marquee title="Check out our social media handles to stay updated !" />
            <BlogCarousel />
            <KnowMore />
            <Top10 />
            <UpcomingEdition />
            <BlogUpdates />
            <Marquee title="Check out our social media handles to stay updated !         " />
        </Flex>
    );
};

export default HomePage;
