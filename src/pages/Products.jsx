import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Card from '../components/UI/Card';
import { content } from '../data/content';
import styles from './Products.module.css';
import SEO from '../components/SEO';

const Products = () => {
    const { products } = content;
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
                title="Automation Products"
                description="Explore our suite of AI automation tools for home services: LeadFlow, AutoDispatch, and more."
            />
            <header className={styles.header}>
                <h1 className={styles.title}>Automation Suite</h1>
                <p className={styles.subtitle}>
                    Modular AI systems designed to solve specific home-service problems.
                    <br />Use them individually or combine them for a complete ecosystem.
                </p>
            </header>

            <div className={styles.grid}>
                {products.map((product, index) => (
                    <div
                        key={product.id}
                        style={{
                            transform: `translateY(${Math.max(0, (scrollY - 300) * (0.04 + index * 0.008))}px)`,
                            opacity: Math.min(1, Math.max(0, (scrollY - 200 - index * 50) / 250))
                        }}
                    >
                        <Card title={product.name} className={styles.productCard}>
                            <div className={styles.cardContent}>
                                <p className={styles.tagline}>{product.tagline}</p>
                                <p className={styles.description}>{product.description}</p>

                                <div className={styles.features}>
                                    <h4>Includes:</h4>
                                    <ul>
                                        {product.features.slice(0, 3).map((feature, idx) => (
                                            <li key={idx}>• {feature}</li>
                                        ))}
                                    </ul>
                                </div>

                                <Link to={`/products/${product.id}`} className={styles.ctaButton}>
                                    View Details <ArrowRight size={16} />
                                </Link>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>

            <section className={styles.bottomCta}>
                <h2>Not sure where to start?</h2>
                <Link to="/book" className={styles.auditButton}>Get a Free Automation Audit</Link>
            </section>
        </div>
    );
};

export default Products;
