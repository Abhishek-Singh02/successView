import { CSS, styled } from "@/styles";
import { Label } from "../Label";

export const Fieldset = styled( "fieldset", {
    all: "unset",
    display: "flex",
    gap: "$2",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%"
} );

export type FieldSetProps = { css?: CSS };
