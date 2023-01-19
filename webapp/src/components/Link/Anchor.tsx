import { styled } from "../../styles";
import { NavLink as RouterLink } from "react-router-dom";
import { Text } from "../Text";
import { ComponentProps } from "@stitches/react";
import { FC } from "react";

export const StyledAnchor = styled("a", {
    all: "unset",
    textDecoration: "none",
    variants: {
        color: {
            primary: {
                "&:hover": {
                    "&>*": {
                        color: "$appPrimary",
                    },
                    transform: "scale(1.1) translateY(-2px)",
                },
                "&.active": {
                    "&>*": {
                        color: "$appPrimary",
                    },
                },
            },
            base: {
                "&:hover": {
                    "&>*": {
                        color: "$appPrimary",
                    },
                    transform: "scale(1.1) translateY(-2px)",
                },
                "&.active": {
                    "&>*": {
                        color: "$appBase",
                    },
                },
            },
        },
    },
    defaultVariants: {
        color: "primary",
    },
});

export const Anchor = StyledAnchor;
