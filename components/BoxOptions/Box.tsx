"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import styles from "./BoxOptions.module.css";

const flavors = [
  { id: 1, name: "Box of 3", desc: "Perfect for a small treat!", image: "/boxes/box3.jpeg" },
  { id: 2, name: "Box of 6", desc: "Great for sharing or indulging!", image: "/boxes/box6.jpg" },
  { id: 3, name: "Box of 9", desc: "More brownies, more happiness!", image: "/boxes/box9.1.jpeg" },
  { id: 4, name: "Custom Slab", desc: "Personalized brownie goodness!", image: "/boxes/custom.jpeg" },
];

export default function BoxSection() {
  return (
    <section className={styles.flavorsContainer}>
      <h2 className={styles.heading}>
      Brownie Box  
      </h2>

      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        pagination={{ clickable: true, }}
       
        loop={true}
        className={styles.flavorsSwiper}
      >
        {flavors.reduce<(typeof flavors)[]>((acc, _, i, arr) => {
                if (i % 2 === 0) acc.push(arr.slice(i, i + 2));
                return acc;
                }, []).map((pair, index) => (
        <SwiperSlide key={index} className={styles.slide}>
            {pair.map((flavor) => (
            <div key={flavor.id} className={styles.flavorCard}>

                        <Image
                        src={flavor.image}
                        alt={flavor.name}
                        width={100}
                        height={100}
                        className={styles.flavorImage}
                        />
                        <div>

                        <h3 className={styles.flavorName}>{flavor.name}</h3>
                        <p className={styles.flavorDesc}>{flavor.desc}</p>
                        </div>
                    </div>
                    ))}

          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
