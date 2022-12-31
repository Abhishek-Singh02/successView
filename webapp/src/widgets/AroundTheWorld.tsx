import { useGetAllNews } from "@/hooks";
import { FC } from "react";
import { Button, Flex, Separator, Text } from "@/components";
import { useNavigate } from "react-router-dom";

export type AroundTheWorldProps = {};

export const AroundTheWorld: FC<AroundTheWorldProps> = () => {
    const navigate = useNavigate();
    const { data } = useGetAllNews();
    const top10Data = data?.filter(
        (news) => !news.title.toLowerCase().includes("top 10")
    )!;

    return (
        <Flex width="full" center direction="column" gap="5">
            <Button inverted>Around the World</Button>
            <Flex
                width="full"
                gap="5"
                css={{ "@mbp1": { flexDirection: "column" } }}
            >
                {top10Data.slice(-4).map((news) => (
                    <Flex
                        direction="column"
                        css={{ cursor: "pointer" }}
                        onClick={() => navigate(`news/${news._id}`)}
                        key={news._id}
                        width="full"
                        flex
                        center
                        gap="5"
                    >
                        <img src={news.image} width="100%" />
                        <Flex width="full" direction="column" gap="4">
                            <Text variant="heading6">{news.title}</Text>
                            <Separator />
                            <Text
                                variant="bodySmall"
                                css={{ alignSelf: "end" }}
                            >
                                {news.date}
                            </Text>
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
};
