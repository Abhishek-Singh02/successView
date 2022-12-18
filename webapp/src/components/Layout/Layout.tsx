import { Footer, Navbar } from "@/widgets";
import { FC, Suspense } from "react";
import { Outlet } from "react-router-dom";
import { FullscreenLoader } from "../FullscreenLoader";

export type LayoutProps = {};

export const Layout: FC<LayoutProps> = () => {
    return (
        <>
            <Navbar />
            <Suspense fallback={<FullscreenLoader />}>
                <Outlet />
            </Suspense>
            <Footer />
        </>
    );
};

export default Layout;
