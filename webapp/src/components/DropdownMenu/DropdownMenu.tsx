import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { VariantProps } from "@stitches/react";
import { ElementRef, FC, forwardRef, PropsWithChildren } from "react";
import { PropsWithCSS, styled } from "../../styles";

const StyledContent = styled( DropdownMenuPrimitive.Content, {
    borderRadius: "$3",
    padding: "$4",
    typography: "$bodyMedium",
    variants: {
        color: {
            primary: { backgroundColor: "$appPrimary" },
            secondary: { backgroundColor: "$appSecondary" },
            info: { backgroundColor: "$appInfo" },
            warning: { backgroundColor: "$appWarning" },
            success: { backgroundColor: "$appSuccess" },
            error: { backgroundColor: "$appError" },
            base: { backgroundColor: "$appBase" },
            text: { backgroundColor: "$appText" },
            border: { backgroundColor: "$appBorder" },
            contrast: { backgroundColor: "$appTextContrast" }
        }
    },
    defaultVariants: {
        color: "base"
    }
} );

const StyledSeperator = styled( DropdownMenuPrimitive.Separator, {
    height: "0.5px",
    width: "75%",
    background: "$appBorder",
    margin: "3px auto",
    opacity: 0.8
} );

const StyledItem = styled( DropdownMenuPrimitive.Item, {
    display: "flex",
    cursor: "pointer",
    gap: "$4",
    alignItems: "center",
    "&:focus,&:hover": {
        outline: "none",
        color: "$appTextContrast"
    },
    "&:last-child": {
        borderBottom: "1px solid transparent",
        borderImage: "$appBottomBarTopBorderGradient 1"
    },
    variants: {
        color: {
            primary: { color: "$appPrimary" },
            secondary: { color: "$appSecondary" },
            info: { color: "$appInfo" },
            warning: { color: "$appWarning" },
            success: { color: "$appSuccess" },
            error: { color: "$appError" },
            base: { color: "$appBase" },
            text: { color: "$appText" },
            border: { color: "$appBorder" },
            contrast: { color: "$appTextContrast" }
        }
    },
    defaultVariants: {
        color: "text"
    }
} );

const StyledArrow = styled( DropdownMenuPrimitive.Arrow, {
    fill: "$appBorder"
} );

const StyledTrigger = styled( DropdownMenuPrimitive.Trigger, {
    all: "unset",
    background: "transparent",
    border: "none",
    cursor: "pointer",
    boxSizing: "border-box",
    display: "inline-flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 0,
    marginBottom: "$2",
    outline: "none",
    padding: 0,
    width: "100%",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    variants: {
        color: {
            primary: { color: "$appPrimary" },
            secondary: { color: "$appSecondary" },
            info: { color: "$appInfo" },
            warning: { color: "$appWarning" },
            success: { color: "$appSuccess" },
            error: { color: "$appError" },
            base: { color: "$appBase" },
            text: { color: "$appText" },
            border: { color: "$appBorder" },
            contrast: { color: "$appTextContrast" }
        }
    },
    defaultVariants: {
        color: "text"
    }
} );

export type DropdownMenuProps = DropdownMenuPrimitive.DropdownMenuProps;

export type DropdownMenuTriggerProps =
    DropdownMenuPrimitive.DropdownMenuTriggerProps &
        VariantProps<typeof StyledTrigger>;

export type DropdownMenuListProps =
    DropdownMenuPrimitive.DropdownMenuItemProps &
        PropsWithCSS &
        PropsWithChildren<{}> &
        VariantProps<typeof StyledItem>;

export type DropdownMenuContentProps =
    DropdownMenuPrimitive.DropdownMenuContentProps &
        VariantProps<typeof StyledContent> &
        PropsWithCSS;

export const DropdownMenuSeperator = StyledSeperator;

export const DropdownMenu: FC<DropdownMenuProps> = ( {
    open,
    onOpenChange,
    defaultOpen,
    dir,
    children
} ) => (
    <DropdownMenuPrimitive.Root
        dir={dir}
        onOpenChange={onOpenChange}
        defaultOpen={defaultOpen}
        open={open}
    >
        {children}
    </DropdownMenuPrimitive.Root>
);

export const DropdownMenuTrigger: FC<DropdownMenuTriggerProps> = ( {
    children,
    ...props
} ) => <StyledTrigger {...props}>{children}</StyledTrigger>;

export const DropdownMenuContent = forwardRef<
    HTMLDivElement,
    DropdownMenuContentProps
>( ( { children, ...props }, ref ) => (
    <StyledContent ref={ref} {...props}>
        {children}
    </StyledContent>
) );

export const DropdownMenuList: FC<PropsWithChildren<DropdownMenuListProps>> =
    forwardRef<ElementRef<"div">, DropdownMenuListProps>(
        ( { children, ...props }, ref ) => (
            <StyledItem {...props} ref={ref}>
                {children}
            </StyledItem>
        )
    );
