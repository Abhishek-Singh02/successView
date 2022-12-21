import { FC } from "react";
import { Button, Flex, Text } from "@/components";
import { Blog } from "@/types/api";
import { styled } from "@/styles";
import { useNavigate } from "react-router";

const BlogDescription = styled(Flex, {
    transform: "translate3d(0,-100%,0) scaleY(0)",
    opacity: 0,
    height: 0,
    transition: "all .3s ease-in-out",
});

const BlogContainer = styled(Flex, {
    backgroundColor: "white",
    maxWidth: "370px",
    transition: "all .3s ease-in-out",

    "&:hover": {
        boxShadow: " 0px 0px 26px -5px rgba(0,0,0,0.48)",
        [`& ${BlogDescription}`]: {
            transform: "translate3d(0,0,0)  scaleY(1)",
            opacity: 1,
            height: "100%",
        },
    },
});

export type BlogCardProps = {
    blog: Blog;
};

export const BlogCard: FC<BlogCardProps> = ({ blog }) => {
    const navigate = useNavigate();
    const { image, title, content } = blog;
    return (
        <BlogContainer direction="column" center padding={5} gap={7}>
            <Flex
                css={{
                    height: "fit-content",
                }}
            >
                <img src={image} width="100%" />
            </Flex>
            <Text variant="titleSmall">{title}</Text>
            <BlogDescription direction="column" gap={3}>
                <Text variant="captionMedium">
                    {content.substring(0, 150)}...
                </Text>
                <Button
                    onClick={() =>
                        navigate(`${blog._id}`, { state: { data: blog } })
                    }
                    inverted
                >
                    Read More
                </Button>
            </BlogDescription>
        </BlogContainer>
    );
};
