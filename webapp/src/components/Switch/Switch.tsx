import * as SwitchPrimitive from "@radix-ui/react-switch";
import { VariantProps } from "@stitches/react";
import { forwardRef } from "react";
import { PropsWithCSS, styled } from "../../styles";

const StyledSwitch = styled( SwitchPrimitive.Root, {
    all: "unset",
    aspectRatio:1.68/1,
    backgroundColor: "$neutralASolid",
    borderRadius: "$pill",
    position: "relative",
    boxShadow: `$1`,
    "&:hover": { boxShadow: "$2" },
    variants: {
        color: {
            primary: { '&[data-state="checked"]': { backgroundColor: "$primaryASolid" } },
            secondary: { '&[data-state="checked"]': { backgroundColor: "$secondaryASolid" } },
            info: { '&[data-state="checked"]': { backgroundColor: "$infoASolid" } },
            warning: { '&[data-state="checked"]': { backgroundColor: "$warningASolid" } },
            error: { '&[data-state="checked"]': { backgroundColor: "$errorASolid" } },
            success: { '&[data-state="checked"]': { backgroundColor: "$successASolid" } },
            neutral: { '&[data-state="checked"]': { backgroundColor: "$neutralASolid" } },
        },
        size:{
            1:{ width:"$10" },2:{ width:"$11" },3:{ width:"$12" },4:{ width:"$13" },5:{ width:"$14" },
        }
    },
    defaultVariants: {
        color: "primary",
        size:"1"
    },
} );

const StyledThumb = styled( SwitchPrimitive.Thumb, {
    display: "block",
    width: "50%",
    marginLeft:"3%",
    aspectRatio:1/1,
    backgroundColor: "white",
    borderRadius: "$pill",
    boxShadow: "$2",
    transform: "translateY(2%)",
    transition: "transform 100ms",
    willChange: "transform",
    '&[data-state="checked"]': { transform: "translateX(90%)" },
} );

// Exports
export const SwitchMain = StyledSwitch;
export const SwitchThumb = StyledThumb;
export type SwitchProps = SwitchPrimitive.SwitchProps & SwitchPrimitive.SwitchThumbProps & PropsWithCSS & VariantProps<typeof SwitchMain>

// Your app...

export const Switch =forwardRef<HTMLButtonElement, SwitchProps>( ( { ...props },ref ) => (
    <SwitchMain {...props} ref={ref}>
        <SwitchThumb />
    </SwitchMain>
) )