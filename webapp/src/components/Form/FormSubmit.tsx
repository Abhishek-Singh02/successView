import { forwardRef } from "react";
import { useFormState } from "react-hook-form";
import { Button, ButtonProps } from "../Button";

export const FormSubmit = forwardRef<
    HTMLButtonElement,
    Omit<ButtonProps, "type">
>( ( props, ref ) => {
    const { isValid, isSubmitting } = useFormState()

    return <Button disabled={!isValid || isSubmitting} {...props} type="submit" ref={ref} />;
} );
