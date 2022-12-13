import { Dialog, DialogProps, DialogRoot } from "./Dialog";
import { FC, PropsWithChildren, useCallback } from "react";
import { NavigateOptions, To, useNavigate } from "react-router-dom";

export interface DialogRouteProps extends DialogProps {
    onClose?:
        | string
        | number
        | ( () => string | void )
        | { to: To; options?: NavigateOptions };
}

export const DialogRoute: FC<PropsWithChildren<DialogRouteProps>> = ( {
    onClose,
    children,
    ...props
} ) => {
    const navigate = useNavigate();

    const handleOpenChange = useCallback(
        ( open: boolean ) => {
            if ( !open ) {
                if ( typeof onClose === "function" ) {
                    const ret = onClose();

                    if ( typeof ret === "string" || typeof ret === "number" ) {
                        return navigate( ret );
                    }
                }

                if ( typeof onClose === "string" ) {
                    return navigate( onClose );
                }

                if ( typeof onClose === "object" && onClose !== null ) {
                    return navigate( onClose.to, onClose.options );
                }

                navigate( -1 );
            }
        },
        [ onClose ]
    );

    return (
        <DialogRoot defaultOpen onOpenChange={handleOpenChange}>
            <Dialog {...props}>{children}</Dialog>
        </DialogRoot>
    );
};
