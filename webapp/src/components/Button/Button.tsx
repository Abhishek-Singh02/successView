import { Primitive } from "@radix-ui/react-primitive";
import { VariantProps } from "@stitches/react";
import { ComponentProps } from "react";
import { styled, Alias, CSS, css, PropsWithCSS } from "../../styles";

export const buttonStyles = css({
    all: "unset",
    boxSizing: "border-box",
    alignItems: "center",
    cursor: "pointer",
    userSelect: "none",

    "&::before": {
        boxSizing: "border-box",
    },
    "&::after": {
        boxSizing: "border-box",
    },
    "&:disabled": {
        backgroundColor: "$appText",
        color: "$appBorder",
        pointerEvents: "none",
        userSelect: "none",
    },
    "&:hover": {
        backgroundColor: "$appSecondary",
        color: "$appBase",
    },
    display: "inline-flex",
    gap: "2",
    flexShrink: 0,
    justifyContent: "center",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    color: "$appText",
    textTransform: "uppercase",
    backgroundColor: "$appBase",
    borderColor: "$appBorder",
    borderWidth: 1,
    borderStyle: "solid",
    variants: {
        size: {
            small: {
                padding: "$3 $6",
                typography: "$overlineSmall",
            },
            medium: {
                padding: "$4 $6",
                typography: "$overlineMedium",
            },
            large: {
                padding: "$5 $6",
                typography: "$overlineMedium",
            },
        },
        inverted: {
            true: {
                color: "$appBase",
                backgroundColor: "$appSecondary",
                "&:hover": {
                    color: "$appSecondary",
                    backgroundColor: "$appBase",
                },
            },
        },
        fullWidth: {
            true: {
                width: "100%",
            },
        },
    },
    compoundVariants: [
        {
            inverted: "true",
            css: {
                "&:disabled": {
                    backgroundColor: "$appText",
                    opacity: 0.8,
                    color: "$appBorder",
                    pointerEvents: "none",
                    userSelect: "none",
                },
            },
        },
    ],
    defaultVariants: {
        size: "medium",
        fullWidth: "true",
    },
});

export const Button = styled(Primitive.button, buttonStyles);

export interface ButtonProps
    extends ComponentProps<typeof Button>,
        VariantProps<typeof Button>,
        PropsWithCSS {}
