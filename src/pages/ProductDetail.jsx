import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Star } from 'lucide-react';
import { content } from '../data/content';
import styles from './ProductDetail.module.css';
import SEO from '../components/SEO';

const ProductDetail = () => {
    const { id } = useParams();
    const product = content.products.find(p => p.id === id);

    if (!product) {
        return <Navigate to="/products" replace />;
    }

    return (
        <div className={styles.container}>
            <SEO
                title={product.name}
                description={product.description}
            />
            <div className={styles.heroBackground}>
                <div className={styles.glowOrb}></div>
            </div>

            <div className={styles.contentWrapper}>
                <Link to="/products" className={styles.backLink}>← Back to All Products</Link>

                <header className={styles.hero}>
                    <div className={styles.badge}>{product.tagline}</div>
                    <h1 className={styles.title}>{product.name}</h1>
                    <p className={styles.description}>{product.description}</p>
                    <Link to="/book" className={styles.primaryButton}>
                        Get a Demo <ArrowRight size={18} />
                    </Link>
                </header>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Key Benefits</h2>
                    <div className={styles.benefitsGrid}>
                        {product.benefits.map((benefit, index) => (
                            <div key={index} className={styles.benefitCard}>
                                <Star className={styles.benefitIcon} size={24} />
                                <p>{benefit}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>What's Included</h2>
                    <div className={styles.featuresList}>
                        {product.features.map((feature, index) => (
                            <div key={index} className={styles.featureItem}>
                                <CheckCircle className={styles.checkIcon} size={20} />
                                <span>{feature}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className={styles.pricingSection}>
                    <div className={styles.pricingCard}>
                        <h3>Ready to deploy?</h3>
                        <p className={styles.pricingDesc}>Get {product.name} as part of a custom automation package.</p>
                        <div className={styles.pricingActions}>
                            <Link to="/book" className={styles.primaryButton}>Get Pricing</Link>
                        </div>
                        <p className={styles.guarantee}>30-Day Money-Back Guarantee</p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ProductDetail;
