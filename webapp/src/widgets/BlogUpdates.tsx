import { Button, Flex, Text } from "@/components";
import { FC } from "react";
import { TodaysPicks } from "./TodaysPicks";
import { LatestPosts } from "./LatestPosts";
import { useGetBlogs } from "@/hooks";
import { useNavigate } from "react-router-dom";

export type BlogUpdatesProps = {};

export const BlogUpdates: FC<BlogUpdatesProps> = () => {
    const { data } = useGetBlogs();
    const navigate = useNavigate();
    const blog = data![Math.floor(Math.random() * data!.length)];
    return (
        <Flex
            width="full"
            css={{ "@mbp1": { flexWrap: "wrap" } }}
            gap="3"
            align="end"
        >
            <TodaysPicks />
            <Flex
                width="full"
                direction="column"
                css={{ px: "$7" }}
                center
                gap="3"
            >
                <img src={blog.image} width="100%" />
                <Text variant="titleMedium" textAlign="center">
                    {blog.title}
                </Text>
                <Button
                    onClick={() =>
                        navigate(`/articles/${blog._id}`, {
                            state: { data: blog },
                        })
                    }
                >
                    Read more
                </Button>
            </Flex>
            <LatestPosts />
        </Flex>
    );
};
