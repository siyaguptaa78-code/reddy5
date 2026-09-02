"use client";
import { useState } from "react";
import styles from "./FAQSection.module.css";
import { SITE_CONFIG } from "@/config/constants";

const faqs = [
  {
    q: "What is Reddy Anna?",
    a: "Reddy Anna is the brand or website referenced on this domain. Check the site's current pages and terms for the latest information."
  },
  {
    q: "How does a Reddy Anna ID work?",
    a: "An account ID is generally used to identify a user account. Refer to Reddy Anna's current account instructions and terms for the exact process."
  },
  {
    q: "How can I access the Reddy Anna website?",
    a: "Use the site's current official URL and verify the domain before entering any account information. Follow the access instructions published on the site."
  },
  {
    q: "What sports are available on Reddy Anna?",
    a: "Available sports can change. Check the current sports or betting section on the website for the latest list and availability."
  },
  {
    q: "Does Reddy Anna provide live sports information?",
    a: "Check the site's current sports section for any live-event information and the terms that apply to its use."
  },
  {
    q: "How can I get help with my Reddy Anna account?",
    a: "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
  },
  {
    q: "What payment options are supported?",
    a: "Use the contact or support details published on the website. Avoid relying on unofficial accounts or third-party contacts."
  },
  {
    q: "How can I check Reddy Anna login information?",
    a: "Use the official domain and follow the current login or access instructions. If access fails, use the site's published support channel."
  },
  {
    q: "What should I do if I have a problem with my account?",
    a: "Refer to Reddy Anna's current website information and terms for the most accurate answer."
  },
  {
    q: "Where can I find the latest Reddy Anna updates?",
    a: "Refer to Reddy Anna's current website information and terms for the most accurate answer."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={`section-padding ${styles.section}`}>
      <div className="container">
        <h2 className="section-title text-center">
          Frequently Asked Questions
        </h2>
        
        <div className={styles.faqWrapper}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.active : ""}`}
            >
              <div 
                className={styles.faqQuestion} 
                onClick={() => toggleFaq(index)}
              >
                <h3>{faq.q}</h3>
                <span className={styles.icon}>{openIndex === index ? "−" : "+"}</span>
              </div>
              <div className={styles.faqAnswer}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
