import { Primitive } from "@radix-ui/react-primitive";
import { css } from "@stitches/react";
import { styled } from "../../styles";
import { textCss } from "../Text";

export const boxCss = css( {
    variants: {
        size: {
            0: { size: "$0" },
            1: { size: "$1" },
            2: { size: "$2" },
            3: { size: "$3" },
            4: { size: "$4" },
            5: { size: "$5" },
            6: { size: "$6" },
            7: { size: "$7" },
            8: { size: "$8" },
            9: { size: "$9" },
            10: { size: "$10" },
            11: { size: "$11" },
            12: { size: "$12" },
            13: { size: "$13" },
            14: { size: "$14" },
            full: { size: "$full" },
            half: { size: "$half" },
        },
        width: {
            0: { width: "$0" },
            1: { width: "$1" },
            2: { width: "$2" },
            3: { width: "$3" },
            4: { width: "$4" },
            5: { width: "$5" },
            6: { width: "$6" },
            7: { width: "$7" },
            8: { width: "$8" },
            9: { width: "$9" },
            10: { width: "$10" },
            11: { width: "$11" },
            12: { width: "$12" },
            13: { width: "$13" },
            14: { width: "$14" },
            full: { width: "$full" },
            half: { width: "$half" },
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
            10: { height: "$10" },
            11: { height: "$11" },
            12: { height: "$12" },
            13: { height: "$13" },
            14: { height: "$14" },
            full: { height: "$full" },
            half: { height: "$half" },
        },
        radii: {
            1: { borderRadius: "$1" },
            2: { borderRadius: "$2" },
            3: { borderRadius: "$3" },
            4: { borderRadius: "$4" },
            5: { borderRadius: "$5" },
            6: { borderRadius: "$6" },
            pill: { borderRadius: "$pill" },
            round: { borderRadius: "$round" },
        },
        padding: {
            0: { padding: "$0" },
            1: { padding: "$1" },
            2: { padding: "$2" },
            3: { padding: "$3" },
            4: { padding: "$4" },
            5: { padding: "$5" },
            6: { padding: "$6" },
            7: { padding: "$7" },
            8: { padding: "$8" },
            9: { padding: "$9" },
            10: { padding: "$10" },
            11: { padding: "$11" },
            12: { padding: "$12" },
            13: { padding: "$13" },
            14: { padding: "$14" },
        },
        margin: {
            0: { margin: "$0" },
            1: { margin: "$1" },
            2: { margin: "$2" },
            3: { margin: "$3" },
            4: { margin: "$4" },
            5: { margin: "$5" },
            6: { margin: "$6" },
            7: { margin: "$7" },
            8: { margin: "$8" },
            9: { margin: "$9" },
            10: { margin: "$10" },
            11: { margin: "$11" },
            12: { margin: "$12" },
            13: { margin: "$13" },
            14: { margin: "$14" },
        },
        elevation: {
            1: { boxShadow: "$1" },
            2: { boxShadow: "$2" },
            3: { boxShadow: "$3" },
            4: { boxShadow: "$4" },
            5: { boxShadow: "$5" },
        },
    },
} )

export const Box = styled( Primitive.div, boxCss, textCss );
