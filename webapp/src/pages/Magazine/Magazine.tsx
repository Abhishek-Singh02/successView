import { Button, Flex, Separator, Text } from "@/components";
import { useGetOneBlog, useGetOneMagazine } from "@/hooks";
import { Magazine as Type } from "@/types/api";
import { FC } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate, useParams } from "react-router-dom";

export type MagazineProps = {};

export const Magazine: FC<MagazineProps> = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { data: mag } = useGetOneMagazine(id!);
    const { title, image, blog_ID } = mag as Type;
    const { data: blog } = useGetOneBlog(blog_ID);

    return (
        <Flex direction="column" center width="full" padding="9" gap="5">
            <Text textAlign="center" variant="heading4">
                {title}
            </Text>
            <Flex
                width="full"
                center
                css={{
                    px: "$14",
                    "@mbp1": {
                        flexDirection: "column",
                        px: 0,
                    },
                }}
                gap="5"
            >
                <Flex direction="column" gap="2">
                    <img src={image} height="100%" />
                    <Separator gutter={2} />
                    <Button inverted>Digital version</Button>
                </Flex>
                <Flex width="full" direction="column" justify="center" gap="5">
                    <Text variant="heading5">{blog?.title}</Text>
                    <Separator />
                    <ReactMarkdown
                        children={blog?.content.substring(0, 350)!}
                    />
                    <Flex css={{ alignSelf: "flex-end" }}>
                        <Button
                            onClick={() =>
                                navigate(`/articles/${blog?._id}`, {
                                    state: { data: blog },
                                })
                            }
                        >
                            read more
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
            <Flex></Flex>
        </Flex>
    );
};
export default Magazine;
