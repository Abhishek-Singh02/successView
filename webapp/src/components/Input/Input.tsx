import { styled } from "@/styles";
import { VariantProps } from "@stitches/react";
import { forwardRef, Fragment, HTMLProps } from "react";
import * as icons from "react-feather";
import { Box } from "../Box";
import { Flex } from "../Flex";

const StyledInputBox = styled( Box, {
    width: "100%",
    position: "relative",
    borderWidth: "$rg",
    borderColor: "$appText",
    borderStyle: "solid",
    padding: "$4",
    "&:focus-within,&:hover,&:hover>*,&:focus-within>*": {
        borderColor: "$appTextContrast",
        color: "$appTextContrast",
        "&::placeholder": {
            color: "$appTextContrast"
        }
    },
    variants: {
        inverted: {
            true: {
                borderColor: "$appBorder",
                color: "$appBorder",
                "&>*": {
                    color: "$appBorder !important",
                    "&::placeholder": {
                        color: "$appBorder "
                    }
                },
                "&:focus-within,&:hover,&:hover>*,&:focus-within>*": {
                    borderColor: "$appBase",
                    color: "$appBase",
                    "&::placeholder": {
                        color: "$appBase"
                    }
                }
            }
        },
        compact: {
            true: {
                padding: "$3 $4"
            }
        }
    },
    defaultVariants: {
        compact: false
    }
} );

const StyledIconBox = styled( Flex, {
    height: "$full",
    position: "absolute",
    top: "$0",
    left: "$0",
    padding: "$4"
} );

const StyledInput = styled( "input", {
    all: "unset",
    width: "$full",
    typography: "$captionMedium",
    height: "$full"
} );

export interface InputProps extends HTMLProps<HTMLInputElement> {
    icon?: any;
    inverted?: boolean;
    compact?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ( { icon, inverted, compact, ...props }, ref ) => {
        const Icon = icons[ icon as keyof typeof icons ] ?? Fragment;
        return (
            <StyledInputBox
                compact={compact}
                inverted={inverted}
                css={{ pl: icon ? "$10" : "$5" }}
            >
                <StyledIconBox align="center">
                    {typeof icon === "string" ? (
                        <Icon size="1rem" strokeWidth={2} />
                    ) : (
                        icon
                    )}
                </StyledIconBox>
                <StyledInput {...props} ref={ref} />
            </StyledInputBox>
        );
    }
);
