import { Flex } from "../Flex";
import { styled } from "../../styles";
import { ComponentProps, ElementRef, forwardRef, ReactNode } from "react";
import { Link, useMatch } from "react-router-dom";
import { Text } from "../Text";

export const BottomNavBar = styled( Flex, {
    width: "$full",
    borderTop: "1px solid transparent",
    borderImage: "$appBottomBarTopBorderGradient 1",
    backgroundColor: "$appBase",
    position: "fixed",
    paddingBottom: "$5",
    bottom: 0,
    left: 0,
    right: 0
} );

export const StyledNavLink = styled( Link, {
    color: "$neutralText",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexDirection: "column",
    flex: 1,
    pt: "$5",
    textDecoration: "none",

    borderTop: "1px solid transparent",

    "&[data-active=true]": {
        color: "$neutralTextContrast",
        borderColor: "$neutralTextContrast",

        [ `& ${Text}` ]: {
            color: "$neutralTextContrast"
        }
    }
} );

export interface BottomNavLinkProps extends ComponentProps<typeof Link> {
    icon: ReactNode;
    label: string;
}

export const BottomNavLink = forwardRef<ElementRef<"a">, BottomNavLinkProps>(
    ( { label, icon, ...props }, ref ) => {
        const match = useMatch( props.to as string );

        return (
            <StyledNavLink data-active={!!match} {...props} ref={ref}>
                {icon}
                <Text variant="captionSmall" css={{ pt: "$4" }}>
                    {label}
                </Text>
            </StyledNavLink>
        );
    }
);
