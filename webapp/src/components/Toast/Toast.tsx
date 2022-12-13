import * as ToastPrimitive from "@radix-ui/react-toast";
import { ComponentProps } from "@stitches/react";
import { createContext, FC, useCallback, useContext, useState } from "react";
import { AliasSolid, keyframes, styled } from "../../styles";
import { Button } from "../Button";

const slideOut = keyframes( {
    from: { transform: "translateX(0)" },
    to: { transform: `translateX(calc(100% + $space$8))` },
} );

const slideIn = keyframes( {
    from: { transform: `translateX(calc(100% + $space$8))` },
    to: { transform: "translateX(0)" },
} );

const swipeOut = keyframes( {
    from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
    to: { transform: `translateX(calc(100% + $space$8))` },
} );

const StyledViewport = styled( ToastPrimitive.Viewport, {
    position: "fixed",
    bottom: 0,
    left: "50%",
    transform: "translate(-50%)",
    display: "flex",
    flexDirection: "column",
    padding: "calc($14 + $8) $8",
    gap: 10,
    width: 390,
    maxWidth: "100vw",
    margin: 0,
    listStyle: "none",
    zIndex: 999999,
    outline: "none",
} );

const StyledTitle = styled( ToastPrimitive.Title, {
    gridArea: "title",
    typography: "$labelMedium",
} );

const StyledDescription = styled( ToastPrimitive.Description, {
    gridArea: "description",
    color: "$neutralText",
    typography: "$labelSmall",
} );

const StyledAction = styled( ToastPrimitive.Action, {
    gridArea: "action",
} );

const StyledClose = styled( ToastPrimitive.Close, {
    position: "absolute",
    top: "$3",
    right: "$3",
} );

const createToastColorVariant = ( color: AliasSolid ) => ( {
    backgroundColor: `$${color}Base`,
    border: `1px solid $${color}Border`,
    [ `& ${StyledDescription}` ]: {
        color: `$${color}TextContrast`,
    },
    [ `& ${StyledTitle}` ]: {
        color: `$${color}Text`,
    },
    "&:focus, &:hover, &:focus-within": {
        borderColor: `$${color}BorderHover`,
    },
} )

const StyledToast = styled( ToastPrimitive.Root, {
    all: "unset",
    boxSizing: "border-box",
    position: "relative",

    borderRadius: 6,
    boxShadow: "$4",
    padding: "$5 $7",
    display: "grid",
    gridTemplateAreas: '"title action" "description action"',
    gridTemplateColumns: "auto max-content",
    columnGap: 15,
    rowGap: "$3",
    alignItems: "center",

    opacity: 0.9,
    backdropFilter: "blur(2px)",
    "&:focus, &:hover, &:focus-within": {
        opacity: 1,
    },

    "@media (prefers-reduced-motion: no-preference)": {
        '&[data-state="open"]': {
            animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
        },
        '&[data-state="closed"]': {
            animation: `${slideOut} 100ms ease-in`,
        },
        '&[data-swipe="move"]': {
            transform: "translateX(var(--radix-toast-swipe-move-x))",
        },
        '&[data-swipe="cancel"]': {
            transform: "translateX(0)",
            transition: "transform 200ms ease-out",
        },
        '&[data-swipe="end"]': {
            animation: `${swipeOut} 100ms ease-out`,
        },
    },

    variants: {
        color: {
            neutral: createToastColorVariant( "neutral" ),
            primary: createToastColorVariant( "primary" ),
            secondary: createToastColorVariant( "secondary" ),
            success: createToastColorVariant( "success" ),
            error: createToastColorVariant( "error" ),
            info: createToastColorVariant( "info" ),
            warning: createToastColorVariant( "warning" ),
        },
    },

    defaultVariants: {
        color: "neutral",
    },
} );

export const ToastViewport = StyledViewport;
export const ToastRoot = StyledToast;
export const ToastTitle = StyledTitle;
export const ToastDescription = StyledDescription;
export const ToastAction = StyledAction;
export const ToastClose = StyledClose;

interface ToastProps {
    id: string;
    title: string;
    color?: AliasSolid;
    description?: string;
    action?: {
        title: string;
        execute: () => void;
        color?: AliasSolid;
    };
    duration?: number;
}

export const Toast: FC<ToastProps & ComponentProps<typeof ToastRoot>> = ( {
    title,
    action,
    color,
    description,
    duration,
    ...props
} ) => {
    return (
        <ToastRoot {...props} duration={duration} color={color}>
            <ToastTitle>{title}</ToastTitle>
            <ToastDescription>{description}</ToastDescription>
            {action ? (
                <ToastAction asChild altText={action.title}>
                    <Button color={action.color ?? color} onClick={action.execute}>
                        {action.title}
                    </Button>
                </ToastAction>
            ) : null}
        </ToastRoot>
    );
};

interface ToastContext {
    toasts: ToastProps[];
    show: ( toast: Omit<ToastProps, 'id'> & { id?: string } ) => void;
    close: ( id: string ) => void;
    closeAll: () => void;
}

const ToastContext = createContext<ToastContext>( null! );

export const ToastProvider: FC<
    ToastPrimitive.ToastProviderProps
> = ( { children, ...props } ) => {
    const [ toasts, setToasts ] = useState<ToastProps[]>( [] );

    const show = useCallback(
        ( toast: Omit<ToastProps, "id"> & { id?: string } ) => {
            toast.id = toast.id ?? Math.random().toString( 36 );
            setToasts( ( toasts ) => [ toast as ToastProps, ...toasts ] );
        },
        [ setToasts ]
    );

    const close = useCallback(
        ( id: string ) => {
            setToasts( ( toasts ) => {
                const toastIdx = toasts.findIndex( ( toast ) => toast.id === id );

                if ( toastIdx !== -1 ) {
                    toasts.splice( toastIdx, 1 );

                    return toasts.slice();
                }

                return toasts;
            } );
        },
        [ setToasts ]
    );

    const closeAll = useCallback( () => {
        return setToasts( () => [] );
    }, [ setToasts ] );

    const onToastClose = useCallback( ( id: string ) => ( open: boolean ) => {
        if ( !open ) {
            close( id )
        }
    }, [ close ] )

    return (
        <ToastContext.Provider value={{ show, close, closeAll, toasts }}>
            <ToastPrimitive.Provider {...props}>
                {children}
                {toasts.map( ( props ) => (
                    <Toast onOpenChange={onToastClose( props.id )} key={props.id} {...props} />
                ) )}
                <ToastViewport />
            </ToastPrimitive.Provider>
        </ToastContext.Provider>
    );
};

export const useToastShow = () => useContext( ToastContext ).show
export const useToastClose = () => useContext( ToastContext ).close
export const useToastCloseAll = () => useContext( ToastContext ).closeAll