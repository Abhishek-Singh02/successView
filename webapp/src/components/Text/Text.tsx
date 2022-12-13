import { Primitive } from "@radix-ui/react-primitive";
import { AliasSolid, css, styled } from "../../styles";

export const textCss = css( {
    userSelect: "none",
    color: "inherit",
    variants: {
        textAlign: {
            center: { textAlign: "center" },
            left: { textAlign: "left" },
            right: { textAlign: "right" }
        },
        variant: {
            heading1: {
                typography: "$heading1"
            },
            heading2: {
                typography: "$heading2"
            },
            heading3: {
                typography: "$heading3"
            },
            heading4: {
                typography: "$heading4"
            },
            heading5: {
                typography: "$heading5"
            },
            heading6: {
                typography: "$heading6"
            },
            bodyLarge: {
                typography: "$bodyLarge"
            },
            bodyMedium: {
                typography: "$bodyMedium"
            },
            bodySmall: {
                typography: "$bodySmall"
            },
            titleLarge: {
                typography: "$titleLarge"
            },
            titleMedium: {
                typography: "$titleMedium"
            },
            titleSmall: {
                typography: "$titleSmall"
            },
            captionMedium: {
                typography: "$captionMedium"
            },
            captionSmall: {
                typography: "$captionSmall"
            },
            overlineLarge: {
                typography: "$overlineLarge",
                textTransform: "uppercase"
            },
            overlineMedium: {
                typography: "$overlineMedium",
                textTransform: "uppercase"
            },
            overlineSmall: {
                typography: "$overlineSmall",
                textTransform: "uppercase"
            }
        },
        color: {
            appText: {
                color: "$appText"
            },
            primary: {
                color: "$appPrimary"
            },
            secondary: {
                color: "$appSecondary"
            },
            success: {
                color: "$appSuccess"
            },
            info: {
                color: "$appInfo"
            },
            warning: {
                color: "$appWarning"
            },
            error: {
                color: "$appError"
            },
            contrast: {
                color: "$appTextContrast"
            },
            base: {
                color: "$appBase"
            },
            border: {
                color: "$appBorder"
            }
        },
        selectable: {
            true: {
                userSelect: "initial"
            }
        },
        inverted: {
            true: {
                color: "$appBorder"
            }
        }
    },
    defaultVariants: {
        color: "appText"
    }
} );

export const Text = styled( Primitive.span, textCss );
