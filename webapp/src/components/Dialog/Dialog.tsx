import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ComponentProps, keyframes } from "@stitches/react";
import { IconX } from "@tabler/icons";
import { ElementRef, forwardRef, PropsWithChildren } from "react";
import { styled } from "../../styles";
import { IconButton } from "../Button";
import { Container, ContainerProps } from "../Container";
import { Text } from "../Text";

const overlayShow = keyframes( {
    "0%": { opacity: 0, backdropFilter: "blur(0px)" },
    "100%": { opacity: 1, backdropFilter: "blur(1.25px)" }
} );

const contentShow = keyframes( {
    "0%": { opacity: 0, transform: "translate(-50%, -48%) scale(.96)" },
    "100%": { opacity: 1, transform: "translate(-50%, -50%) scale(1)" }
} );

const StyledOverlay = styled( DialogPrimitive.Overlay, {
    backgroundColor: "$overlay",
    position: "fixed",
    inset: 0,
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`
} );

const StyledContent = styled( DialogPrimitive.Content, {
    boxSizing: "border-box",
    maxWidth: "calc(100vw - $space$6)",
    backgroundColor: "$appTextContrast",
    boxShadow: "$4",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    animation: `${contentShow} 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards`,
    padding: "$9",
    "&:focus": { outline: "none" }
} );

export type ContentProps = PropsWithChildren &
    ContainerProps &
    ComponentProps<typeof StyledContent> & {};

const Content = forwardRef<HTMLDivElement, ContentProps>(
    ( { children, maxWidth, gap, responsive, fluid, ...props }, ref ) => {
        return (
            <DialogPrimitive.Portal>
                <StyledOverlay />
                <StyledContent asChild ref={ref} {...props}>
                    <Container
                        maxWidth={maxWidth}
                        gap={gap}
                        responsive={responsive}
                        fluid={fluid}
                    >
                        {children}
                    </Container>
                </StyledContent>
            </DialogPrimitive.Portal>
        );
    }
);

const StyledTitle = styled( DialogPrimitive.Title, Text, {
    defaultVariants: {
        variant: "titleLarge",
        color: "base"
    }
} );

const StyledDescription = styled( DialogPrimitive.Description, Text, {
    marginBottom: "$3",
    defaultVariants: {
        variant: "bodyLarge",
        color: "base"
    }
} );

export const DialogRoot = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogContent = Content;
export const DialogTitle = StyledTitle;
export const DialogDescription = StyledDescription;
export const DialogClose = DialogPrimitive.Close;

export interface DialogProps extends ContentProps {
    hideClose?: boolean;
}

export const Dialog = forwardRef<ElementRef<"div">, DialogProps>(
    ( { children, hideClose, ...props }, ref ) => {
        return (
            <DialogContent {...props} ref={ref}>
                {children}
                {!hideClose && (
                    <DialogClose asChild>
                        <IconButton
                            noOutline
                            css={{
                                position: "absolute",
                                top: "$3",
                                right: "$3",
                                color: "$appBase"
                            }}
                        >
                            <IconX />
                        </IconButton>
                    </DialogClose>
                )}
            </DialogContent>
        );
    }
);
