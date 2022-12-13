import { FC, forwardRef, PropsWithChildren, PropsWithRef } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { styled } from "@/styles";
import { ComponentProps } from "@stitches/react";

const StyledArrow = styled( PopoverPrimitive.Arrow, {
    fill: "$appTextContrast"
} );
const StyledContent = styled( PopoverPrimitive.Content, {
    backgroundColor: "$appBase",
    border: "1px solid $appTextContrast",
    padding: "$4",
    typography: "captionMedium",
    color: "$appTextContrast",
    mr: "$8",
    "@mbp1": {
        maxWidth: "10rem"
    },
    "&:focus-visible": {
        outline: "none"
    }
} );
export const Popover = PopoverPrimitive.Root;
export const PopoverTrigger = PopoverPrimitive.Trigger;
export const PopoverCloser = PopoverPrimitive.Close;

export type PopoverContentProps = PropsWithChildren &
    ComponentProps<typeof StyledContent> & {};

export const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
    ( { children, ...props }, ref ) => {
        return (
            <PopoverPrimitive.Portal>
                <StyledContent side="top" sideOffset={2} {...props} ref={ref}>
                    {children}
                    <StyledArrow />
                </StyledContent>
            </PopoverPrimitive.Portal>
        );
    }
);
