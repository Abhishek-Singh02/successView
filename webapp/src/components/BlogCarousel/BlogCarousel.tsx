import { useGetBlogs } from "@/hooks";
import { Carousel } from "react-responsive-carousel";
import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Button, Flex, Separator, Text } from "@/components";

export const BlogCarousel = () => {
    const { data } = useGetBlogs();
    const navigate = useNavigate();
    return (
        <Flex width="full" align="end">
            <Carousel
                stopOnHover={false}
                interval={5000}
                showArrows={false}
                autoPlay={true}
                infiniteLoop
                showIndicators={false}
                showThumbs={false}
                showStatus={false}
                dynamicHeight
            >
                {data?.slice(-8).map((blog) => (
                    <Flex
                        key={blog._id}
                        width="full"
                        css={{
                            height: "80%",
                            "@mbp1": { height: "100%" },
                        }}
                    >
                        <Flex
                            css={{
                                backgroundColor: "rgba(0,0,0,0.5)",
                                position: "absolute",
                                height: "inherit",
                                py: "$5",
                                px: "$8",
                            }}
                            direction="column"
                            align="center"
                            justify="end"
                            width="full"
                            gap="5"
                        >
                            <Text
                                css={{ "@mbp1": { display: "none" } }}
                                variant="heading3"
                                color="base"
                            >
                                {blog.title}
                            </Text>
                            <Text
                                css={{ "@bp1": { display: "none" } }}
                                variant="heading6"
                                color="base"
                            >
                                {blog.title}
                            </Text>
                            <Separator
                                css={{ "@mbp1": { display: "none" } }}
                                strokeWidth={1}
                            />
                            <Flex>
                                <Button
                                    onClick={() =>
                                        navigate(`/articles/${blog._id}`, {
                                            state: { data: blog },
                                        })
                                    }
                                    size="small"
                                    inverted
                                >
                                    Read More
                                </Button>
                            </Flex>
                            <Separator
                                css={{ "@mbp1": { display: "none" } }}
                                strokeWidth={1}
                            />
                        </Flex>
                        <img
                            src={blog.image}
                            style={{
                                objectFit: "cover",
                                height: "100%",
                                overflow: "clip",
                            }}
                        />
                    </Flex>
                ))}
            </Carousel>
        </Flex>
    );
};
