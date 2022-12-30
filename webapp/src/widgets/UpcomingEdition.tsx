import { useGetMagazines } from "@/hooks";
import { FC } from "react";
import { Flex, Separator, Text } from "@/components";

export type UpcomingEditionProps = {};

export const UpcomingEdition: FC<UpcomingEditionProps> = () => {
    const { data } = useGetMagazines();
    const { image, title } = data
        ?.filter((mag) => mag.published === false)
        .slice(-1)[0]!;

    return (
        <Flex
            width="full"
            direction="column"
            css={{
                border: "3px solid $appSecondary",
                "&:hover": { borderColor: "$appPrimary" },
            }}
        >
            <Flex width="full" center>
                <Separator />
                <Text css={{ whiteSpace: "pre", mx: "$9" }} variant="heading4">
                    Upcoming Edition
                </Text>
                <Separator />
            </Flex>
            <Flex
                width="full"
                align="center"
                justify="evenly"
                css={{ "@mbp1": { flexDirection: "column" } }}
            >
                <img src={image} />
                <Flex
                    direction="column"
                    css={{
                        width: "$half",
                        "@mbp1": { width: "75%", alignItems: "center" },
                    }}
                >
                    <Text
                        variant="heading3"
                        css={{
                            "@mbp1": { display: "none" },
                            "&:hover": { color: "$appPrimary" },
                        }}
                    >
                        {title}
                    </Text>
                    <Text
                        variant="heading6"
                        css={{
                            "@bp1": { display: "none" },
                            textAlign: "center",
                        }}
                    >
                        {title}
                    </Text>
                    <Separator gutter={4} />
                    <Text variant="overlineLarge" color="primary">
                        coming soon ...
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};
