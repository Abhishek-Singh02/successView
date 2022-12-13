import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { forwardRef, PropsWithChildren } from "react";
import { PropsWithCSS, styled } from "../../styles";

const StyledRoot = styled( AvatarPrimitive.Root, {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    verticalAlign: "middle",
    overflow: "hidden",
    userSelect: "none",
    width: 45,
    height: 45,
    borderRadius: "$round",
    backgroundColor: "$appTextContrast"
} );

const StyledImage = styled( AvatarPrimitive.Image, {
    width: "$full",
    height: "$full",
    objectFit: "cover",
    borderRadius: "inherit"
} );

const StyledFallback = styled( AvatarPrimitive.Fallback, {
    width: "$full",
    height: "$full",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "$appBorder",
    color: "$appPrimary",
    typography: "$heading4",
    textTransform: "uppercase"
} );

export const AvatarRoot = StyledRoot;
export const AvatarImage = StyledImage;
export const AvatarFallback = StyledFallback;

export type AvatarProps = Pick<
    AvatarPrimitive.AvatarImageProps,
    "src" | "alt" | "onLoadingStatusChange"
> &
    Pick<AvatarPrimitive.AvatarFallbackProps, "delayMs"> &
    PropsWithChildren &
    PropsWithCSS;

export const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
    ( { delayMs, onLoadingStatusChange, children, src, alt, ...props }, ref ) => {
        return (
            <AvatarRoot {...props} ref={ref}>
                <AvatarImage
                    src={src}
                    alt={alt}
                    onLoadingStatusChange={onLoadingStatusChange}
                />
                <AvatarFallback delayMs={delayMs}>{children}</AvatarFallback>
            </AvatarRoot>
        );
    }
);
