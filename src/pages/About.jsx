import React from 'react';
import { content } from '../data/content';
import styles from './About.module.css';
import SEO from '../components/SEO';

const About = () => {
    return (
        <div className={styles.container}>
            <SEO
                title="About Us"
                description="We build time machines for home service businesses. Learn about Artificialyze's mission."
            />
            <div className={styles.hero}>
                <h1 className={styles.title}>We Build Time Machines</h1>
                <p className={styles.subtitle}>{content.brand.mission}</p>
            </div>

            <div className={styles.content}>
                <section className={styles.section}>
                    <h2>Our Story</h2>
                    <p>{content.about.story}</p>
                    <p>
                        We realized that for most home service businesses, the bottleneck isn't the work itself—it's the
                        "work about the work." The scheduling, the quoting, the chasing payments.
                    </p>
                    <p>
                        Artificialyze was built to simply make that disappear. We don't just sell software; we sell
                        freedom from admin.
                    </p>
                </section>

                <section className={styles.statsSection}>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>500+</span>
                        <span className={styles.statLabel}>Businesses Automated</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>1M+</span>
                        <span className={styles.statLabel}>Leads Processed</span>
                    </div>
                    <div className={styles.stat}>
                        <span className={styles.statNumber}>24/7</span>
                        <span className={styles.statLabel}>System Uptime</span>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default About;
