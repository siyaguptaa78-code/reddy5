import React from 'react';
import styles from './page.module.css';

export default function Home() {
  const WHATSAPP_LINK = "https://wa.me/916026703858";

  return (
    <div className={styles.main}>
      {/* HERO SECTION */}
      <section id="hero" className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <h1 className={styles.heading}>Reddy Anna – Get your official Reddy Anna ID</h1>
            <p className={styles.text} style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
              Get your official cricket betting ID at India’s best betting ID provider since 2010. With easy payment options, special bonuses, and 24×7 customer support, you can get activated for betting in just 60 seconds.
            </p>
            
            <div className={styles.ctaContainer}>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
                👉 Get Reddy Anna ID Here 👈
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
                👉 Get Online Betting ID 👈
              </a>
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statValue}>50000+</div>
                <div className={styles.statLabel}>Active Users</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statValue}>200+</div>
                <div className={styles.statLabel}>Offline Branches</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statValue}>60 Sec</div>
                <div className={styles.statLabel}>ID Activation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ONLINE BOOK EXCHANGE LOBBIES */}
      <section id="lobbies" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.subheading}>Online Book Exchange Lobbies</h2>
          <p className={styles.textCenter}>Click on any of the banners below to get instant access to the lobbies and play with India’s best book ID.</p>
          
          <h3 className={styles.subheading} style={{ marginTop: '3rem', fontSize: '1.8rem' }}>Slot & Casino Lobbies</h3>
          <div className={styles.grid4}>
            {[
              { icon: '🎰', title: 'SLOT GAMES' },
              { icon: '🃏', title: 'ROYAL GAMING' },
              { icon: '🎡', title: 'LOBBY WINFINITY' },
              { icon: '👸', title: 'LOBBY VIVO' },
              { icon: '🦈', title: 'FISHING GAMES' },
              { icon: '🏰', title: 'KINGMIDAS LOBBY' },
              { icon: '👘', title: 'LOBBY ASIA GAMES' },
              { icon: '💎', title: 'LOBBY AURA' }
            ].map((item, i) => (
              <a href={WHATSAPP_LINK} key={i} className={styles.lobbyCard} style={{textDecoration: 'none'}}>
                <div className={styles.lobbyIcon}>{item.icon}</div>
                <h4 className={styles.lobbyTitle} style={{color: '#fff'}}>{item.title}</h4>
                <div className={styles.lobbyBtn}>Join Lobby ➜</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SPORTS BETTING MARKETS */}
      <section id="sports" className={styles.section} style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className={styles.container}>
          <h2 className={styles.subheading}>Sports Betting Markets</h2>
          <div className={styles.grid4}>
            {[
              { icon: '🎾', title: 'TENNIS' },
              { icon: '🏐', title: 'VOLLEYBALL' },
              { icon: '🏀', title: 'BASKETBALL' },
              { icon: '🎮', title: 'E SPORTS' },
              { icon: '🏆', title: 'WINNER CUP' },
              { icon: '🗳️', title: 'ELECTION' },
              { icon: '🏏', title: 'CRICKET' },
              { icon: '⚽', title: 'FOOTBALL' }
            ].map((item, i) => (
              <a href={WHATSAPP_LINK} key={i} className={styles.lobbyCard} style={{textDecoration: 'none'}}>
                <div className={styles.lobbyIcon}>{item.icon}</div>
                <h4 className={styles.lobbyTitle} style={{color: '#fff'}}>{item.title}</h4>
                <div className={styles.lobbyBtn}>{item.title === 'ELECTION' ? 'View Promo ➜' : 'Place Bets ➜'}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CRASH & FUN GAMES */}
      <section id="games" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.subheading}>Crash & Fun Games</h2>
          <div className={styles.grid4}>
            {[
              { icon: '💣', title: 'Mines', desc: 'Minesweeper Cash' },
              { icon: '🎲', title: 'Color Prediction', desc: '1 Min Color Forecast' },
              { icon: '✈️', title: 'Aviator', desc: 'Crash Plane Multiplier' },
              { icon: '🎯', title: 'Fun Games', desc: 'Instant Quick Games' }
            ].map((item, i) => (
              <a href={WHATSAPP_LINK} key={i} className={styles.lobbyCard} style={{textDecoration: 'none'}}>
                <div className={styles.lobbyIcon}>{item.icon}</div>
                <h4 className={styles.lobbyTitle} style={{color: '#fff', marginBottom: '0.5rem'}}>{item.title}</h4>
                <p style={{color: '#ccc', marginBottom: '1.5rem', fontSize: '0.9rem'}}>{item.desc}</p>
                <div className={styles.lobbyBtn}>Play Now ➜</div>
              </a>
            ))}
          </div>
          
          <div className={styles.waBanner}>
            <h3>💬 Join Any Game Lobby with WhatsApp 💬</h3>
            <p style={{color: '#eee', marginBottom: '1.5rem'}}>Get instant access and play your favorite games safely.</p>
            <a href={WHATSAPP_LINK} className={styles.waBtn}>Message on WhatsApp</a>
          </div>
        </div>
      </section>

      {/* BOOK ID PROVIDER WEBSITE */}
      <section id="about" className={styles.section} style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className={styles.container}>
          <div className={styles.grid3} style={{ gridTemplateColumns: '1fr', maxWidth: '800px', margin: '0 auto' }}>
            <div className={styles.glassCard}>
              <h2 className={styles.subheading} style={{ textAlign: 'left' }}>Book ID Provider Website</h2>
              <p className={styles.text}>
                Reddy Anna Book is one of India’s most trusted online betting and gaming sites that offer customers a smooth and secure betting experience. By getting your book ID from the official source, you can access the most trustworthy online sports betting portal and play live during the IPL and other matches.
              </p>
              <p className={styles.text}>
                With instant ID creation, easy login, and 24×7 WhatsApp support, the book ID provider website makes it super easy to download the app, get the ID on WhatsApp, and start betting on your favorite sports and games. With instant withdrawals to your UPI or NetBanking account, betting on live sports matches becomes more seamless.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2rem' }}>
                <a href={WHATSAPP_LINK} className={styles.secondaryBtn}>📲 Download Reddy Anna App</a>
                <a href={WHATSAPP_LINK} className={styles.secondaryBtn}>💬 Get ID on WhatsApp</a>
                <a href={WHATSAPP_LINK} className={styles.secondaryBtn}>📞 Contact Reddy Anna Support</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS REDDY ANNA ID */}
      <section id="why-us" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid3}>
            <div className={styles.glassCard}>
              <h2 className={styles.subheading} style={{ textAlign: 'left' }}>What is Reddy Anna ID?</h2>
              <p className={styles.text}>Your Reddy Anna ID is your personal key to the entire universe of games.</p>
              <p className={styles.text}>With just one verified ID, you can:</p>
              <ul className={styles.checkList}>
                <li>Bet on live sports – cricket, football, kabaddi, tennis, and many more</li>
                <li>Play live casino games – Teen Patti, Poker, Roulette, and more</li>
                <li>Access your betting dashboard to view your bets, deposits, and withdrawals.</li>
                <li>Withdraw cash straight to your UPI/NetBanking account instantly.</li>
                <li>Get special cashbacks on your Reddy Anna ID.</li>
              </ul>
              <p className={styles.text} style={{ marginTop: '1.5rem' }}>Every Reddy Anna ID has features such as OTP and KYC to keep your data and deposits safe and secure.</p>
            </div>
            
            <div className={styles.glassCard}>
              <h2 className={styles.subheading} style={{ textAlign: 'left' }}>Why choose Reddy Anna?</h2>
              <p className={styles.text}>Choose India’s most trusted online betting platform and get a variety of benefits such as:</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1.5rem' }}>
                <div>
                  <h4 style={{ color: '#f8b500', marginBottom: '0.3rem' }}>✅ Reputed Brand</h4>
                  <p style={{ color: '#ccc', fontSize: '0.9rem' }}>With more than a decade in the online betting domain, you can completely rely on us to keep your money and data safe.</p>
                </div>
                <div>
                  <h4 style={{ color: '#f8b500', marginBottom: '0.3rem' }}>⚡ Instant Reddy Anna ID</h4>
                  <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Create and start betting in just a few minutes after registering on the portal.</p>
                </div>
                <div>
                  <h4 style={{ color: '#f8b500', marginBottom: '0.3rem' }}>💸 Instant Withdrawals</h4>
                  <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Withdraw cash from your Reddy Anna wallet to your UPI or NetBanking account the same day with no extra charges.</p>
                </div>
                <div>
                  <h4 style={{ color: '#f8b500', marginBottom: '0.3rem' }}>🎯 Wide Betting Markets</h4>
                  <p style={{ color: '#ccc', fontSize: '0.9rem' }}>Get access to betting on your favorite sports – cricket, football, kabaddi, tennis, and more.</p>
                </div>
                <div>
                  <h4 style={{ color: '#f8b500', marginBottom: '0.3rem' }}>🔒 100% Safe & Secure</h4>
                  <p style={{ color: '#ccc', fontSize: '0.9rem' }}>All financial transactions on the portal are encrypted with the best encryption technology.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO GET STARTED */}
      <section id="register" className={styles.section} style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className={styles.container}>
          <h2 className={styles.subheading}>Get Your Reddy Anna ID Instantly</h2>
          <p className={styles.textCenter} style={{ marginBottom: '3rem' }}>Reddy Anna ID – How to Get Yours in 60 Seconds</p>
          
          <div className={styles.grid4}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <h3 style={{ color: '#f8b500', marginBottom: '1rem', fontSize: '1.3rem' }}>Visit the Official Website</h3>
              <p style={{ color: '#ccc', fontSize: '0.95rem' }}>To get your Reddy Anna ID, you must first visit the official website at https://reddysports.co/ The URL may change, so you must ensure you are accessing the right domain.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h3 style={{ color: '#f8b500', marginBottom: '1rem', fontSize: '1.3rem' }}>Click "Get New ID"</h3>
              <p style={{ color: '#ccc', fontSize: '0.95rem' }}>On the portal’s homepage, you will see a CTA button that says "Get New ID." Click on it to register and get your Reddy Anna ID.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h3 style={{ color: '#f8b500', marginBottom: '1rem', fontSize: '1.3rem' }}>Provide WhatsApp Number</h3>
              <p style={{ color: '#ccc', fontSize: '0.95rem' }}>The next step is to provide your WhatsApp number. You will get your Reddy Anna ID, temporary password, and some special bonus code on your WhatsApp.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>4</div>
              <h3 style={{ color: '#f8b500', marginBottom: '1rem', fontSize: '1.3rem' }}>Get Your ID on WhatsApp</h3>
              <p style={{ color: '#ccc', fontSize: '0.95rem' }}>You will get your Reddy Anna ID, temporary password, and some special bonus code within 60 seconds of submitting your WhatsApp number.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WITHDRAWALS & TABLES */}
      <section id="withdrawals" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.subheading}>Reddy Anna – Withdrawal Process – Fast, Transparent, and Guaranteed</h2>
          <p className={styles.textCenter} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
            The most common question any bettor would ask is whether they can withdraw their earnings. On Reddy Anna, all withdrawals are fast, transparent, and guaranteed. You can trust the portal to deliver your cash without a hassle.
          </p>

          <div className={styles.grid3}>
            <div className={styles.glassCard}>
              <h3 style={{ color: '#f8b500', marginBottom: '1rem' }}>UPI Withdrawals (GPay, PhonePe, Paytm)</h3>
              <p style={{ color: '#ccc' }}>UPI withdrawals are the fastest way to transfer money from your Reddy Anna wallet to your UPI address. The money is transferred instantly or within 30 minutes.</p>
            </div>
            <div className={styles.glassCard}>
              <h3 style={{ color: '#f8b500', marginBottom: '1rem' }}>Bank Transfer (NEFT/IMPS)</h3>
              <p style={{ color: '#ccc' }}>If you wish to withdraw cash via bank transfer, you can initiate the withdrawal request through the NEFT/IMPS method. The withdrawal is processed within 1-2 hours.</p>
            </div>
            <div className={styles.glassCard}>
              <h3 style={{ color: '#f8b500', marginBottom: '1rem' }}>Crypto Withdrawals (USDT, Bitcoin)</h3>
              <p style={{ color: '#ccc' }}>Crypto withdrawals are the fastest on the portal, with withdrawals being processed within 5-15 minutes. Perfect for members who prefer crypto.</p>
            </div>
          </div>

          <h3 className={styles.subheading} style={{ marginTop: '4rem', fontSize: '1.8rem' }}>UPI Withdrawals – Verified Records</h3>
          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Member Name</th>
                  <th>Withdrawal Method</th>
                  <th>Amount</th>
                  <th>Withdrawal Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Rajesh Sharma</td>
                  <td>UPI</td>
                  <td>₹1,85,000</td>
                  <td>22 Minutes</td>
                </tr>
                <tr>
                  <td>Priya Singh</td>
                  <td>Paytm</td>
                  <td>₹45,000</td>
                  <td>11 Minutes</td>
                </tr>
                <tr>
                  <td>Suresh Patel</td>
                  <td>Bank Transfer</td>
                  <td>₹2,50,000</td>
                  <td>18 Minutes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BONUSES */}
      <section id="bonuses" className={styles.section} style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className={styles.container}>
          <h2 className={styles.subheading}>Reddy Anna Bonuses – Complete Breakdown</h2>
          
          <div className={styles.grid3} style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className={styles.glassCard}>
              <h3 style={{ color: '#f8b500', marginBottom: '1rem', fontSize: '1.5rem' }}>CODE: REDDY500 - 500% Welcome Bonus</h3>
              <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>CODE: REDDY500 is one of the best welcome bonus codes in the Indian online cricket betting scene. Enjoy a 500% welcome bonus on your first deposit. Simply deposit ₹500 to ₹50,000 and enjoy extra betting power.</p>
              
              <div className={styles.tableContainer} style={{ marginTop: '0' }}>
                <table className={styles.table}>
                  <thead>
                    <tr>
                      <th>Deposit Amount</th>
                      <th>Welcome Bonus</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>₹500</td><td>₹3,000</td></tr>
                    <tr><td>₹1,000</td><td>₹6,000</td></tr>
                    <tr><td>₹5,000</td><td>₹30,000</td></tr>
                    <tr><td>₹10,000</td><td>₹60,000</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className={styles.glassCard}>
                <h3 style={{ color: '#f8b500', marginBottom: '1rem', fontSize: '1.5rem' }}>DAILY CASHBACK – 15%</h3>
                <p style={{ color: '#ccc' }}>Every day at midnight, we release a 15% cashback on the net loss made by the members on the previous day. The cashback is directly added to your Reddy Anna wallet without the need to claim or enter any promo codes.</p>
              </div>

              <div className={styles.glassCard}>
                <h3 style={{ color: '#f8b500', marginBottom: '1rem', fontSize: '1.5rem' }}>NO LIMIT ₹1,500 REFERRAL BONUS</h3>
                <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>Refer friends to join Reddy Anna using your referral link and earn a ₹1,500 bonus for every friend who deposits ₹500 or more. Share your referral link and start earning!</p>
                <div className={styles.tableContainer} style={{ marginTop: '0' }}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>Number of Referrals</th>
                        <th>Bonus Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr><td>5</td><td>₹7,500</td></tr>
                      <tr><td>20</td><td>₹30,000</td></tr>
                      <tr><td>50</td><td>₹75,000</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section id="comparison" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.subheading}>Reddy Anna vs Others</h2>
          <p className={styles.textCenter} style={{ maxWidth: '800px', margin: '0 auto 3rem' }}>
            The Indian online betting space is highly competitive. While there are several credible sites, the following comparison highlights why Reddy Anna is the best online betting portal in India.
          </p>

          <div className={styles.tableContainer}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Reddy Anna</th>
                  <th>Typical Competitors</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Years in Operation</td>
                  <td style={{ color: '#10b981', fontWeight: 'bold' }}>Since 2010 (13+ yrs)</td>
                  <td>Under 2 years (most)</td>
                </tr>
                <tr>
                  <td>ID Activation Time</td>
                  <td style={{ color: '#10b981', fontWeight: 'bold' }}>60 Seconds</td>
                  <td>2 to 24 Hours</td>
                </tr>
                <tr>
                  <td>Minimum Deposit</td>
                  <td style={{ color: '#10b981', fontWeight: 'bold' }}>₹100</td>
                  <td>₹500 to ₹1,000</td>
                </tr>
                <tr>
                  <td>UPI Withdrawal Speed</td>
                  <td style={{ color: '#10b981', fontWeight: 'bold' }}>Within 30 Minutes</td>
                  <td>6 to 48 Hours</td>
                </tr>
                <tr>
                  <td>Welcome Bonus</td>
                  <td style={{ color: '#10b981', fontWeight: 'bold' }}>500% up to ₹50,000</td>
                  <td>100% to 200%</td>
                </tr>
                <tr>
                  <td>Daily Cashback</td>
                  <td style={{ color: '#10b981', fontWeight: 'bold' }}>15%</td>
                  <td>0% to 5%</td>
                </tr>
                <tr>
                  <td>Support Availability</td>
                  <td style={{ color: '#10b981', fontWeight: 'bold' }}>24/7 WhatsApp</td>
                  <td>Business Hours Only</td>
                </tr>
                <tr>
                  <td>User Rating</td>
                  <td style={{ color: '#10b981', fontWeight: 'bold' }}>4.9 / 5</td>
                  <td>3.5 to 4.2 / 5</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BLOGS SECTION */}
      <section id="blogs" className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.subheading}>Latest Blogs & News</h2>
          <div className={styles.grid3} style={{ gridTemplateColumns: '1fr', maxWidth: '800px', margin: '0 auto' }}>
            <div className={styles.glassCard} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <h3 style={{ color: '#f8b500', fontSize: '1.8rem', marginBottom: '0.5rem', textAlign: 'left' }}>
                Big Bash League 2026-27: BBL & WBBL Schedule, Teams, Dates & All You Need To Know
              </h3>
              <p style={{ color: '#ccc', fontSize: '1rem', lineHeight: '1.6' }}>
                Two leagues, one brand and an Australian summer built around them. The Women's Big Bash League (WBBL) gets the 2026-27 season underway on 29 October, with the men's BBL|16 starting in mid-December and finishing on or around 31 January 2027. The Perth Scorchers are the defending men's champions for the record sixth time, while the Hobart Hurricanes have lifted the inaugural WBBL title last season.
              </p>
              <div style={{ marginTop: '1rem' }}>
                <a href="/big-bash-league-2026-27/" className={styles.secondaryBtn} style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                  Show More ➔
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ & REVIEWS */}
      <section id="faqs" className={styles.section} style={{ background: 'rgba(255,255,255,0.02)' }}>
        <div className={styles.container}>
          <div className={styles.grid3} style={{ gridTemplateColumns: '1fr' }}>
            <div className={styles.glassCard} style={{ textAlign: 'center' }}>
              <h2 className={styles.subheading} style={{ marginBottom: '1rem' }}>Frequently Asked Questions</h2>
              <p className={styles.text}>Reddy Anna is India’s most trusted online cricket betting ID platform that has been operating since 2010. It offers members the best in instant cricket betting ID activation, live sports betting markets, and instant withdrawals.</p>
            </div>
          </div>

          <h2 className={styles.subheading} style={{ marginTop: '5rem' }}>What Our Members Say About Reddy Anna</h2>
          <div className={styles.grid3}>
            <div className={styles.reviewCard}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.reviewText}>"I have been using Reddy Anna for three IPL seasons, and the withdrawals are super fast; I have never had to wait for more than 20 minutes for the UPI withdrawal to reflect in my account. I referred it to four of my friends, and they all had a great experience. This is the only online portal I use for sports betting now."</p>
              <p className={styles.reviewAuthor}>— Vikram Mehta, Hyderabad</p>
            </div>
            <div className={styles.reviewCard}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.reviewText}>"I was a bit hesitant to deposit any money on any online sports betting portal after being scammed by a Telegram operator. One of my friends suggested I try Reddy Anna, and I deposited ₹100 and placed a few bets on CSK matches. I won ₹3,400 and got the cash within 15 minutes in my Paytm wallet."</p>
              <p className={styles.reviewAuthor}>— Sneha Iyer, Chennai</p>
            </div>
            <div className={styles.reviewCard}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.reviewText}>"The minimum deposit of ₹100 got me addicted to the portal; I was not willing to deposit ₹1,000 on a new platform. I am now a regular member after three months and have withdrawn more than ₹40,000 in total with no issues. The live markets during the IPL are fantastic."</p>
              <p className={styles.reviewAuthor}>— Arjun Kapoor, Jaipur</p>
            </div>
            <div className={styles.reviewCard}>
              <div className={styles.stars}>★★★★★</div>
              <p className={styles.reviewText}>"I had a few questions about the live login registration, but the support team was patient enough to answer all my questions via WhatsApp. My Reddy Anna ID was ready within a minute, and the entire process was much faster than any other portal I have used. It made other platforms look ridiculous in comparison."</p>
              <p className={styles.reviewAuthor}>— Ravi Verma, Pune</p>
            </div>
          </div>
        </div>
      </section>

      {/* RESPONSIBLE GAMING & FOOTER */}
      <section className={styles.section} style={{ paddingBottom: '0', borderBottom: 'none' }}>
        <div className={styles.container}>
          <div className={styles.glassCard} style={{ borderLeft: '4px solid #ef4444', marginBottom: '4rem' }}>
            <h2 className={styles.subheading} style={{ color: '#ef4444', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span>⚠️</span> Responsible Gaming – Read Before You Start
            </h2>
            <p className={styles.text}>Reddy Anna is an entertainment platform, and as such, all betting activity involves real money. As a responsible gaming platform, we encourage all our members to only deposit an amount they are willing to part with and have fun doing so. We also advise our members never to chase losses by depositing more significant amounts as a result of a loss.</p>
            <p className={styles.text}>Before you start betting on Reddy Anna, keep the following responsible gaming guidelines in mind:</p>
            <ul className={styles.checkList} style={{ margin: '1.5rem 0' }}>
              <li style={{ color: '#ef4444' }}><span style={{ color: '#ef4444' }}>•</span> Only deposit an amount you are willing to part with and have fun doing so.</li>
              <li style={{ color: '#ef4444' }}><span style={{ color: '#ef4444' }}>•</span> Set a deposit limit and never exceed it.</li>
              <li style={{ color: '#ef4444' }}><span style={{ color: '#ef4444' }}>•</span> Avoid chasing losses by depositing larger amounts as a result of a loss.</li>
              <li style={{ color: '#ef4444' }}><span style={{ color: '#ef4444' }}>•</span> Always take breaks between betting sessions, especially when playing live betting.</li>
            </ul>
            <p className={styles.text}>If you feel that betting is becoming too stressful or you are unable to stop, it is best to take a break and seek help.</p>
            <p className={styles.text} style={{ fontStyle: 'italic', color: '#a3a3a3' }}>This portal is intended for users 18 years or older. As such, we encourage you to only use this portal if you are 18 years or older. Users below the age of 18 are advised to seek parental guidance before using any online portal.</p>
          </div>
        </div>

        <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footerGrid}>
              <div>
                <h3 style={{ fontSize: '2rem', fontWeight: '900', letterSpacing: '2px', color: '#ffffff', marginBottom: '0.5rem' }}>REDDY <span style={{ color: '#f8b500' }}>ANNA</span></h3>
                <p style={{ color: '#888', fontSize: '0.9rem', lineHeight: '1.6', marginTop: '1rem' }}>Experience secure online gaming, fast cricket betting IDs, instant deposits, quick withdrawals, and premium customer support with a trusted gaming platform designed for Indian users since 2010.</p>
              </div>
              <div className={styles.footerLinks}>
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href={WHATSAPP_LINK}>Contact Support</a></li>
                </ul>
              </div>
              <div className={styles.footerLinks}>
                <h4>Legal</h4>
                <ul>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms & Conditions</a></li>
                  <li><a href="#">Responsible Gaming</a></li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#f8b500', marginBottom: '1.5rem' }}>Get Started</h4>
                <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '1rem' }}>Message us on WhatsApp to get your official betting ID instantly.</p>
                <a href={WHATSAPP_LINK} className={styles.secondaryBtn} style={{ padding: '0.5rem 1.5rem', fontSize: '1rem' }}>Contact on WhatsApp</a>
              </div>
            </div>
            
            <div className={styles.copyright}>
              <p style={{ marginBottom: '0.5rem' }}>All users must be 18 years or older to access gaming services. Please play responsibly and follow your local laws before using online gaming platforms.</p>
              <p>© 2026 Reddy Anna Network. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}
