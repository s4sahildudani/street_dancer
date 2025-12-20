import React from 'react';
import styles from './DanceStylesNew.module.css';

const StyleCard = ({ name, tag, image, isPopular }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.image} />

      <div className={styles.gradient}></div>

      <div className={styles.info}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.tag}>{tag}</p>
      </div>

      {isPopular && (
        <div className={styles.popular}>Popular Choice</div>
      )}
    </div>
  );
};

const StylesGrid = () => {
  const stylesData = [
    {
      name: 'Hip Hop',
      tag: 'High energy street',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzoX_aiRzi_Yd_wbX2ETPdq7nitdlBxxzPc0jA5SQ-Jj7kAE4iwQHAmqJku3X9o9zzHe5Slu2YiKVJjfJ8Cx-q4Rj9kv5QvFgqkuTZ4Odj2WM5fB-KqStJEoaqv-tX5ivFhfftb2hoHwZ2syFRFYDZo4Bo7eH5eTevFXHRFTc4UpZGnJ4SgirhnrwDpNIKezuNx5Cjh32zAYqQXX3B4oXVz_pRyqCRzHv64BR-LWBd1hBOI7i0pnL6bGN9euQiE2cIxymk3BSTaaH1',
      isPopular: true
    },
    {
      name: 'Contemporary',
      tag: 'Expressive modern',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiQfOnvpugo6Fe6O0MCAbiQrjPjl7_sycreSZmz9B1gKiZQbuVeIkKlqxgE5Pwtnw9l1gGTEmQpkDp3nVjq92m8naC1TPWn0_9_V9JNJdzGWthwgvlg4ygPSdX4dRAS9yZLL7OnnTs3RjAPR6nrs_PzcjMMuHWqEclzBrIvzxPj6Ql50-Oak7j0FQV3emQTIIFfN-d5dRGCQmO9uNP1rZgx4ulGst0rAKDR_Ex28LwePJVthqJ7BDGoE5rPsQKRmZ02ITU5YmpPBl_'
    },
    {
      name: 'Ballet',
      tag: 'Classic technique',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClPjaj5AQbUkzlrFQJOVkJp2zstnagbd4TlEa1-uCH3s21L4AAiqDCGtBXfs8_BJIq-drmpmOiz-RgFjmb6xcTyopQAdLR4M_qRRyislIM3XFDLrRV01Xq4xxfi8SSafChLzCj-sy5ANyvrZX5fG2N-xu5qIQT_jBC3jHpHx6LP5xJlMhS8v608rlAOL37He2QkpCnQpEuYBPJmN0vMElfjeByZels_44FGbN5-1MXJK4gjLSoG5CEJKotcsNSv7sxsNrO-gdUTHux'
    },
    {
      name: 'Salsa',
      tag: 'Rhythmic latin',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBE1lAIiR2WNFLmGN-yN5SlqukoelSLWktxuOVFsDxAsaivlxskPBkf4OlTgdK9cxEFUUKdtdim3UauA70l99mR0-cioAWXFB-Sfz3ANW3Xl7GWVr3OtZdhhqqyrMZxmlYTWbspBIY2xW0UKgAJM0ZhlXIwNZ1v4HVfW3-ncPBWQdW9se8BNoEhDr9jo8pOWbigm_i32gd2pSRb-n562aPvfqY46Ur-y7-5CdvuxrRq5xPSo7okDX6Jcxi6V3MFf0RCQoLqzfa0kybr'
    }
  ];

  return (
    <section className={styles.section} id="classes">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.textBlock}>
            <h2 className={styles.title}>
              Explore 
              <span className={styles.outline}>  Styles</span>
            </h2>
            <p className={styles.desc}>
              Discover your passion among our diverse range of dance styles suitable for all skill levels.
            </p>
          </div>

          <a href="#" className={styles.cta}>
            View All <span className="material-symbols-outlined"></span>
          </a>
        </div>

        <div className={styles.grid}>
          {stylesData.map((style) => (
            <StyleCard key={style.name} {...style} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StylesGrid;
