import { styled } from "@/styles";
import * as LabelPrimitive from "@radix-ui/react-label";
import { ComponentProps } from "@stitches/react";

export const Label = styled( LabelPrimitive.Root, {
    userSelect: "none",
    typography: "$overlineLarge",
    color: "$appText",
    variants: {
        inverted: {
            true: {
                color: "$appBorder"
            }
        }
    }
} );

export type LabelProps = ComponentProps<typeof Label>;
