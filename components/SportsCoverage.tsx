import styles from "./SportsCoverage.module.css";
import { SITE_CONFIG } from "@/config/constants";

export default function SportsCoverage() {
  return (
    <section className={`section-padding ${styles.section}`} id="sports">
      <div className="container">
        <h2 className="section-title text-center">
          Full Sports and Games Coverage at <span>{SITE_CONFIG.brand.name}</span>
        </h2>
        <p className={`text-center ${styles.subtitle}`}>
          Cricket is the heart of the operation, but the offering extends well beyond it.
        </p>

        <div className={styles.grid}>
          {/* Cricket */}
          <div className={styles.card}>
            <div className={styles.icon}>ðŸ</div>
            <h3>Cricket Gaming</h3>
            <ul className={styles.list}>
              <li>International Test matches and ODIs</li>
              <li>ICC tournaments (T20 World Cup)</li>
              <li>Ranji Trophy, Vijay Hazare, Syed Mushtaq Ali</li>
              <li>Bilateral T20 series involving India</li>
            </ul>
          </div>

          {/* Football */}
          <div className={styles.card}>
            <div className={styles.icon}>âš½</div>
            <h3>Football Gaming</h3>
            <ul className={styles.list}>
              <li>English Premier League</li>
              <li>La Liga & UEFA Champions League</li>
              <li>FIFA World Cup Qualifiers</li>
              <li>Indian Super League</li>
            </ul>
          </div>

          {/* Other Sports */}
          <div className={styles.card}>
            <div className={styles.icon}>ðŸŽ¯</div>
            <h3>Other Sports</h3>
            <ul className={styles.list}>
              <li>Tennis â€“ Grand Slams, ATP, WTA</li>
              <li>Kabaddi â€“ Pro Kabaddi League</li>
              <li>Horse Racing â€“ Mumbai, Pune, Bengaluru</li>
            </ul>
          </div>

          {/* Casino */}
          <div className={styles.card}>
            <div className={styles.icon}>ðŸŽ°</div>
            <h3>Live Casino</h3>
            <ul className={styles.list}>
              <li>Teen Patti â€“ Live dealers</li>
              <li>Andar Bahar â€“ Fast card game</li>
              <li>Roulette & Blackjack</li>
              <li>Baccarat â€“ High roller game</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
