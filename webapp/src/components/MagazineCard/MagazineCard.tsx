import { FC } from "react";
import { Magazine } from "@/types/api";
import { Flex, Text } from "@/components";
import { styled } from "@/styles";
import { useNavigate } from "react-router-dom";

const MagTitleContainer = styled(Flex, {
    position: "absolute",
    width: "$full",
    height: "$full",
    backgroundColor: "rgba(0,0,0,.5)",
    opacity: 0,
    transition: "all 0.7s ease-in-out",
});

const MagContainer = styled(Flex, {
    position: "relative",
    borderRadius: "20px",
    overflow: "clip",
    "&:hover": {
        transform: "scale(1.05)",
        "@bp1": {
            [`& ${MagTitleContainer}`]: {
                opacity: 1,
            },
        },
    },

    transition: "all 0.7s ease-in-out",
});

export type MagazineCardProps = {
    mag: Magazine;
};

export const MagazineCard: FC<MagazineCardProps> = ({ mag }) => {
    const { image, title, _id } = mag;
    const navigate = useNavigate();
    return (
        <MagContainer
            css={{
                "@mbp1": {
                    flexDirection: "column",
                    alignItems: "center ",
                },
            }}
            center
            onClick={() => navigate(`${_id}`, { state: { data: mag } })}
        >
            <img src={image} width="100%" />
            <MagTitleContainer center>
                <Text color="base" textAlign="center" variant="heading5">
                    {title}
                </Text>
            </MagTitleContainer>
            <Text
                css={{
                    display: "none",
                    "@mbp1": {
                        display: "block",
                    },
                }}
                color="secondary"
                textAlign="center"
                variant="heading5"
            >
                {title}
            </Text>
        </MagContainer>
    );
};
