import { Primitive } from "@radix-ui/react-primitive";
import { VariantProps } from "@stitches/react";
import { CSS, styled } from "../../styles";
import { boxCss } from "../Box";
import { textCss } from "../Text";

export const Flex = styled( Primitive.div, boxCss, textCss, {
    display: "flex",

    variants: {
        direction: {
            row: {
                flexDirection: "row",
            },
            column: {
                flexDirection: "column",
            },
            rowReverse: {
                flexDirection: "row-reverse",
            },
            columnReverse: {
                flexDirection: "column-reverse",
            },
        },
        align: {
            start: {
                alignItems: "flex-start",
            },
            center: {
                alignItems: "center",
            },
            end: {
                alignItems: "flex-end",
            },
            stretch: {
                alignItems: "stretch",
            },
            baseline: {
                alignItems: "baseline",
            },
        },
        self: {
            start: {
                alignSelf: "flex-start",
            },
            end: {
                alignSelf: "flex-end",
            },
            center: {
                alignSelf: "center",
            },
            baseline: {
                alignSelf: "baseline",
            },
            stretch: {
                alignSelf: "stretch",
            },
        },
        content: {
            start: {
                alignContent: "flex-start",
            },
            center: {
                alignContent: "center",
            },
            end: {
                alignContent: "flex-end",
            },
            stretch: {
                alignContent: "stretch",
            },
            baseline: {
                alignContent: "baseline",
            },
            evenly: {
                alignContent: "space-evenly",
            },
        },
        justify: {
            start: {
                justifyContent: "flex-start",
            },
            center: {
                justifyContent: "center",
            },
            end: {
                justifyContent: "flex-end",
            },
            between: {
                justifyContent: "space-between",
            },
            evenly: {
                justifyContent: "space-evenly",
            },
        },
        wrap: {
            noWrap: {
                flexWrap: "nowrap",
            },
            wrap: {
                flexWrap: "wrap",
            },
            wrapReverse: {
                flexWrap: "wrap-reverse",
            },
        },
        gap: {
            0: {
                gap: "$0"
            },
            1: {
                gap: "$1",
            },
            2: {
                gap: "$2",
            },
            3: {
                gap: "$3",
            },
            4: {
                gap: "$4",
            },
            5: {
                gap: "$5",
            },
            6: {
                gap: "$6",
            },
            7: {
                gap: "$7",
            },
            8: {
                gap: "$8",
            },
            9: {
                gap: "$9",
            },
        },
        center: {
            true: {
                alignItems: "center",
                justifyContent: "center",
            },
        },
        flex: {
            true: {
                flex: 1,
            },
        },
    },
    defaultVariants: {
        direction: "row",
        align: "start",
        justify: "start",
        wrap: "noWrap",
    },
} );

export type FlexProps = VariantProps<typeof Flex> & {
    css?: CSS;
};
