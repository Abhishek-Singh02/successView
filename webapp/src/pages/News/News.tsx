import { Flex, Text } from "@/components";
import { useGetOneNews } from "@/hooks";
import { News as newsType } from "@/types/api";
import { FC, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router";

export type NewsProps = {};

export const News: FC<NewsProps> = () => {
    const { id } = useParams();
    const { data, refetch } = useGetOneNews(id!);
    const { title, image, content, date } = data as newsType;
    useEffect(() => {
        refetch();
    }, [id]);

    return (
        <Flex width="full" direction="column" gap="9" padding="9">
            <Text variant="heading4">{title}</Text>
            <Flex width="full" justify="end">
                <Text>{date}</Text>
            </Flex>
            <Flex width="full" css={{ height: "50%" }}>
                <img
                    src={image}
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        overflow: "clip",
                    }}
                />
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
    );
};
