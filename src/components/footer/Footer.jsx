import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
    return (
        <>
        
        <div className={styles.footer}>
            <div className={styles.head}>
            <h1 className={styles.hh}>1MDM</h1>
            <p className={styles.hp}>One Medical Devices </p>
            <p className={styles.hp}>Market Place</p>
            </div>
            <div className={styles.platform}>
                <ul>
                    <li><h5 className={styles.subhead}>Platform</h5></li>
                    <li><a>Sell on 1MDM</a></li>
                    <li><a>Pricing</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Our Story</a></li>
                    <li><a>Careers</a></li>
                    <li><a>Blog</a></li>
                    <li><a>Brands</a></li>
                </ul>
            </div>
            <div className={styles.pressroom}>
                <div  className={styles.proom}>
                <ul>
                    <li><h5  className={styles.subhead}>Press Room</h5></li>
                    <li><a>Images & B-roll</a></li>
                </ul>
                </div>
                <div  className={styles.policy}>
                <ul>
                    <li><h5  className={styles.subhead}>Policies</h5></li>
                    <li><a>Terms of Service</a></li>
                    <li><a>Privacy Policy</a></li>
                    <li><a>Delivery Information</a></li>
                </ul>
                </div>
             </div>
            <div className={styles.reachus}>
            <ul>
                    <li><h5  className={styles.subhead}>Reach Us</h5></li>
                    <li><a>Corporate Information</a></li>
                    <li><a>Contact Us</a></li>
            </ul>
            </div>
        </div>
        <div className={styles.copyright}><p>© 2025 1MDM ⚡ by SuperLabs</p></div>
        </>
    );
}

export default Footer;
