'use client';

import React, { useState } from 'react';
import styles from './Pricing.module.css';

const Pricing = () => {
  const [billing, setBilling] = useState('monthly');

  const plans = [
    {
      name: 'Basic',
      tag: 'Entry Level',
      price: billing === 'monthly' ? '$19' : '$190',
      features: ['Beginner classes', 'HD Video Quality', 'Any device access'],
      isPopular: false
    },
    {
      name: 'Standard',
      tag: 'Most Popular',
      price: billing === 'monthly' ? '$39' : '$390',
      features: [
        'Unlimited class access',
        'Offline downloads',
        'Smart playlists',
        'Live feedback sessions'
      ],
      isPopular: true
    },
    {
      name: 'Premium',
      tag: 'Professional',
      price: billing === 'monthly' ? '$79' : '$790',
      features: [
        'All Standard features',
        '1-on-1 Personalized Coaching',
        'Certification programs',
        'Exclusive artist workshops'
      ],
      isPopular: false
    }
  ];

  return (
    <section className={styles.pricingSection} id="pricing">
      <div className={styles.glowBg}></div>

      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>Membership</h2>
            <p className={styles.subtitle}>Select your level of commitment</p>
          </div>

          <div className={styles.toggle}>
            <button
              onClick={() => setBilling('monthly')}
              className={`${styles.toggleBtn} ${
                billing === 'monthly' ? styles.active : ''
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`${styles.toggleBtn} ${
                billing === 'yearly' ? styles.active : ''
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className={styles.grid}>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`${styles.card} ${
                plan.isPopular ? styles.popular : ''
              }`}
            >
              {plan.isPopular && <div className={styles.star}>★</div>}

              <div className={styles.cardHeader}>
                <h3>{plan.name}</h3>
                <p>{plan.tag}</p>
              </div>

              <div className={styles.price}>
                <span className={styles.amount}>{plan.price}</span>
                <span className={styles.duration}>
                  {billing === 'monthly' ? '/mo' : '/yr'}
                </span>
              </div>

              <ul className={styles.features}>
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <span className={styles.dot}></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`${styles.selectBtn} ${
                  plan.isPopular ? styles.primary : ''
                }`}
              >
                Select Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
