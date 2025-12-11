import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { content } from '../../data/content';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.grid}>
                <div className={styles.brandColumn}>
                    <h3>{content.brand.name}</h3>
                    <p>{content.brand.mission}</p>
                </div>

                <div className={styles.column}>
                    <h4>Products</h4>
                    <ul>
                        <li><Link to="/products">All Products</Link></li>
                        <li><Link to="/products/leadflow-max">LeadFlow Max</Link></li>
                        <li><Link to="/products/autodispatch-pro">AutoDispatch Pro</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h4>Company</h4>
                    <ul>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/book">Contact</Link></li>
                    </ul>
                </div>

                <div className={styles.column}>
                    <h4>Connect</h4>
                    <ul>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="mailto:hello@artificialyze.com">Email Us</a></li>
                    </ul>
                </div>
            </div>

            <div className={styles.copyright}>
                © {year} {content.brand.name}. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
