import { BlogCard, Flex } from "@/components";
import { useGetBlogs } from "@/hooks";
import { Footer, Navbar } from "@/widgets";
import { IconH1 } from "@tabler/icons";
import { FC } from "react";
import { Outlet } from "react-router-dom";

export type ArticlesProps = {};

export const Articles: FC<ArticlesProps> = () => {
    const { data } = useGetBlogs();
    return (
        <Flex width="full" padding={9} justify="evenly" wrap="wrap" gap={7}>
            {data?.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
            ))}
        </Flex>
    );
};

export default Articles;
