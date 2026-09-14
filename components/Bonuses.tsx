import styles from "./Bonuses.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function Bonuses() {
  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className="section-title text-center">
          <span>{SITE_CONFIG.brand.name}</span> Bonuses â€“ Complete Breakdown
        </h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.badge}>CODE: REDDY500</div>
            <h3>500% Welcome Bonus</h3>
            <p>The highest welcome bonus in the Indian cricket gaming space. Deposit up to â‚¹50,000.</p>
            <ul className={styles.list}>
              <li>Deposit â‚¹500 â†’ Play with â‚¹3,000</li>
              <li>Deposit â‚¹1,000 â†’ Play with â‚¹6,000</li>
              <li>Deposit â‚¹5,000 â†’ Play with â‚¹30,000</li>
              <li>Deposit â‚¹10,000 â†’ Play with â‚¹60,000</li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.badge}>DAILY</div>
            <h3>15% Daily Cashback</h3>
            <p>Every day at midnight, 15% of your net losses from the previous day is automatically credited back to your account.</p>
            <ul className={styles.list}>
              <li>No claim required</li>
              <li>No promo code needed</li>
              <li>Calculated automatically</li>
            </ul>
          </div>

          <div className={styles.card}>
            <div className={styles.badge}>NO LIMIT</div>
            <h3>â‚¹1,500 Referral Bonus</h3>
            <p>Share your referral link. When friends join and deposit â‚¹500 or more, you receive â‚¹1,500 instantly.</p>
            <ul className={styles.list}>
              <li>5 referrals = â‚¹7,500</li>
              <li>20 referrals = â‚¹30,000</li>
              <li>50 referrals = â‚¹75,000</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
