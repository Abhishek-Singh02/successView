import { composeEventHandlers } from "@radix-ui/primitive";
import { ElementRef, FC, forwardRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { CSS } from "../../styles";
import { Flex } from "../Flex";
import { Slider, SliderProps } from "../Slider";
import { Text } from "../Text";
import {
    FormControl,
    FormControlError,
    FormControlLabel,
    useFormControlContext
} from "./FormControl";

export const FormInputControl: FC<SliderProps> = ( {
    min,
    max,
    onValueChange,
    defaultValue,
    ...props
} ) => {
    const { control } = useFormContext();
    const { name } = useFormControlContext();

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={( {
                field: { name, onChange, value, ref },
                fieldState: { isTouched }
            } ) => {
                return (
                    <Flex width="full" direction="column" center>
                        <Text variant="overlineMedium" color="base">
                            {value ?? "0"}
                        </Text>
                        <Slider
                            min={min}
                            max={max}
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
                        <Flex width="full" align="center" justify="between">
                            <Flex align="center" gap="2">
                                <Text variant="captionMedium" color="border">
                                    min
                                </Text>
                                <Text variant="overlineMedium" color="base">
                                    {min}
                                </Text>
                            </Flex>
                            <Flex align="center" gap="2">
                                <Text variant="captionMedium" color="border">
                                    max
                                </Text>
                                <Text variant="overlineMedium" color="base">
                                    {max}
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                );
            }}
        />
    );
};
export type FormInputProps = SliderProps & {
    label?: string;
    name: string;
    rootCss?: CSS;
    labelCss?: CSS;
};

export const FormSlider = forwardRef<ElementRef<"input">, FormInputProps>(
    ( { label, name, rootCss, labelCss, ...props }, ref ) => {
        return (
            <FormControl name={name} css={rootCss}>
                <FormControlLabel inverted css={labelCss}>
                    {label}
                </FormControlLabel>
                <FormInputControl {...props} />
                <FormControlError />
            </FormControl>
        );
    }
);
