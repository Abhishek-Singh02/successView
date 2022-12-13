import { VariantProps } from "@stitches/react";
import {
    ComponentProps,
    forwardRef,
    PropsWithChildren,
    useCallback,
    useEffect,
    useImperativeHandle
} from "react";
import {
    FieldValues,
    FormProvider,
    SubmitErrorHandler,
    SubmitHandler,
    useForm,
    useFormContext,
    UseFormHandleSubmit,
    UseFormProps,
    UseFormReturn,
    WatchObserver
} from "react-hook-form";
import { CSS, styled } from "../../styles";
import { Box } from "../Box";
import { Flex } from "../Flex";

const noop = () => void 0;

export const StyledForm = styled( "form", Box, Flex, {
    defaultVariants: {
        size: "full",
        gap: "4",
        direction: "column"
    }
} );

export interface FormRootProps<TFieldValues extends FieldValues>
    extends UseFormProps<TFieldValues> {
    onSubmit?: SubmitHandler<TFieldValues>;
    onSubmitError?: SubmitErrorHandler<TFieldValues>;
    onChange?: WatchObserver<TFieldValues>;
}

export const FormRoot = <TFieldValues extends FieldValues>( {
    children,
    onSubmit = noop,
    onSubmitError,
    onChange,
    ...props
}: PropsWithChildren<FormRootProps<TFieldValues>> ) => {
    const {
        handleSubmit: originalHandleSubmit = () => () => Promise.resolve(),
        ...methods
    } = useForm<TFieldValues>( props );

    const handleSubmit: UseFormHandleSubmit<TFieldValues> = useCallback( () => {
        return originalHandleSubmit( onSubmit, onSubmitError );
    }, [ onSubmit, onSubmitError, originalHandleSubmit ] );

    useEffect( () => {
        if ( typeof onChange === "function" ) {
            const subscription = methods.watch( onChange );

            return subscription.unsubscribe;
        }

        return () => void 0;
    }, [ methods, onChange ] );

    return (
        <FormProvider {...methods} handleSubmit={handleSubmit}>
            {children}
        </FormProvider>
    );
};

export type FormProps = PropsWithChildren &
    ComponentProps<typeof StyledForm> &
    VariantProps<typeof StyledForm> & {
        css?: CSS;
    };

export const Form = forwardRef<HTMLFormElement, FormProps>(
    ( { children, ...props }, ref ) => {
        const { handleSubmit } = useFormContext();

        return (
            <StyledForm ref={ref} {...props} onSubmit={handleSubmit( null! )}>
                {children}
            </StyledForm>
        );
    }
);

export const ExposeFormControl = forwardRef<UseFormReturn>( ( props, ref ) => {
    const context = useFormContext();

    useImperativeHandle( ref, () => context, [ context ] );

    return null;
} );
