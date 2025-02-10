"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-fade";
import styles from "./FlavorsSection.module.css";

const flavors = [
  { id: 1, name: "Lindt Fudgey Choco", desc: "Made with rich Lindt dark chocolate.", image: "/flavors/fudge.jpg" },
  { id: 2, name: "Pistachio Knafeh", desc: "Espresso-infused with a creamy swirl.", image: "/flavors/kunafa.webp" },
  { id: 3, name: "Lindt Tiramisu", desc: "A Middle Eastern twist with crispy kunafa.", image: "/flavors/tiramisu.jpg" },
  { id: 4, name: "Lindt Bueno", desc: "Caramelized crunch in every bite.", image: "/flavors/bueno.jpeg" },
  { id: 5, name: "Brookie", desc: "Hazelnut-chocolate goodness.", image: "/flavors/brookie.jpg" },
  { id: 6, name: "Lindt Oreo", desc: "A sweet-tart fusion.", image: "/flavors/oreo.jpg" },
  { id: 7, name: "Lindt Lotus Biscoff", desc: "A perfect balance of sweet & salty.", image: "/flavors/lotus.jpg" },
  { id: 8, name: "Red Velvet Cheesecake", desc: "A perfect balance of sweet & salty.", image: "/flavors/red.webp" },
  { id: 9, name: "Snickers", desc: "A perfect balance of sweet & salty.", image: "/flavors/snickers.jpg" },
  {id: 10, name: "Rocky Road", image:'/flavors/rocky.webp'}

];

export default function FlavorsSection() {
  return (
    <section className={styles.flavorsContainer}>
      <h2 className={styles.heading}>
        Brownie Flavors  
        <span className={styles.lindtBadge}>Made with Lindt Chocolate</span>
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
                    
                        </div>
                    </div>
                    ))}

          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
