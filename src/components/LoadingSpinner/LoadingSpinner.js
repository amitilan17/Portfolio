import React from 'react';
import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => {
    return (
        <div className={styles.spinnerContainer}>
            <span className={styles.loader}></span>
        </div>
    );
};

export default LoadingSpinner;