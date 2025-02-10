"use client";

import Image from "next/image";
import styles from "./WhyChoose.module.css";

export default function WhyChoose() {
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Why Choose <span className="brand">BOUJEE BROWNIES?</span></h2>
      {/* <div className={styles.imageWrapper}>
        <Image
          src="/whychoose.jpg"
          alt="Delicious Boujee Brownies"
          width={400}
          height={300}
          className={styles.image}
        />
      </div> */}
      <p className={styles.description}>
        Meet the internet&#39;s favourite brownies. They&#39;re <strong>100% natural</strong> and baked in small batches using 
        <strong> 70% Lindt chocolate</strong>. <span className={styles.lindt}>Lindt</span> is Swiss high-quality chocolate 
        with a high cocoa percentage, making our brownies <strong>moister, fudgier, and rich in cocoa</strong>.
      </p>
    </section>
  );
}
