import {
    createContext,
    FC,
    forwardRef,
    PropsWithChildren,
    useContext
} from "react";
import { useFormState } from "react-hook-form";
import { Box } from "../Box";
import { Fieldset, FieldSetProps } from "../Fieldset";
import { Text } from "../Text";

export interface FormControlContext {
    name: string;
}

const FormControlContext = createContext<FormControlContext>( null! );

export interface FormControlProps
    extends FormControlContext,
        Omit<FieldSetProps, "name"> {}

export const FormControl: FC<PropsWithChildren<FormControlProps>> = ( {
    children,
    ...props
} ) => {
    return (
        <FormControlContext.Provider value={{ name: props.name }}>
            <Fieldset {...props}>{children}</Fieldset>
        </FormControlContext.Provider>
    );
};

export const useFormControlContext = () => useContext( FormControlContext );

export const FormControlLabel = ( props: any ) => {
    const { name } = useFormControlContext();
    return (
        <Text variant="overlineSmall" {...props}>
            {props.children ?? name}
        </Text>
    );
};

export const FormControlError = forwardRef<HTMLSpanElement>( ( props, ref ) => {
    const { name } = useFormControlContext();
    const { errors } = useFormState<Record<string, string>>( {
        name
    } );

    const errorMessage = errors[ name ]?.message;

    return (
        <Box width="full" css={{ textOverflow: "ellipsis" }}>
            {/* @ts-ignore */}
            <Text variant="bodyMedium" color="error" {...props} ref={ref}>
                {errorMessage}
            </Text>
        </Box>
    );
} );
