import { useGetAllNews } from "@/hooks";
import { FC } from "react";
import { Button, Flex, Separator, Text } from "@/components";
import { useNavigate } from "react-router-dom";

export type Top10Props = {};

export const Top10: FC<Top10Props> = () => {
    const navigate = useNavigate();
    const { data } = useGetAllNews();
    const top10Data = data?.filter((news) =>
        news.title.toLowerCase().includes("top 10")
    )!;

    return (
        <Flex width="full" center direction="column" gap="5">
            <Button inverted>Top 10's</Button>
            <Flex
                width="full"
                gap="5"
                align="start"
                css={{ "@mbp1": { flexWrap: "wrap" } }}
            >
                <Flex
                    width="full"
                    direction="column"
                    css={{ cursor: "pointer" }}
                    onClick={() =>
                        navigate(`news/${top10Data[top10Data?.length - 1]._id}`)
                    }
                >
                    <img
                        src={top10Data[top10Data?.length - 1].image}
                        width="100%"
                    />
                    <Text variant="heading5">
                        {top10Data[top10Data?.length - 1].title}
                    </Text>
                </Flex>
                <Flex width="full" direction="column" gap="5">
                    {top10Data.slice(-4, -1).map((news) => (
                        <Flex
                            css={{ cursor: "pointer" }}
                            onClick={() => navigate(`news/${news._id}`)}
                            key={news._id}
                            width="full"
                            center
                            gap="5"
                        >
                            <img src={news.image} width="30%" />
                            <Flex width="full" direction="column" gap="4">
                                <Text variant="heading6">{news.title}</Text>
                                <Separator css={{ width: "60% !important" }} />
                                <Text variant="bodySmall">{news.date}</Text>
                            </Flex>
                        </Flex>
                    ))}
                </Flex>
            </Flex>
        </Flex>
    );
};
