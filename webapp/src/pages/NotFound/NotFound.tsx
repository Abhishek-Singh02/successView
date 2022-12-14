import { IconHome } from "@tabler/icons";
import { FC } from "react";
import { Flex, Link, Separator, Text } from "@/components";

export interface NotFoundProps { }

export const NotFound: FC<NotFoundProps> = () => {
    return (
        <Flex size="full" center>
            <Flex center direction="column" gap="2">
                <Text color="error" variant="heading5">
                    404
                </Text>
                <Text variant="titleSmall">Not Found</Text>
                <Separator gutter="4" />
                <Flex align="center" gap="4" css={{ color: "$infoText" }}>
                    <IconHome size={18} strokeWidth={1.25} />
                    <Link to="/">Back to Home</Link>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default NotFound;
