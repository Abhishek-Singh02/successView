import { Flex, Text } from "@/components";
import { Blog } from "@/types/api";
import { RecentPosts } from "@/widgets";
import { FC } from "react";
import { useLocation } from "react-router";
import ReactMarkdown from "react-markdown";

export type ArticleProps = {};

export const Article: FC<ArticleProps> = () => {
    const { state } = useLocation();
    const { title, image, content } = state.data as Blog;

    return (
        <Flex
            width="full"
            padding={9}
            gap="9"
            css={{
                "@mbp1": {
                    flexDirection: "column",
                },
            }}
        >
            <Flex width="full" direction="column" gap="9">
                <Text variant="heading4">{title}</Text>
                <Flex width="full">
                    <img src={image} width="100%" />
                </Flex>
                <Flex
                    width="full"
                    direction="column"
                    css={{ overflow: "hidden" }}
                    gap={6}
                >
                    <ReactMarkdown children={content} />
                </Flex>
            </Flex>
            <RecentPosts />
        </Flex>
    );
};
