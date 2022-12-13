import * as SelectPrimitive from "@radix-ui/react-select";
import { VariantProps } from "@stitches/react";
import { IconChevronDown, IconCircle } from "@tabler/icons";
import { ElementRef, FC, forwardRef, PropsWithChildren } from "react";
import { PropsWithCSS, styled } from "../../styles";
import { Flex } from "../Flex";
import { Label } from "../Label";

const StyledTrigger = styled( SelectPrimitive.SelectTrigger, {
    all: "unset",
    boxSizing: "border-box",
    display: "inline-flex",
    justifyContent: "space-between",
    alignItems: "center",
    appearance: "none",
    typography: "$captionMedium",
    margin: 0,
    outline: "none",
    padding: "6px",
    paddingLeft: "$5",
    width: "$full",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    border: "1px solid $appBorder",
    color: "$appBorder",
    "@hover": {
        "&:hover": {
            borderColor: "$appBase"
        }
    },
    "&:focus": {
        borderColor: "$appBase"
    },
    "&:disabled": {
        borderColor: "$appText",
        color: "$appText",
        "&::placeholder": {
            color: "$appTextContrast"
        }
    },

    variants: {
        state: {
            invalid: {
                boxShadow: "inset 0 0 0 1px $appError",
                "&:focus": {
                    boxShadow:
                        "inset 0px 0px 0px 1px $appError, 0px 0px 0px 1px $appError"
                }
            },
            valid: {
                boxShadow: "inset 0 0 0 1px $appSuccess",
                "&:focus": {
                    boxShadow:
                        "inset 0px 0px 0px 1px $appSuccess, 0px 0px 0px 1px $appSuccess"
                }
            }
        },
        cursor: {
            default: {
                cursor: "default",
                "&:focus": {
                    cursor: "text"
                }
            },
            text: {
                cursor: "text"
            }
        }
    }
} );

const StyledContent = styled( SelectPrimitive.Content, {
    borderRadius: "$1",
    backgroundColor: "$appTextContrast",
    overflow: "hidden",
    boxShadow:
        "0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)"
} );

const StyledViewport = styled( SelectPrimitive.Viewport, {
    display: "flex",
    flexDirection: "column"
} );

const StyledItem = styled( SelectPrimitive.Item, {
    all: "unset",

    alignItems: "center",
    display: "flex",
    position: "relative",
    userSelect: "none",
    padding: "$5",
    color: "$appBase",
    border: "1px solid transparent",

    "&[data-disabled]": {
        color: "$appText",
        pointerEvents: "none"
    },

    "&:focus, &:hover": {
        backgroundColor: "$appText",
        color: "$appBase"
    }
} );

const StyledLabel = styled( SelectPrimitive.Label, Label );

const StyledSeparator = styled( SelectPrimitive.Separator, {
    backgroundColor: "$appText",
    height: "$1"
} );

const StyledItemIndicator = styled( SelectPrimitive.ItemIndicator, {
    display: "none"
} );

const scrollButtonStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "1.5625rem",
    backgroundColor: "$secondaryBg",
    color: "$secondaryText",
    cursor: "default"
};

const StyledScrollUpButton = styled(
    SelectPrimitive.ScrollUpButton,
    scrollButtonStyles
);

const StyledScrollDownButton = styled(
    SelectPrimitive.ScrollDownButton,
    scrollButtonStyles
);

const SelectRoot = SelectPrimitive.Root;
const SelectPortal = SelectPrimitive.Portal;
const SelectTrigger = StyledTrigger;
const SelectValue = SelectPrimitive.Value;
const SelectIcon = SelectPrimitive.Icon;
const SelectContent = StyledContent;
const SelectViewport = StyledViewport;
const SelectGroup = SelectPrimitive.Group;
const SelectItem = StyledItem;
const SelectItemText = SelectPrimitive.ItemText;
const SelectItemIndicator = StyledItemIndicator;
const SelectLabel = StyledLabel;
const SelectSeparator = StyledSeparator;
const SelectScrollUpButton = StyledScrollUpButton;
const SelectScrollDownButton = StyledScrollDownButton;

export {
    SelectRoot,
    SelectPortal,
    SelectTrigger,
    SelectValue,
    SelectIcon,
    SelectContent,
    SelectViewport,
    SelectGroup,
    SelectItem,
    SelectItemText,
    SelectItemIndicator,
    SelectLabel,
    SelectSeparator,
    SelectScrollUpButton,
    SelectScrollDownButton
};

export type SelectProps = SelectPrimitive.SelectProps &
    SelectPrimitive.SelectTriggerProps &
    VariantProps<typeof StyledTrigger> &
    PropsWithCSS;

export const Select = forwardRef<HTMLButtonElement, SelectProps>(
    (
        {
            autoComplete,
            defaultOpen,
            defaultValue,
            dir,
            name,
            onOpenChange,
            onValueChange,
            open,
            value,
            cursor,
            state,
            children,
            placeholder,
            ...props
        },
        ref
    ) => {
        return (
            <SelectRoot
                autoComplete={autoComplete}
                defaultOpen={defaultOpen}
                defaultValue={defaultValue}
                dir={dir}
                name={name}
                onOpenChange={onOpenChange}
                onValueChange={onValueChange}
                open={open}
                value={value}
            >
                <SelectTrigger
                    cursor={cursor}
                    state={state}
                    {...props}
                    ref={ref}
                >
                    <SelectValue placeholder={placeholder} />
                    <SelectIcon asChild>
                        <Flex>
                            <IconChevronDown />
                        </Flex>
                    </SelectIcon>
                </SelectTrigger>
                <SelectPortal>
                    <SelectContent>
                        <SelectScrollUpButton />
                        <SelectViewport>{children}</SelectViewport>
                        <SelectScrollDownButton />
                    </SelectContent>
                </SelectPortal>
            </SelectRoot>
        );
    }
);

export type SelectOptionProps = PropsWithCSS &
    PropsWithChildren<{}> &
    SelectPrimitive.SelectItemProps & {
        selected?: boolean;
    };

export const SelectOption: FC<PropsWithChildren<SelectOptionProps>> =
    forwardRef<ElementRef<"div">, SelectOptionProps>(
        ( { selected, children, ...props }, ref ) => {
            return (
                <SelectItem {...props} ref={ref}>
                    <SelectItemIndicator>
                        <IconCircle size={12} />
                    </SelectItemIndicator>
                    <SelectItemText>{children ?? props.value}</SelectItemText>
                </SelectItem>
            );
        }
    );
