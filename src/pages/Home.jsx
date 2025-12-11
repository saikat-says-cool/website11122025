import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, BatteryWarning, TrendingUp } from 'lucide-react';
import Card from '../components/UI/Card';
import { content } from '../data/content';
import styles from './Home.module.css';
import SEO from '../components/SEO';

const Home = () => {
    const { hero, painPoints, products, positioning } = content;
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={styles.container}>
            <SEO
                title="Home Service Automation"
                description="Artificialyze automates your home service business with AI-powered lead capture, scheduling, and billing."
            />
            {/* Hero Section */}
            <section className={styles.hero}>
                <div
                    className={styles.heroContent}
                    style={{
                        transform: `translateY(${scrollY * 0.2}px)`,
                        opacity: 1 - scrollY / 800
                    }}
                >
                    <div className={styles.badge}>AI Systems for Home Service Teams</div>
                    <h1 className={styles.headline}>
                        {hero.headline.split('. ')[0]}.<br />
                        <span className={styles.gradientText}>{hero.headline.split('. ')[1]}</span>
                    </h1>
                    <p className={styles.subheadline}>{hero.subheadline}</p>
                    <div className={styles.ctaGroup}>
                        <Link to="/book" className={styles.primaryButton}>
                            {hero.ctaPrimary} <ArrowRight size={18} />
                        </Link>
                        <Link to="/products" className={styles.secondaryButton}>
                            {hero.ctaSecondary}
                        </Link>
                    </div>
                </div>
                <div
                    className={styles.heroBackground}
                    style={{
                        transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0002})`
                    }}
                >
                    {/* Abstract glowing orb or grid could go here */}
                    <div className={styles.glowOrb}></div>
                </div>
            </section>

            {/* Pain Points */}
            <section
                className={styles.section}
                style={{
                    transform: `translateY(${Math.max(0, (scrollY - 700) * 0.08)}px)`,
                    opacity: Math.min(1, Math.max(0, (scrollY - 400) / 300))
                }}
            >
                <div className={styles.sectionHeader}>
                    <h2>Why Artificialyze?</h2>
                    <p>Stop doing manual work. Start scaling.</p>
                </div>
                <div className={styles.grid}>
                    {painPoints.map((point, index) => (
                        <Card key={index} title={point.title}>
                            <p>{point.description}</p>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Positioning Statements */}
            <section
                className={styles.positioningSection}
                style={{
                    transform: `translateY(${Math.max(0, (scrollY - 1200) * 0.1)}px)`
                }}
            >
                <div className={styles.positioningGrid}>
                    {positioning.map((item, index) => (
                        <div key={index} className={styles.positioningItem}>
                            <TrendingUp size={24} className={styles.icon} />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Product Suite Preview */}
            <section
                className={styles.section}
                style={{
                    transform: `translateY(${Math.max(0, (scrollY - 1800) * 0.06)}px)`
                }}
            >
                <div className={styles.sectionHeader}>
                    <h2>Our Automation Ecosystem</h2>
                    <p>Modular AI products designed for specific problems.</p>
                </div>
                <div className={styles.productGrid}>
                    {products.slice(0, 3).map((product, index) => (
                        <div
                            key={product.id}
                            style={{
                                transform: `translateY(${(scrollY - 2000) * (0.03 + index * 0.01)}px)`
                            }}
                        >
                            <Card title={product.name} className={styles.productCard}>
                                <p className={styles.productTagline}>{product.tagline}</p>
                                <p className={styles.productDesc}>{product.description.substring(0, 100)}...</p>
                                <Link to={`/products/${product.id}`} className={styles.learnMore}>
                                    Explore Module <ArrowRight size={16} />
                                </Link>
                            </Card>
                        </div>
                    ))}
                </div>
                <div className={styles.centerCta}>
                    <Link to="/products" className={styles.secondaryButton}>View All Products</Link>
                </div>
            </section>

            {/* Final CTA */}
            <section
                className={styles.ctaSection}
                style={{
                    transform: `translateY(${Math.max(0, (scrollY - 2800) * 0.09)}px)`,
                    opacity: Math.min(1, Math.max(0, (scrollY - 2600) / 400))
                }}
            >
                <div className={styles.ctaContent}>
                    <h2>Ready to Automate Your Business?</h2>
                    <p>Join the future of home services today.</p>
                    <Link to="/book" className={styles.primaryButton}>Book Your Audit Now</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
