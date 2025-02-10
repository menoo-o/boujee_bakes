"use client";

import Image from "next/image";
import styles from "./LookingFor.module.css";

const options = [
  { id: 1, title: "Personalize", desc: "Customize your brownies with messages and designs!", image: "/lookingfor/personalize.jpg" },
  { id: 2, title: "Best Sellers", desc: "Our most loved and top-rated brownies!", image: "/lookingfor/bestsellers.jpg" },
  { id: 3, title: "Events", desc: "Perfect treats for weddings, parties, and corporate events!", image: "/lookingfor/events.jpg" },
];

export default function LookingFor() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>What Are You Looking For?</h2>
      <div className={styles.grid}>
        {options.map((item) => (
          <div key={item.id} className={styles.card}>
            <Image src={item.image} alt={item.title} width={400} height={250} className={styles.image} />
            <div className={styles.overlay}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.desc}>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
