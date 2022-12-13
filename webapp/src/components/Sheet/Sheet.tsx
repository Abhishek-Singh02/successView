import { Flex } from "@/components";
import { keyframes, PropsWithCSS, styled } from "@/styles";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { VariantProps } from "@stitches/react";
import { ComponentProps, ElementRef, forwardRef } from "react";

const fadeOut = keyframes( {
    from: { opacity: "1" },
    to: { opacity: "0" }
} );

const fadeIn = keyframes( {
    from: { opacity: "0" },
    to: { opacity: "1" }
} );

const slideIn = keyframes( {
    from: { transform: "$$transformValue" },
    to: { transform: "translate3d(0,0,0)" }
} );

const slideOut = keyframes( {
    from: { transform: "translate3d(0,0,0)" },
    to: { transform: "$$transformValue" }
} );

const SheetTitle = styled( DialogPrimitive.Title, {
    color: "$appBlack",
    typography: "$overlineLarge",
    textTransform: "uppercase"
} );

const StyledOverlay = styled( DialogPrimitive.Overlay, {
    position: "fixed",
    backgroundColor: "$overlay",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    '&[data-state="open"]': {
        animation: `${fadeIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`
    },
    '&[data-state="closed"]': {
        animation: `${fadeOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`
    }
} );

const StyledContent = styled( DialogPrimitive.Content, {
    position: "sticky",
    boxShadow: "$4",
    backgroundColor: "$appTextContrast",
    paddingInline: "$9",
    paddingBottom: "$4",
    overflow: "auto",
    top: 0,
    bottom: 0,
    height: "$full",
    willChange: "transform",
    userSelect: "none",
    '&[data-state="open"]': {
        animation: `${slideIn} 250ms ease-in-out`
    },
    '&[data-state="closed"]': {
        animation: `${slideOut} 250ms cubic-bezier(0.22, 1, 0.36, 1)`
    },
    variants: {
        side: {
            top: {
                $$transformValue: "translate3d(0,-100%,0)",
                width: "$full",
                height: "fit-content",
                bottom: "auto"
            },
            bottom: {
                $$transformValue: "translate3d(0,100%,0)",
                width: "$full",
                height: "fit-content",
                bottom: 0,
                top: "auto"
            }
        }
    },
    defaultVariants: {
        side: "bottom"
    }
} );
const StyledCloseButton = styled( DialogPrimitive.Close, Flex, {
    border: "none",
    cursor: "pointer",
    userSelect: "none"
} );
const StyledHandle = styled( "div", {
    all: "unset",
    borderRadius: "$2",
    width: "$handleWidthRg",
    height: "$handleHeightRg",
    userSelect: "none",
    backgroundColor: "$appBorder",
    variants: {
        inverted: {
            true: {
                backgroundColor: "$appText"
            }
        },
        size: {
            small: {
                width: "$handleWidthSm",
                height: "$handleHeightSm"
            }
        }
    }
} );

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;
const SheetDescription = DialogPrimitive.Description;

export type SheetContentProps = ComponentProps<typeof DialogPrimitive.Content> &
    VariantProps<typeof StyledContent> &
    PropsWithCSS;

const SheetContent = forwardRef<ElementRef<"div">, SheetContentProps>(
    ( { children, ...props }, forwardedRef ) => (
        <DialogPrimitive.Portal>
            <StyledOverlay />
            <StyledContent {...props} ref={forwardedRef}>
                <Flex direction="column" size="full" center gap="6">
                    <Flex direction="column" size="full" gap="8">
                        <StyledCloseButton
                            tabIndex={-1}
                            height="8"
                            align="end"
                            width="full"
                            justify="center"
                        >
                            <StyledHandle />
                        </StyledCloseButton>
                        {children}
                    </Flex>
                    <StyledHandle size="small" />
                </Flex>
            </StyledContent>
        </DialogPrimitive.Portal>
    )
);

export {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetClose,
    SheetTitle,
    SheetDescription
};
