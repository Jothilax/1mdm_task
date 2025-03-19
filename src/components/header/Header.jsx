import React from 'react';
import styles from './header.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus,faHeadset } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
      <>
    
        <div className={styles.header}>
            <div className={styles.tophead}>
            <div className={styles.heading}>World's Largest Medical Equipment Market Place</div>
            <div className={styles.accdet}>
            <a href="#" className={styles.myaccount}>My account</a>
            <span> | </span>
            <a href="#" className={styles.contact}>Contact Us</a>
            </div>
           
            </div>
            <hr className={styles.divider}/>
            <div className={styles.navigation}>
                <div className={styles.headerlogo}>
                <a className={styles.logo}>1MDM</a>
                </div>
                    <div className={styles.links}>
                        <Link to = '/about'>About Us</Link>
                        <Link to = '/story'>Our Story</Link>
                        <Link to = '/seller'>Sell on 1MDM</Link>
                        <Link to = '/pricing'>Pricing</Link>
                        {/* <a href='#'> About Us</a> */}
                        {/* <a  href='#'>Our Story</a> */}
                        {/* <a href='#'>Sell on 1MDM</a> */}
                        {/* <a href='#'>Pricing</a> */}
                    </div>
                
            </div>

            <div className={styles.chatbutton}>
            <button className={styles.btn}><FontAwesomeIcon icon={faCartPlus} className={styles.icon} />Start selling</button><br/>
            <button className={styles.btn}><FontAwesomeIcon icon={faHeadset} className={styles.icon}/>Customer service</button>
        </div>
        </div>
       
        </>
    );
}

export default Header;
 