import { FC } from "react";
import { Button, Flex, Separator, Text } from "@/components";
import { useGetBlogs } from "@/hooks";
import { useNavigate } from "react-router-dom";

export type TodaysPicksProps = {};

export const TodaysPicks: FC<TodaysPicksProps> = () => {
    const { data } = useGetBlogs();
    const navigate = useNavigate();
    const randomData = data!.sort(() => 0.5 - Math.random()).slice(0, 3);

    return (
        <Flex width="full" direction="column" gap="5" css={{ px: "$2" }}>
            <Button inverted>Today's Picks</Button>
            {randomData.map((blog) => (
                <>
                    <Flex
                        css={{ cursor: "pointer" }}
                        onClick={() =>
                            navigate(`/articles/${blog._id}`, {
                                state: { data: blog },
                            })
                        }
                        size="full"
                        align="center"
                        gap="5"
                    >
                        <img src={blog.image} width="30%" />
                        <Text>{blog.title}</Text>
                    </Flex>
                    <Separator />
                </>
            ))}
        </Flex>
    );
};
