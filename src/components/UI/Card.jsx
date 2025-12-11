import React from 'react';
import styles from './Card.module.css';

const Card = ({ title, children, className = '', hover = true }) => {
    return (
        <div className={`${styles.card} ${hover ? styles.hoverEffect : ''} ${className}`}>
            {title && <h3 className={styles.title}>{title}</h3>}
            <div className={styles.content}>
                {children}
            </div>
        </div>
    );
};

export default Card;
