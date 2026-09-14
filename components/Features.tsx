import WhatsAppButton from "./WhatsAppButton";
import styles from "./Features.module.css";

const featuresData = [
  {
    title: "Established Reputation",
    description: "Backed by over 10 years of excellence in the gaming industry.",
    icon: "âœ…"
  },
  {
    title: "Instant Reddy Anna ID",
    description: "Register and start gaming in under 2 minutes.",
    icon: "âš¡"
  },
  {
    title: "Fast Withdrawals",
    description: "Same-day UPI and wallet transfers with no hidden fees.",
    icon: "ðŸ’¸"
  },
  {
    title: "Wide Gaming Coverage",
    description: "Cricket, football, kabaddi, tennis, esports, and live casinos.",
    icon: "ðŸŽ¯"
  },
  {
    title: "100% Secure Platform",
    description: "SSL encryption, OTP verification, and full KYC compliance.",
    icon: "ðŸ”’"
  },
  {
    title: "Mobile-Friendly Access",
    description: "Play on the go with the Reddy Anna App.",
    icon: "ðŸ“±"
  },
  {
    title: "Exciting Bonuses",
    description: "Welcome offers, cashback rewards, and festival promotions.",
    icon: "ðŸŽ"
  },
  {
    title: "24/7 Support",
    description: "Reach us anytime via WhatsApp, Telegram, or live chat.",
    icon: "ðŸ¤"
  },
  {
    title: "Responsible Gaming",
    description: "Tools for setting limits, self-exclusion, and safe gaming practices.",
    icon: "ðŸ§ "
  }
];

export default function Features() {
  return (
    <section className={`section-padding ${styles.featuresSection}`} id="services">
      <div className="container">
        <h2 className="section-title text-center">
          Why Choose <span>Reddy Anna</span>
        </h2>
        <p className={`text-center ${styles.subtitle}`}>
          Experience the premium difference with India's most trusted online gaming platform.
        </p>

        <div className={styles.grid}>
          {featuresData.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <WhatsAppButton className={styles.largeCta}>
            Get Your Reddy Anna ID Instantly
          </WhatsAppButton>
        </div>
      </div>
    </section>
  );
}
