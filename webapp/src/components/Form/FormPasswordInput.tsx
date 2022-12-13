import { CSS } from "@/styles";
import { ElementRef, forwardRef, useState } from "react";
import { Eye, EyeOff } from "react-feather";
import { Flex } from "../Flex";
import { FormControl, FormControlError, FormControlLabel } from "./FormControl";
import { FormInputControl, FormInputControlProps } from "./FormInput";

export type FormPasswordInputProps = FormInputControlProps & {
    inverted?: boolean;
    label?: string;
    name: string;
    rootCss?: CSS;
    labelCss?: CSS;
    pattern?: FormInputControlProps["pattern"];
};

export const FormPasswordInput = forwardRef<
    ElementRef<"input">,
    FormPasswordInputProps
>( ( { label, inverted, name, rootCss, labelCss, ...props }, ref ) => {
    const [ showPassword, setShowPassword ] = useState( false );
    return (
        <FormControl name={name} css={rootCss}>
            <FormControlLabel inverted={inverted}>{label}</FormControlLabel>
            <Flex css={{ position: "relative" }} size="full">
                <FormInputControl
                    type={showPassword ? "text" : "password"}
                    inverted={inverted}
                    {...props}
                    ref={ref}
                />
                <Flex
                    center
                    height="full"
                    padding={5}
                    css={{
                        position: "absolute",
                        right: 0,
                        my: "auto",
                        color: "$appText",
                        opacity: 0.6,
                        cursor: "pointer",
                        WebkitTapHighlightColor: "transparent"
                    }}
                    onClick={() => setShowPassword( !showPassword )}
                >
                    {!showPassword ? (
                        <Eye size="1rem" />
                    ) : (
                        <EyeOff size="1rem" />
                    )}
                </Flex>
            </Flex>
            <FormControlError />
        </FormControl>
    );
} );
