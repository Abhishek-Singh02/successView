import { BlogCard, Flex, Pagination } from "@/components";
import { useGetBlogs } from "@/hooks";
import { FC, useState } from "react";

export type ArticlesProps = {};

export const Articles: FC<ArticlesProps> = () => {
    const { data } = useGetBlogs();
    const [currentData, setCurrentData] = useState<any[]>(data!);
    return (
        <Flex width="full" padding={9} justify="evenly" wrap="wrap" gap={7}>
            {currentData?.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
            ))}
            <Pagination
                data={data!}
                setPage={setCurrentData}
                size={9}
                key={1}
            />
        </Flex>
    );
};

export default Articles;
