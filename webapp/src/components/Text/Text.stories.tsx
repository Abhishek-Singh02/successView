import { Flex } from "../Flex";
import { Text } from "./Text";

export const TextStories = ( props: any ) => (
    <Flex direction="column">
        <Text {...props} variant="displayLarge">
            Display Large
        </Text>
        <Text {...props} variant="displayMedium">
            Display Medium
        </Text>
        <Text {...props} variant="displaySmall">
            Display Small
        </Text>
        <Text {...props} variant="headlineLarge">
            Headline Large
        </Text>
        <Text {...props} variant="headlineMedium">
            Headline Medium
        </Text>
        <Text {...props} variant="headlineSmall">
            Headline Small
        </Text>
        <Text {...props} variant="titleLarge">
            Title Large
        </Text>
        <Text {...props} variant="titleMedium">
            Title Medium
        </Text>
        <Text {...props} variant="titleSmall">
            Title Small
        </Text>
        <Text {...props} variant="bodyLarge">
            Body Large
        </Text>
        <Text {...props} variant="bodyMedium">
            Body Medium
        </Text>
        <Text {...props} variant="bodySmall">
            Body Small
        </Text>
        <Text {...props} variant="labelLarge">
            Label Large
        </Text>
        <Text {...props} variant="labelMedium">
            Label Medium
        </Text>
        <Text {...props} variant="labelSmall">
            Label Small
        </Text>
    </Flex>
);

TextStories.storyName = "Text";

TextStories.args = {};

TextStories.argTypes = {
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
    contrast: {
        options: [ "low", "regular", "hi", "solid" ],
        control: { type: "select" },
        defaultValue: "regular",
    },
};
