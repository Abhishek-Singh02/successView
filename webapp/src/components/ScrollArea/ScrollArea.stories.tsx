import { styled } from "../../styles";
import { Box } from "../Box";
import { Text } from "../Text";
import {
    ScrollArea
} from "./ScrollArea";

const TAGS = Array.from( { length: 50 } ).map(
    ( _, i, a ) => `v1.2.0-beta.${a.length - i}`
);

const Tag = styled( "div", {
    color: "$neutralText",
    fontSize: 13,
    lineHeight: "18px",
    marginTop: 10,
    borderTop: `1px solid $neutralLine`,
    paddingTop: 10,
} );

export const ScrollAreaStory = ( props:any ) => {
    return (
    <Box css={{ height: "200px", width: "50%" }}>
        <ScrollArea {...props}>
            <Box style={{ padding: "15px 20px", width: "150%" }}>
                <Text>Tags</Text>
                {TAGS.map( ( tag ) => (
                    <Tag key={tag}>{tag}</Tag>
                ) )}
            </Box>
        </ScrollArea>
    </Box>
)};

ScrollAreaStory.storyName = "ScrollArea";

ScrollAreaStory.args = {};

ScrollAreaStory.argTypes = {
    color: {
        options: [
            "neutral",
            "primary",
            "secondary",
            "info",
            "error",
            "warning",
            "success",
        ],
        control: { type: "select" },
        defaultValue: "neutral",
    },
};
