import { composeEventHandlers } from "@radix-ui/primitive";
import { composeRefs } from "@radix-ui/react-compose-refs";
import { ElementRef, forwardRef } from "react";
import { useFormContext } from "react-hook-form";
import { CSS } from "../../styles";
import { Checkbox, CheckboxProps } from "../Checkbox";
import {
    FormControl,
    FormControlLabel,
    useFormControlContext,
} from "./FormControl";

export const FormCheckboxControl = forwardRef<HTMLButtonElement, CheckboxProps>(
    ( { onChange, onBlur, ...props }, ref ) => {
        const { register } = useFormContext();
        const { name } = useFormControlContext();
        const {
            ref: connectRef,
            onChange: connectOnChange,
            onBlur: connectOnBlur,
            ...connectProps
        } = register( name );

        return (
            <Checkbox
                id={name}
                placeholder={props.placeholder ?? `${name}...`}
                {...props}
                {...connectProps}
                onChange={composeEventHandlers( connectOnChange, onChange )}
                onBlur={composeEventHandlers( connectOnBlur, onBlur )}
                ref={composeRefs( ref, connectRef )}
            />
        );
    }
);

export type FormCheckboxProps = CheckboxProps & {
    label?: string;
    name: string;
    rootCss?: CSS;
    labelCss?: CSS;
};

export const FormCheckbox = forwardRef<ElementRef<"button">, FormCheckboxProps>(
    ( { label, name, rootCss, labelCss, ...props }, ref ) => {
        return (
            <FormControl name={name} css={rootCss}>
                <FormControlLabel css={labelCss}>{label}</FormControlLabel>
                <FormCheckboxControl {...props} ref={ref} />
            </FormControl>
        );
    }
);
