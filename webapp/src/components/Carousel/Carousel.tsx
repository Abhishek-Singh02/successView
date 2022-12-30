import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "./styles.css";
import SwiperCore, { EffectCoverflow, Autoplay } from "swiper";
import { Text, Flex } from "@/components";
import { useGetMagazines } from "@/hooks";
import { useNavigate } from "react-router-dom";

SwiperCore.use([EffectCoverflow, Autoplay]);

export const Carousel = () => {
    const { data } = useGetMagazines();
    const navigate = useNavigate();
    return (
        <div className="container">
            <Flex width="full" center css={{ mb: "$6" }}>
                <Text variant="heading4">Latest Editions</Text>
            </Flex>
            <Swiper
                effect={"coverflow"}
                centeredSlides={true}
                slidesPerView={window.innerWidth < 768 ? 3 : 4}
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                className="mySwiper"
            >
                {data?.slice(5).map((mag) => (
                    <SwiperSlide
                        onClick={() =>
                            navigate(`${mag._id}`, { state: { data: mag } })
                        }
                    >
                        <Flex direction="column" center>
                            <img src={mag.image} />
                        </Flex>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
