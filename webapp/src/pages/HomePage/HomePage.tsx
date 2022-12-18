import { Flex } from "@/components";
import { Footer, Navbar } from "@/widgets";
import { IconH1 } from "@tabler/icons";
import { FC } from "react";
import { Outlet, useLocation } from "react-router-dom";

export type HomePageProps = {};

export const HomePage: FC<HomePageProps> = () => {
    const { state } = useLocation();
    console.log(state);

    return <Flex size="full">Home</Flex>;
};

export default HomePage;
