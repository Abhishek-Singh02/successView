import { PropsWithCSS, styled } from "@/styles";
import { Button } from ".";
import * as icons from "react-feather";
import { Flex } from "../Flex";
import { ComponentProps, FC, forwardRef } from "react";
import { VariantProps } from "@stitches/react";

export const StyledIconButton = styled( "button", {
    all: "unset",
    height: "$9",
    width: "$9",
    padding: "$1",
    backgroundColor: "none",
    borderWidth: "$hairline",
    borderColor: "$appText",
    borderStyle: "solid",
    color: "$appText",
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
    WebkitTapHighlightColor: "transparent",
    variants: {
        noOutline: {
            true: {
                borderColor: "transparent"
            }
        }
    }
} );
export interface IconButtonProps
    extends VariantProps<typeof StyledIconButton>,
        ComponentProps<typeof StyledIconButton>,
        PropsWithCSS {
    icon?: keyof typeof icons;
    iconSize?: string | number;
}
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
    (
        { icon = "PlusSquare", iconSize = "1.25rem", children, ...props },
        ref
    ) => {
        const Icon = icons[ icon ];
        return (
            <StyledIconButton {...props} ref={ref}>
                {children ?? <Icon size={iconSize} strokeWidth={1} />}
            </StyledIconButton>
        );
    }
);
