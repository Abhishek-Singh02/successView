import { composeEventHandlers } from "@radix-ui/primitive";
import { FC } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Select, SelectProps } from "../Select";
import { CSS } from "../../styles";
import {
    FormControl,
    FormControlError,
    FormControlLabel,
    useFormControlContext
} from "./FormControl";

export const FormSelectControl: FC<SelectProps> = ( {
    onValueChange,
    ...props
} ) => {
    const { control } = useFormContext();
    const { name } = useFormControlContext();

    return (
        <Controller
            name={name}
            control={control}
            render={( { field: { name, onChange, value, ref } } ) => {
                return (
                    <Select
                        {...props}
                        ref={ref}
                        id={name}
                        name={name}
                        value={value}
                        onValueChange={composeEventHandlers(
                            onChange,
                            onValueChange
                        )}
                    />
                );
            }}
        />
    );
};

export type FormSelectProps = SelectProps & {
    inverted: boolean;
    label?: string;
    name: string;
    rootCss?: CSS;
    labelCss?: CSS;
};

export const FormSelect: FC<FormSelectProps> = ( {
    label,
    inverted,
    name,
    rootCss,
    labelCss,
    ...props
} ) => {
    return (
        <FormControl name={name} css={rootCss}>
            <FormControlLabel inverted={inverted} css={labelCss}>
                {label}
            </FormControlLabel>
            <FormSelectControl {...props} />
            <FormControlError />
        </FormControl>
    );
};
