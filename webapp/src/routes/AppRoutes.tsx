import {
    AboutUs,
    Article,
    Articles,
    Contact,
    HomePage,
    Magazine,
    Magazines,
    NotFound,
} from "../pages";
import { Route, Routes } from "react-router-dom";
import { Layout } from "@/components";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/">
                    <Route index element={<HomePage />} />
                    <Route path="about-us" element={<AboutUs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="articles" element={<Articles />} />
                    <Route path="magazines" element={<Magazines />} />
                    <Route path="magazines/:id" element={<Magazine />} />
                    <Route path="articles/:id" element={<Article />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Route>
        </Routes>
    );
};
