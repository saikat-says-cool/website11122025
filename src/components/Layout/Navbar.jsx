import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import { content } from '../../data/content';

const Navbar = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? styles.activeLink : '';

    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.logo}>
                {content.brand.name}
            </Link>

            <div className={styles.navLinks}>
                <Link to="/" className={`${styles.link} ${isActive('/')}`}>Home</Link>
                <Link to="/products" className={`${styles.link} ${isActive('/products')}`}>Products</Link>
                <Link to="/about" className={`${styles.link} ${isActive('/about')}`}>About</Link>

                <Link to="/book" className={styles.ctaButton}>
                    Book a Demo
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
