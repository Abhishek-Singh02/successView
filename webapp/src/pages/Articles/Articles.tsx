import { BlogCard, Flex } from "@/components";
import { useGetBlogs } from "@/hooks";
import { FC } from "react";

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
