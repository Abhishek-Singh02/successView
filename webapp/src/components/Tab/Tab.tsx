import { styled } from "../../styles";
import * as TabsPrimitive from "@radix-ui/react-tabs";
import { Flex } from "../Flex";
import { Box } from "../Box";

export const Tab = styled( TabsPrimitive.Root, Box, Flex, {
    marginLeft: "auto",
    marginRight: "auto",
    overflow: "hidden",
    maxWidth: "100%",
    height: "100%",
    outline: "none",
    outlineWidth: 0,
    color: "$neutralText",
    backgroundColor: "transparent",

    defaultVariants: {
        direction: "column",
    },
} );

export const TabList = styled( TabsPrimitive.TabsList, Box, Flex, {
    maxWidth: "100%",
    overflowX: "auto",
    flexShrink: 0,

    display: "flex",
    gap: "$6",

    "&::-webkit-scrollbar": {
        width: "6px",
        height: "6px",
        backgroundColor: "$neutralBgSubtle",
    },
    "&::-webkit-scrollbar-track": {
        borderRadius: "6px",
        backgroundColor: "$neutralBgSubtle",
    },
    "&::-webkit-scrollbar-thumb": {
        borderRadius: "6px",
        backgroundColor: "$primarySolid",
    },
} );

export const TabTrigger = styled( TabsPrimitive.TabsTrigger, {
    whiteSpace: "nowrap",
    py: "$3",
    border: "none",
    display: "flex",
    flexShrink: 0,
    jc: "center",
    ai: "center",
    backgroundColor: "transparent",
    color: "inherit",
    transition: "all 0.15s ease-in-out",
    gap: "$3",
    flex: 1,
    typography: "$labelLarge",
    borderBottom: "1px solid transparent",

    "&:hover": {
        color: "$primaryTextContrast",
    },
    '&[data-state="active"]': {
        color: "$neutralTextContrast",
        borderColor: "$neutralText",

        "& svg": {
            color: "$primaryTextContrast",
        },
    },
    "&[disabled]": {
        color: "$textDisabled",
    },
} );

export const TabContent = styled( TabsPrimitive.TabsContent, {
    size: "$full",
} );
