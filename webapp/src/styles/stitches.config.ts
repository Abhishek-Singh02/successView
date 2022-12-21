import { createStitches, PropertyValue } from "@stitches/react";
import type { ScaleValue, CSS as StitchesCSS } from "@stitches/react";
import { blackA } from "@radix-ui/colors";
import { createSemanticScale } from "./create-semantic-scale";

export const {
    config,
    createTheme,
    css,
    getCssText,
    globalCss,
    keyframes,
    prefix,
    reset,
    styled,
    theme
} = createStitches({
    theme: {
        colors: {
            ...blackA,
            shadowLight: "rgba(0,0,0,0.15)",
            shadowDark: "rgba(0,0,0,0.30)",
            //new colors
            appBase: "#EDEFEF",
            appBorder: "#9FA5A4",
            appText: "#111716",
            appTextContrast: "#111716",
            appPrimary: "#F2734E",
            appSecondary: "#1E2036",
            appSuccess: "#6BB324",
            appError: "#EC0D0D",
            appWarning: "#EC570D",
            appInfo: "#0DA9EC",
            appBottomBarTopBorderGradient:
                "linear-gradient(90deg, #070808 0%, #111716 50%, #070808 100%)",
            appBlack: "rgba(0,0,0,1)",
            overlay: "rgba(0,0,0,0.3)"
        },
        fonts: {
            sans: [
                "'Crimson Pro', serif",
                "Mukta",
                "Roboto,sans-serif",
                "Ubuntu",
                "Nunito",
                "Quicksand",
                "Inter",
                "ui-sans-serif",
                "system-ui",
                "-apple-system",
                "BlinkMacSystemFont",
                '"Segoe UI"',
                '"Helvetica Neue"',
                "Arial",
                '"Noto Sans"',
                "sans-serif",
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
                '"Noto Color Emoji"'
            ].join(","),
            mono: [
                "ui-monospace",
                "SFMono-Regular",
                "SF Mono",
                "Menlo",
                "Monaco",
                "Consolas",
                '"Liberation Mono"',
                '"Courier New"',
                "monospace"
            ].join(",")
        },
        fontSizes: {
            1: "14px",
            2: "0.875rem",
            3: "1rem",
            4: "1.125rem",
            5: "1.25rem",
            6: "1.5rem",
            7: "2.25rem",
            8: "2.8125rem",
            9: "3.5rem",

            displayLarge: "3.25rem",
            displayMedium: "2.8125rem",
            displaySmall: "2.25rem",
            headlineLarge: "2rem",
            headlineMedium: "1.75rem",
            headlineSmall: "1.5rem",
            labelLarge: ".875rem",
            labelMedium: ".75rem",
            labelSmall: ".6875rem",
            //new font sizes
            overlineLarge: ".875rem",
            overlineMedium: ".75rem",
            overlineSmall: ".625rem",
            captionMedium: ".75rem",
            captionSmall: ".625rem",
            titleLarge: "1.375rem",
            titleMedium: "1.125rem",
            titleSmall: "1rem",
            bodyLarge: "1rem",
            bodyMedium: ".875rem",
            bodySmall: ".75rem",
            heading1: "6rem",
            heading2: "3.75rem",
            heading3: "3rem",
            heading4: "2.125rem",
            heading5: "1.5rem",
            heading6: "1.25rem"
        },
        fontWeights: {
            1: "100",
            2: "200",
            3: "300",
            4: "400",
            5: "500",
            6: "600",
            7: "700",
            8: "800",
            9: "900",

            displayLarge: 400,
            displayMedium: 400,
            displaySmall: 400,
            headlineLarge: 400,
            headlineMedium: 400,
            headlineSmall: 400,
            labelMedium: 500,
            labelSmall: 500,
            //new font weights
            overlineLarge: "800",
            overlineMedium: "500",
            overlineSmall: "500",
            captionMedium: "300",
            captionSmall: "300",
            titleLarge: "600",
            titleMedium: "600",
            titleSmall: "600",
            bodyLarge: "400",
            bodyMedium: "400",
            bodySmall: "400",
            heading1: "300",
            heading2: "300",
            heading3: "300",
            heading4: "300",
            heading5: "600",
            heading6: "600"
        },
        letterSpacings: {
            displayLarge: "-0.0156rem",
            displayMedium: "0",
            displaySmall: "0",
            headlineLarge: "0",
            headlineMedium: "0",
            headlineSmall: "0",
            labelLarge: ".0063rem",
            labelMedium: ".0313rem",
            labelSmall: ".0313rem",
            //new font spacings
            overlineLarge: ".0938rem",
            overlineMedium: ".0938rem",
            overlineSmall: ".0938rem",
            captionMedium: ".025rem",
            captionSmall: ".025rem",
            titleLarge: "0",
            titleMedium: "0",
            titleSmall: "0",
            bodyLarge: "0",
            bodyMedium: "0",
            bodySmall: "0",
            heading1: "-0.0938rem",
            heading2: "0",
            heading3: "0",
            heading4: "0",
            heading5: "0",
            heading6: "0"
        },
        lineHeights: {
            displayLarge: "4rem",
            displayMedium: "3.25rem",
            displaySmall: "2.75rem",
            headlineLarge: "2.5rem",
            headlineMedium: "2.25rem",
            headlineSmall: "2rem",
            labelLarge: "1.25rem",
            labelMedium: "1.125rem",
            labelSmall: "1rem",
            //new line heights
            overlineLarge: "1.5rem",
            overlineMedium: "1rem",
            overlineSmall: "1.125rem",
            captionMedium: "1rem",
            captionSmall: ".625rem",
            titleLarge: "1.375rem",
            titleMedium: "1.375rem",
            titleSmall: "1.125rem",
            bodyLarge: "1.25rem",
            bodyMedium: "1.25rem",
            bodySmall: ".75rem",
            heading1: "6.25rem",
            heading2: "3.75rem",
            heading3: "3.25rem",
            heading4: "2.75rem",
            heading5: "2.125rem",
            heading6: "1.5rem"
        },
        sizes: {
            0: "0rem",
            1: ".0625rem",
            2: ".125rem",
            3: ".25rem",
            4: ".5rem",
            5: ".75rem",
            6: "1rem",
            7: "1.25rem",
            8: "1.5rem",
            9: "1.75rem",
            10: "2rem",
            11: "2.25rem",
            12: "2.5rem",
            13: "2.75rem",
            14: "3rem",
            full: "100%",
            half: "50%",
            handleWidthRg: "11.25rem",
            handleHeightRg: ".25rem",
            handleWidthSm: "8.125rem",
            handleHeightSm: ".3125rem"
        },
        space: {
            0: "0rem",
            1: ".0625rem",
            2: ".125rem",
            3: ".25rem",
            4: ".5rem",
            5: ".75rem",
            6: "1rem",
            7: "1.25rem",
            8: "1.5rem",
            9: "1.75rem",
            10: "2rem",
            11: "2.25rem",
            12: "2.5rem",
            13: "2.75rem",
            14: "3rem"
        },
        radii: {
            1: "2px",
            2: "4px",
            3: "6px",
            4: "8px",
            5: "10px",
            6: "12px",
            pill: "9999px",
            round: "50%"
        },
        borderWidths: {
            hairline: "0.5px",
            rg: "1px"
        },
        shadows: {
            1: "0px 1px 3px 1px $colors$shadowLight, 0px 1px 2px 0px $colors$shadowDark",
            2: "0px 2px 6px 2px $colors$shadowLight, 0px 1px 2px 0px $colors$shadowDark",
            3: "0px 4px 8px 3px $colors$shadowLight, 0px 1px 3px 0px $colors$shadowDark",
            4: "0px 6px 10px 4px $colors$shadowLight, 0px 2px 3px 0px $colors$shadowDark",
            5: "0px 8px 12px 6px $colors$shadowLight, 0px 4px 4px 0px $colors$shadowDark"
        },
        breakpoints: {
            1: "520px",
            2: "900px",
            3: "1200px",
            4: "1400px",
            5: "1800px"
        }
    },
    media: {
        bp1: "(min-width: 520px)",
        bp2: "(min-width: 900px)",
        bp3: "(min-width: 1200px)",
        bp4: "(min-width: 1400px)",
        bp5: "(min-width: 1800px)",
        mbp1: "(max-width: 520px)",
        mbp2: "(max-width: 900px)",
        mbp3: "(max-width: 1200px)",
        mbp4: "(max-width: 1400px)",
        mbp5: "(max-width: 1800px)",
        motion: "(prefers-reduced-motion)",
        hover: "(any-hover: hover)",
        dark: "(prefers-color-scheme: dark)",
        light: "(prefers-color-scheme: light)"
    },
    utils: {
        p: (value: ScaleValue<"padding"> | string | number) => ({
            padding: value
        }),
        pt: (value: ScaleValue<"paddingTop"> | string | number) => ({
            paddingTop: value
        }),
        pr: (value: ScaleValue<"paddingRight"> | string | number) => ({
            paddingRight: value
        }),
        pb: (value: ScaleValue<"paddingBottom"> | string | number) => ({
            paddingBottom: value
        }),
        pl: (value: ScaleValue<"paddingLeft"> | string | number) => ({
            paddingLeft: value
        }),
        px: (value: ScaleValue<"paddingLeft"> | string | number) => ({
            paddingLeft: value,
            paddingRight: value
        }),
        py: (value: ScaleValue<"paddingTop"> | string | number) => ({
            paddingTop: value,
            paddingBottom: value
        }),
        m: (value: ScaleValue<"margin"> | string | number) => ({
            margin: value
        }),
        mt: (value: ScaleValue<"marginTop"> | string | number) => ({
            marginTop: value
        }),
        mr: (value: ScaleValue<"marginRight"> | string | number) => ({
            marginRight: value
        }),
        mb: (value: ScaleValue<"marginBottom"> | string | number) => ({
            marginBottom: value
        }),
        ml: (value: ScaleValue<"marginLeft"> | string | number) => ({
            marginLeft: value
        }),
        mx: (value: ScaleValue<"marginLeft"> | string | number) => ({
            marginLeft: value,
            marginRight: value
        }),
        my: (value: ScaleValue<"marginTop"> | string | number) => ({
            marginTop: value,
            marginBottom: value
        }),
        ta: (value: ScaleValue<"textAlign"> | string | number) => ({
            textAlign: value
        }),

        fd: (value: ScaleValue<"flexDirection"> | string | number) => ({
            flexDirection: value
        }),
        fw: (value: ScaleValue<"flexWrap"> | string | number) => ({
            flexWrap: value
        }),

        ai: (value: ScaleValue<"alignItems"> | string | number) => ({
            alignItems: value
        }),
        ac: (value: ScaleValue<"alignContent"> | string | number) => ({
            alignContent: value
        }),
        jc: (value: ScaleValue<"justifyContent"> | string | number) => ({
            justifyContent: value
        }),
        as: (value: ScaleValue<"alignSelf"> | string | number) => ({
            alignSelf: value
        }),
        fg: (value: ScaleValue<"flexGrow"> | string | number) => ({
            flexGrow: value
        }),
        fs: (value: ScaleValue<"flexShrink"> | string | number) => ({
            flexShrink: value
        }),
        fb: (value: ScaleValue<"flexBasis"> | string | number) => ({
            flexBasis: value
        }),
        bc: (value: ScaleValue<"backgroundColor"> | string | number) => ({
            backgroundColor: value
        }),
        br: (value: ScaleValue<"borderRadius"> | string | number) => ({
            borderRadius: value
        }),
        btrr: (
            value: ScaleValue<"borderTopRightRadius"> | string | number
        ) => ({
            borderTopRightRadius: value
        }),
        bbrr: (
            value: ScaleValue<"borderBottomRightRadius"> | string | number
        ) => ({
            borderBottomRightRadius: value
        }),
        bblr: (
            value: ScaleValue<"borderBottomLeftRadius"> | string | number
        ) => ({
            borderBottomLeftRadius: value
        }),
        btlr: (value: ScaleValue<"borderTopLeftRadius"> | string | number) => ({
            borderTopLeftRadius: value
        }),
        bs: (value: ScaleValue<"boxShadow"> | string | number) => ({
            boxShadow: value
        }),

        lh: (value: ScaleValue<"lineHeight"> | string | number) => ({
            lineHeight: value
        }),
        ox: (value: ScaleValue<"overflowX"> | string | number) => ({
            overflowX: value
        }),
        oy: (value: ScaleValue<"overflowY"> | string | number) => ({
            overflowY: value
        }),
        pe: (value: ScaleValue<"pointerEvents"> | string | number) => ({
            pointerEvents: value
        }),
        us: (value: ScaleValue<"userSelect"> | string | number) => ({
            WebkitUserSelect: value,
            userSelect: value
        }),
        userSelect: (value: ScaleValue<"userSelect"> | string | number) => ({
            WebkitUserSelect: value,
            userSelect: value
        }),
        size: (value: ScaleValue<"width"> | string | number) => ({
            width: value,
            height: value
        }),
        align: (value: ScaleValue<"justifyContent"> | string | number) => ({
            justifyContent: value,
            alignItems: value
        }),
        appearance: (value: ScaleValue<"appearance"> | string | number) => ({
            WebkitAppearance: value,
            appearance: value
        }),
        backgroundClip: (
            value: ScaleValue<"backgroundClip"> | string | number
        ) => ({
            WebkitBackgroundClip: value,
            backgroundClip: value
        }),
        typography: (value: ScaleValue<"lineHeight"> | string | number) => ({
            fontSize: value,
            fontWeight: value,
            lineHeight: value,
            letterSpacing: value
        }),
        textOverflow: (value: PropertyValue<"textOverflow">) => ({
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: value
        })
    }
});

export type CSS = StitchesCSS<typeof config>;
export type PropsWithCSS = { css?: CSS };
