import { Primitive } from "@radix-ui/react-primitive";
import { VariantProps } from "@stitches/react";
import { ElementRef, forwardRef, PropsWithChildren, useMemo } from "react";
import { CSS, styled } from "../../styles";

export const StyledContainer = styled( Primitive.div, {
    width: "$full",
    mx: "auto",
    variants: {
        responsive: {
            true: {
                "@bp1": {
                    maxWidth: "$breakpoints$1",
                },
                "@bp2": {
                    maxWidth: "$breakpoints$2",
                },
                "@bp3": {
                    maxWidth: "$breakpoints$3",
                },
                "@bp4": {
                    maxWidth: "$breakpoints$4",
                },
                "@bp5": {
                    maxWidth: "$breakpoints$5",
                },
            },
        },
        fluid: {
            true: {
                maxWidth: "$full",
            },
        },
        height: {
            0: { height: "$0" },
            1: { height: "$1" },
            2: { height: "$2" },
            3: { height: "$3" },
            4: { height: "$4" },
            5: { height: "$5" },
            6: { height: "$6" },
            7: { height: "$7" },
            8: { height: "$8" },
            9: { height: "$9" },
            full: { height: "$full" },
            half: { height: "$half" },
        },
    },
    defaultVariants: {
        responsive: true,
    },
} );

export type ContainerProps = VariantProps<typeof StyledContainer> & {
    css?: CSS;
    maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
    gap?: number | string;
};

export const Container = forwardRef<
    ElementRef<"div">,
    PropsWithChildren<ContainerProps>
>( ( { gap = 2, children, css, maxWidth: _maxWidth, ...props }, ref ) => {
    const gapUnit = useMemo( () => {
        return `calc(${gap} * $space$3)`;
    }, [ gap ] );

    const maxWidth = useMemo( () => {
        switch ( _maxWidth ) {
            case "xs":
                return "$breakpoints$1";
            case "sm":
                return "$breakpoints$2";
            case "md":
                return "$breakpoints$3";
            case "lg":
                return "$breakpoints$4";
            case "xl":
                return "$breakpoints$5";
            default:
                return "";
        }
    }, [ _maxWidth ] );

    return (
        <StyledContainer
            ref={ref}
            css={{
                px: gapUnit,
                maxWidth,
                ...css,
            }}
            {...props}
        >
            {children}
        </StyledContainer>
    );
} );

Container.defaultProps = {
    gap: 2,
    responsive: true,
};
