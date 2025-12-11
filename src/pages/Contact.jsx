import React from 'react';
import styles from './Contact.module.css';
import SEO from '../components/SEO';

const Contact = () => {
    return (
        <div className={styles.container}>
            <SEO
                title="Book a Demo"
                description="Schedule a free automation audit to see how Artificialyze can scale your business."
            />

            <div className={styles.header}>
                <h1>Let's Automate Your Business</h1>
                <p className={styles.intro}>
                    Ready to reclaim your time? Book a free 30-minute automation audit with our engineering team.
                </p>

                <div className={styles.steps}>
                    <div className={styles.step}>
                        <span className={styles.stepNum}>1</span>
                        <p>We analyze your current workflow.</p>
                    </div>
                    <div className={styles.step}>
                        <span className={styles.stepNum}>2</span>
                        <p>We identify the biggest bottlenecks.</p>
                    </div>
                    <div className={styles.step}>
                        <span className={styles.stepNum}>3</span>
                        <p>You get a custom automation roadmap.</p>
                    </div>
                </div>
            </div>

            <div className={styles.calendarSection}>
                <div className={styles.calendarFrame}>
                    <iframe
                        src="https://cal.id/saikat/business-automation-audit"
                        className={styles.calendarEmbed}
                        frameBorder="0"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;
