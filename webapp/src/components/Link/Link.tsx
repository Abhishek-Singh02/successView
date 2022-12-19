import { styled } from "../../styles";
import { NavLink as RouterLink } from "react-router-dom";
import { Text } from "../Text";
import { ComponentProps } from "@stitches/react";
import { FC } from "react";

export const StyledLink = styled(RouterLink, Text, {
    textDecoration: "none",
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
});

export interface LinkProps
    extends Omit<ComponentProps<typeof StyledLink>, "to"> {
    to: ComponentProps<typeof StyledLink>["to"] | number;
}

export const Link = StyledLink as FC<LinkProps>;
