import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { VariantProps } from "@stitches/react";
import { IconCheck } from "@tabler/icons";
import { forwardRef } from "react";
import { CSS, styled } from "../../styles";

const StyledIndicator = styled( CheckboxPrimitive.Indicator, {
    size: "$full",
    display: "flex",
    align: "center",
} );

const StyledCheckbox = styled( CheckboxPrimitive.Root, {
    all: "unset",
    borderRadius: "$1",
    display: "flex",
    align: "center",

    backgroundColor: "$neutralBg",
    [ `& > ${StyledIndicator}` ]: {
        color: "$neutralSolid",
    },
    "&:hover": { backgroundColor: "$neutralBgHover" },
    "&:active": {
        [ `& > ${StyledIndicator}` ]: {
            color: "$neutralSolidHover",
        },
    },

    variants: {
        size: {
            1: {
                size: "$4",
                padding: "$1",
            },
            2: {
                size: "$5",
                padding: "$1",
            },
        },
    },

    defaultVariants: {
        size: "1",
    },
} );

export const CheckboxRoot = StyledCheckbox;
export const CheckboxIndicator = StyledIndicator;

export type CheckboxProps = CheckboxPrimitive.CheckboxProps &
    VariantProps<typeof CheckboxRoot> & { css: CSS };

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
    ( props, ref ) => {
        return (
            <CheckboxRoot {...props} ref={ref}>
                <CheckboxIndicator>
                    <IconCheck />
                </CheckboxIndicator>
            </CheckboxRoot>
        );
    }
);
