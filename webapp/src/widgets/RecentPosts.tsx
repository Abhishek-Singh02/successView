import { Flex, Separator, Text } from "@/components";
import { useGetBlogs } from "@/hooks";
import { FC } from "react";
import { useNavigate } from "react-router";

export type RecentPostsProps = {};

export const RecentPosts: FC<RecentPostsProps> = () => {
    const { data } = useGetBlogs();
    const navigate = useNavigate();

    return (
        <Flex css={{ flex: "30%" }} width="full" direction="column" gap="5">
            <Text variant="overlineLarge">Recent Posts</Text>
            <Flex direction="column" gap="5">
                {data?.slice(-5).map((blog) => (
                    <>
                        <Text
                            variant="overlineMedium"
                            css={{ cursor: "pointer" }}
                            onClick={() =>
                                navigate(`/articles/${blog._id}`, {
                                    state: { data: blog },
                                })
                            }
                        >
                            {blog.title}
                        </Text>
                        <Separator />
                    </>
                ))}
            </Flex>
        </Flex>
    );
};
