import { composeRefs } from "@radix-ui/react-compose-refs";
import { ElementRef, forwardRef } from "react";
import { RegisterOptions, useFormContext } from "react-hook-form";
import { CSS } from "../../styles";
import { Input, InputProps } from "../Input";
import {
    FormControl,
    FormControlError,
    FormControlLabel,
    useFormControlContext
} from "./FormControl";

export type FormInputControlProps = InputProps & RegisterOptions;

export const FormInputControl = forwardRef<
    HTMLInputElement,
    FormInputControlProps
>( ( props, ref ) => {
    const {
        onChange,
        onBlur,
        disabled,
        deps,
        max,
        maxLength,
        min,
        minLength,
        pattern,
        required,
        setValueAs,
        shouldUnregister,
        validate,
        value,
        valueAsDate,
        valueAsNumber,
        ...rest
    } = props;
    const { register } = useFormContext();
    const { name } = useFormControlContext();
    const {
        ref: connectRef,
        onChange: connectOnChange,
        onBlur: connectOnBlur,
        ...connectProps
    } = register( name, {
        deps,
        max,
        maxLength,
        min,
        minLength,
        pattern,
        required,
        setValueAs,
        shouldUnregister,
        validate,
        value,
        valueAsDate,
        valueAsNumber,
        onChange,
        onBlur,
        disabled
    } );

    return (
        <Input
            id={name}
            placeholder={props.placeholder ?? `${name}...`}
            {...rest}
            {...connectProps}
            onChange={connectOnChange}
            onBlur={connectOnBlur}
            ref={composeRefs( ref, connectRef )}
        />
    );
} );

export type FormInputProps = FormInputControlProps & {
    inverted?: boolean;
    label?: string;
    name: string;
    rootCss?: CSS;
    labelCss?: CSS;
    pattern?: FormInputControlProps["pattern"];
} & InputProps;

export const FormInput = forwardRef<ElementRef<"input">, FormInputProps>(
    ( { label, inverted, name, rootCss, labelCss, ...props }, ref ) => {
        return (
            <FormControl name={name} css={rootCss}>
                <FormControlLabel inverted={inverted}>{label}</FormControlLabel>
                <FormInputControl inverted={inverted} {...props} ref={ref} />
                <FormControlError />
            </FormControl>
        );
    }
);
