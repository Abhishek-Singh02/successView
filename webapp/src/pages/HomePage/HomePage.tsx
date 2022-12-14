import { Flex } from "@/components";
import { Footer, Navbar } from "@/widgets";
import { IconH1 } from "@tabler/icons";
import { FC } from "react";
import { Outlet } from "react-router-dom";

export type HomePageProps = {};

export const HomePage: FC<HomePageProps> = () => {
    return <>Home</>;
};

export default HomePage;
