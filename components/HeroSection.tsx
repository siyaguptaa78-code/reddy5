import WhatsAppButton from "./WhatsAppButton";
import styles from "./HeroSection.module.css";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.heroBg}>
        <Image 
          src="/hero_bg.png" 
          alt="Reddy Anna Stadium Background" 
          fill 
          priority
          className={styles.bgImage}
        />
        <div className={styles.overlay}></div>
      </div>
      
      <div className={`container ${styles.content}`}>
        <div className={styles.badge}>🏏 INDIA'S #1 OFFICIAL BETTING PLATFORM</div>
        
        <h1 className={`${styles.title} animate-fade-in`}>
          <span>Reddy Anna</span> – Get Your Official Reddy Anna ID Instantly
        </h1>
        
        <p className={`${styles.subtitle} animate-fade-in animate-delay-1`}>
          Join India’s leading cricket betting ID platform since 2010. Enjoy instant access, safe payments, special bonuses & 24/7 support.
        </p>
        
        <div className={`${styles.ctaGroup} animate-fade-in animate-delay-2`}>
          <WhatsAppButton className={styles.mainCta}>
            👉 Get Reddy Anna ID Here 👈
          </WhatsAppButton>
          <WhatsAppButton variant="outline" className={styles.secondaryCta}>
            👉 Get Online Betting ID 👈
          </WhatsAppButton>
        </div>
        
        <div className={`${styles.stats} animate-fade-in animate-delay-3`}>
          <div className={styles.statItem}>
            <h3>50,000+</h3>
            <p>Active Users</p>
          </div>
          <div className={styles.statItem}>
            <h3>200+</h3>
            <p>Offline Branches</p>
          </div>
          <div className={styles.statItem}>
            <h3>60 Sec</h3>
            <p>ID Activation</p>
          </div>
        </div>
      </div>
    </section>
  );
}
