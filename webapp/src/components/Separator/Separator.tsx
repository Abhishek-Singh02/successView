import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { styled } from "../../styles";

const StyledSeparator = styled( SeparatorPrimitive.Separator, {
    all: "unset",

    "&[data-orientation=horizontal]": {
        height: "$$strokeWidth",
        width: "100%",
        my: "$$gutter"
    },
    "&[data-orientation=vertical]": {
        height: "100%",
        width: "$$strokeWidth",
        mx: "$$gutter"
    },

    variants: {
        strokeWidth: {
            1: { $$strokeWidth: "1px" },
            2: { $$strokeWidth: "2px" },
            3: { $$strokeWidth: "3px" }
        },
        invisible: {
            true: {
                $$strokeWidth: "0px"
            }
        },
        colors: {
            base: { background: "$appBase" },
            contrast: { background: "$appTextContrast" },
            text: { background: "$appText" },
            border: { background: "$appBorder" },
            primary: { background: "$appPrimary" },
            secondary: { background: "$appSecondary" },
            info: { background: "$appInfo" },
            error: { background: "$appError" },
            warning: { background: "$appWarning" },
            success: { background: "$appSuccess" }
        },
        gutter: {
            0: {
                $$gutter: "0px"
            },
            1: {
                $$gutter: "$space$1"
            },
            2: {
                $$gutter: "$space$2"
            },
            3: {
                $$gutter: "$space$3"
            },
            4: {
                $$gutter: "$space$4"
            },
            5: {
                $$gutter: "$space$5"
            },
            6: {
                $$gutter: "$space$6"
            },
            7: {
                $$gutter: "$space$7"
            },
            8: {
                $$gutter: "$space$8"
            },
            9: {
                $$gutter: "$space$9"
            }
        }
    },
    defaultVariants: {
        colors: "border",
        strokeWidth: "1",
        gutter: "0"
    }
} );

export const Separator = StyledSeparator;
