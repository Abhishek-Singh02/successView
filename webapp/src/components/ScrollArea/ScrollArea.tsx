import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { ComponentProps } from "@stitches/react";
import { ElementRef, forwardRef } from "react";
import { AliasSolid, styled } from "../../styles";
import { Box } from "../Box";

const createScrollbarColorVariant = ( color: AliasSolid ) => ( {
    background: `$${color}BgSubtle`,
    "&:hover": {
        background: `$${color}BgHover`,
        [ `& ${StyledThumb}` ]: {
            background: `$${color}BorderHover`
        }
    },
    [ `& ${StyledThumb}` ]: {
        background: `$${color}Border`
    }
} );

const createCornerColorVariant = ( color: AliasSolid ) => ( {
    background: `$${color}BgSubtle`
} );

const StyledScrollArea = styled( ScrollAreaPrimitive.Root, Box, {
    size: "$full",
    overflow: "hidden"
} );

const StyledViewport = styled( ScrollAreaPrimitive.Viewport, {
    width: "100%",
    height: "100%",
    borderRadius: "inherit"
} );

const StyledThumb = styled( ScrollAreaPrimitive.Thumb, {
    flex: 1,
    background: "$neutralText",
    borderRadius: "$6",
    transition: "background 80ms ease-out",
    // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
    position: "relative",
    "&::before": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "100%",
        height: "100%",
        minWidth: 44,
        minHeight: 44
    }
} );

const StyledScrollbar = styled( ScrollAreaPrimitive.Scrollbar, {
    display: "flex",
    background: "$neutralBg",

    // ensures no selection
    userSelect: "none",

    // disable browser handling of all panning and zooming gestures on touch devices
    touchAction: "none",

    padding: "$2",
    transition: "background 80ms ease-out",
    "&:hover": { background: "$neutralBgHover" },
    '&[data-orientation="vertical"]': { width: "$4" },
    '&[data-orientation="horizontal"]': {
        flexDirection: "column",
        height: "$4"
    },

    variants: {
        color: {
            neutral: createScrollbarColorVariant( "neutral" ),
            primary: createScrollbarColorVariant( "primary" ),
            secondary: createScrollbarColorVariant( "secondary" ),
            info: createScrollbarColorVariant( "info" ),
            error: createScrollbarColorVariant( "error" ),
            success: createScrollbarColorVariant( "success" ),
            warning: createScrollbarColorVariant( "warning" )
        }
    },

    defaultVariants: {
        color: "neutral"
    }
} );

const StyledCorner = styled( ScrollAreaPrimitive.Corner, {
    background: "$neutralABg",

    variants: {
        color: {
            neutral: createCornerColorVariant( "neutral" ),
            primary: createCornerColorVariant( "primary" ),
            secondary: createCornerColorVariant( "secondary" ),
            info: createCornerColorVariant( "info" ),
            error: createCornerColorVariant( "error" ),
            success: createCornerColorVariant( "success" ),
            warning: createCornerColorVariant( "warning" )
        }
    },
    defaultVariants: {
        color: "neutral"
    }
} );

export const ScrollAreaRoot = StyledScrollArea;
export const ScrollAreaViewport = StyledViewport;
export const ScrollAreaScrollbar = StyledScrollbar;
export const ScrollAreaThumb = StyledThumb;
export const ScrollAreaCorner = StyledCorner;

export type ScrollAreaProps = ComponentProps<typeof ScrollAreaRoot> & {
    color?: AliasSolid;
};

export const ScrollArea = forwardRef<ElementRef<"div">, ScrollAreaProps>(
    ( { children, color, ...props }, ref ) => {
        return (
            <ScrollAreaRoot {...props} ref={ref}>
                <ScrollAreaViewport>{children}</ScrollAreaViewport>
                <ScrollAreaScrollbar color={color} orientation="vertical">
                    <ScrollAreaThumb />
                </ScrollAreaScrollbar>
                <ScrollAreaScrollbar color={color} orientation="horizontal">
                    <ScrollAreaThumb />
                </ScrollAreaScrollbar>
                <ScrollAreaCorner color={color} />
            </ScrollAreaRoot>
        );
    }
);
