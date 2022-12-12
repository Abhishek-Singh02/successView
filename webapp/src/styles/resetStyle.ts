import { css } from "./stitches.config";

export const borderBoxStyle = css( {
    "*": {
        boxSizing: "border-box",
    },
    "*:before": {
        boxSizing: "border-box",
    },
    "*:after": {
        boxSizing: "border-box",
    },
} );
