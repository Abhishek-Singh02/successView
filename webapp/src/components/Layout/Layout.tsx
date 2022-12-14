import { Footer, Navbar } from "@/widgets";
import { FC } from "react";
import { Outlet } from "react-router-dom";

export type LayoutProps = {};

export const Layout: FC<LayoutProps> = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

export default Layout;
