import { Flex, IconButton } from "@/components";
import { keyframes, PropsWithCSS, styled } from "@/styles";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { VariantProps } from "@stitches/react";
import { ComponentProps, ElementRef, forwardRef } from "react";
import { X } from "react-feather";

const fadeOut = keyframes({
    from: { opacity: "1" },
    to: { opacity: "0" },
});

const fadeIn = keyframes({
    from: { opacity: "0" },
    to: { opacity: "1" },
});

const slideIn = keyframes({
    from: { transform: "$$transformValue" },
    to: { transform: "translate3d(0,0,0)" },
});

const slideOut = keyframes({
    from: { transform: "translate3d(0,0,0)" },
    to: { transform: "$$transformValue" },
});

const SheetTitle = styled(DialogPrimitive.Title, {
    color: "$appBlack",
    typography: "$overlineLarge",
    textTransform: "uppercase",
});

const StyledOverlay = styled(DialogPrimitive.Overlay, {
    position: "fixed",
    backgroundColor: "$overlay",
    top: 0,
    right: 0,
    bottom: 0,
    zIndex: 9998,
    left: 0,
    '&[data-state="open"]': {
        animation: `${fadeIn} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
    },
    '&[data-state="closed"]': {
        animation: `${fadeOut} 150ms cubic-bezier(0.22, 1, 0.36, 1)`,
    },
});

const StyledContent = styled(DialogPrimitive.Content, {
    position: "sticky",
    boxShadow: "$4",
    backgroundColor: "$appSecondary",
    paddingInline: "$5",
    paddingBottom: "$4",
    paddingTop: "$6",
    overflow: "auto",
    top: 0,
    bottom: 0,
    height: "$full",
    willChange: "transform",
    zIndex: 9999,
    userSelect: "none",
    "&:focus-visible": {
        outline: "none",
    },
    '&[data-state="open"]': {
        animation: `${slideIn} 400ms ease-in-out`,
    },
    '&[data-state="closed"]': {
        animation: `${slideOut} 400ms cubic-bezier(0.22, 1, 0.36, 1)`,
    },
    variants: {
        side: {
            top: {
                $$transformValue: "translate3d(0,-100%,0)",
                width: "$full",
                height: "fit-content",
                bottom: "auto",
            },
            bottom: {
                $$transformValue: "translate3d(0,100%,0)",
                width: "$full",
                height: "fit-content",
                bottom: 0,
                top: "auto",
            },
            right: {
                $$transformValue: "translate3d(100%,0,0)",
                width: "fit-content",
                right: 0,
            },
            left: {
                $$transformValue: "translate3d(-100%,0,0)",
                width: "30%",
                "@mbp1": {
                    width: "80%",
                },
                left: 0,
            },
        },
    },
    defaultVariants: {
        side: "left",
    },
});
const StyledCloseButton = styled(DialogPrimitive.Close, {
    color: "$appBase",
});

const Sheet = DialogPrimitive.Root;
const SheetTrigger = DialogPrimitive.Trigger;
const SheetClose = DialogPrimitive.Close;
const SheetDescription = DialogPrimitive.Description;

export type SheetContentProps = ComponentProps<typeof DialogPrimitive.Content> &
    VariantProps<typeof StyledContent> &
    PropsWithCSS;

const SheetContent = forwardRef<ElementRef<"div">, SheetContentProps>(
    ({ children, ...props }, forwardedRef) => (
        <DialogPrimitive.Portal>
            <StyledOverlay />
            <StyledContent tabIndex={-1} {...props} ref={forwardedRef}>
                <Flex width="full" direction="column">
                    <Flex width="full" justify="end">
                        <StyledCloseButton asChild>
                            <X size="1rem" strokeWidth={2} />
                        </StyledCloseButton>
                    </Flex>
                    {children}
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
    SheetDescription,
};
