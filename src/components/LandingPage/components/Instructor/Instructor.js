import React from 'react';
import styles from './Instructor.module.css';

const InstructorCard = ({ name, role, bio, image }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} className={styles.image} />
        <div className={styles.overlay}>
          <span className={styles.bioBtn}>Full Bio</span>
        </div>
      </div>

      <h3 className={styles.name}>{name}</h3>
      <p className={styles.role}>{role}</p>
      <div className={styles.divider}></div>
      <p className={styles.bio}>{bio}</p>
    </div>
  );
};

const Instructors = () => {
  const instructors = [
    {
      name: "Sarah Jenkins",
      role: "Contemporary Lead",
      bio: "Former principal dancer at NYC Ballet with 15+ years of international teaching experience.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDr6p-_N7GhUeL2V7DEcOLoicmcvf8nUXcPb3sxiGhct67Ms9UzwyGQaJOQVAGjJPpo3Q48y6orWdT9y2S2hBcIsqMN28swmhYZy0VjSKl9ook17CJJBwZleJOPEbwDyH8Uw4rN17HAhWfZIfeso5Ia_P561a178ybwNV0yABNt6ob_TW-c_9K8TXUPzs8Br3tv1A66KgT6wCRZJ5ZmcVKyuzBjTRfgl6pjxX2jFYPWKf7i3BJqbznH3D8nED8UV42uypjxCWcThcFX"
    },
    {
      name: "Marcus Chen",
      role: "Hip Hop & Urban",
      bio: "Choreographer for global K-Pop groups and 3-time winner of World Hip Hop Dance Championships.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAS_hqFKD-9utb7XXmY7CVRETwgLAvtu7htpY7n_PRlDAh-c7cTvO7-gl1cVZtYAYB61uUnn3iXFUynviH4LWKj-KbyjM-OzAPj--u2g20fO_nnfUCnYvat6we0H8kYjBrinXCeYgZZn84hIKoApJjOsAAMPbypCP_Od4lJNbzMPcGDh_cAynXYFxhk3IQV06QJ10EHq9WptHqUPzV9Xje5geYQQXNF9y_2w4OkyogIucmP8Ru2esPNP02tr0JAJu5upIrArKjaZhC7"
    },
    {
      name: "Elena Rodriguez",
      role: "Latin & Salsa",
      bio: "World Salsa Champion 2019. Bringing authentic Cuban heat and rhythm to every online session.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzDfOUjokX_ggZ_FrFLRqsuPvlTlZto9artGdVM1WUbCariifnCKWUesushJybctipRFJTVKihG_6AkcVOE7lC4XrIYhZmPVM4cTybcTcFvtCmZwgiGBiCx_xPKb9dZ_yyvSfnEHcEfYtp0AJeGVu3_DHaqKgSQR7MM0Z3u7BhnIkNaf0QvUykrhOot-SfapBo8AiDCFrErsGb8zDHtqhs5-AM0zthOb7yoi2EQNhCfMPIFq57uahveAApiwg4ndrIXOKe5Le8St1a"
    },
    {
      name: "David King",
      role: "Street Jazz",
      bio: "Featured dancer on multiple world tours for Grammy-winning artists.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD8EXqFWukO_7SNVvzZmv1lp7A3IADOYEmd_ilG17EDJs_WqNrlnRUJmtheSvqnMY-FXpetecfSGbpSUo168w0k81OpP-gd955DjYMLY4Y0NHIQX1w2_zRsdD6G2Ep1UjB7EELRRY3jh6RIpMxKLJ1tzI_NewVrjfmqYuQ73eMurYq01jk6le7Ow_35t7kuvFuIEFxAcWlvB0HvAkuKiaUA3spdkdO9Yw2t9LgOdGrkMko8T0oxDKmG_eAiaiIwrzej7hHa-aSjRios"
    }
  ];

  return (
    <section className={styles.section} id="instructors">
      <div className={styles.topLine}></div>

      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.smallTitle}>World Class Talent</span>
          <h2 className={styles.title}>Learn from the Pros</h2>
          <div className={styles.underline}></div>
        </div>

        <div className={styles.grid}>
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.name} {...instructor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instructors;
