"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import WhatsAppButton from "./WhatsAppButton";
import { SITE_CONFIG } from "@/config/constants";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoReddy}>
            {SITE_CONFIG.brand.logoText1}
          </span>
          <span className={styles.logoAnna}>{SITE_CONFIG.brand.logoText2}</span>
          <div className={styles.logoSub}>{SITE_CONFIG.brand.logoSub}</div>
        </Link>

        {/* Desktop Menu */}
        <nav className={styles.desktopNav}>
          <Link href="/#hero">🏠 Home</Link>
          <Link href="/#lobbies">🎰 Lobbies</Link>
          <Link href="/#sports">🏏 Sports</Link>
          <Link
            href="https://www.Gabbar247.vip"
            target="_blank"
            rel="noopener noreferrer"
          >
            ⚡ Register
          </Link>
          <Link href="/#bonuses">🎁 Bonuses</Link>
          <Link href="/#blogs">📝 Blogs</Link>
        </nav>

        <div className={styles.navActions}>
          <a
            href="https://www.Gabbar247.vip"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-outline ${styles.desktopBtn}`}
          >
            Sign Up
          </a>
          <a
            href="https://www.Gabbar247.vip"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-primary ${styles.desktopBtn}`}
          >
            Login
          </a>

          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          <Link href="/#hero" onClick={() => setMobileMenuOpen(false)}>
            🏠 Home
          </Link>
          <Link href="/#lobbies" onClick={() => setMobileMenuOpen(false)}>
            🎰 Lobbies
          </Link>
          <Link href="/#sports" onClick={() => setMobileMenuOpen(false)}>
            🏏 Sports
          </Link>
          <Link
            href="https://www.Gabbar247.vip"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
          >
            ⚡ Register
          </Link>
          <Link href="/#bonuses" onClick={() => setMobileMenuOpen(false)}>
            🎁 Bonuses
          </Link>
          <Link href="/#blogs" onClick={() => setMobileMenuOpen(false)}>
            📝 Blogs
          </Link>
          <div className={styles.mobileActions}>
            <a
              href="https://www.Gabbar247.vip"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Sign Up
            </a>
            <a
              href="https://www.Gabbar247.vip"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Login
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
