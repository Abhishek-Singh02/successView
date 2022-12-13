import { ComponentProps } from "@stitches/react";
import { ElementRef, forwardRef, ReactNode } from "react";
import { styled } from "../../styles";
import { Flex } from "../Flex";

const StyledChip = styled( "div", {
    height: "$10",
    borderRadius: "$pill",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "$secondaryBorderHover",
    color: "$secondarySolidContrast",
} );

const StyledIconContainer = styled( "div", {
    size: "$10",
    borderRadius: "$round",
    background: "$secondarySolid",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "$secondarySolidContrast",
} );

export interface ChipProps extends ComponentProps<typeof StyledChip> {
    label?: ReactNode;
    icon?: ReactNode;
}

export const Chip = forwardRef<ElementRef<"div">, ChipProps>(
    ( { label, icon, ...props }, ref ) => {
        return (
            <StyledChip {...props} ref={ref}>
                <StyledIconContainer>{icon}</StyledIconContainer>
                <Flex css={{ flex: 1, px: "$4" }}>{label}</Flex>
            </StyledChip>
        );
    }
);
