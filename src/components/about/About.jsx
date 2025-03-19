import React from 'react'
import styles from './about.module.css';
import career from '../../assets/about/image-3.png';
import sell from '../../assets/about/image-4.png';
import location from '../../assets/about/image-5.png';
import contact from '../../assets/about/image-6.png';

function About() {
    return (
        <div className={styles.about}>
            <h1 className={styles.heading}>Our mission is to make life</h1>
            <h1 className={styles.heading}>saving devices accessible</h1>
            <h1 className={styles.heading}>& affordable worldwide.</h1>
            <div className={styles.magazine}>
                {/* <img src={'src/assets/about/image-1.jpg'}/> */}
                <p className={styles.magazinep}>IMDM MAGAZINE</p>
                <h5 className={styles.magazinecont}>Deep dive into the</h5>
                <h5 className={styles.magazinecont}>engineering & technology</h5>
                <h5 className={styles.magazinecont}>behind life saving medical</h5>
                <h5 className={styles.magazinecont}>devices from 1MDM.</h5>
                <p className={styles.magazinep}>Learn more</p>

            </div>
            <div className={styles.products}>
            <p className={styles.productHead}>OUR PRODUCTS</p>
            <h5 className={styles.productCont}>Hi, how can we help you?</h5>
            <p className={styles.productinfo}>See what we build</p>

            </div>

            <div className={styles.careerSales}>

                <div className={styles.career}>
                <img src={career} alt="career" className={styles.careerImg}/>
                <p className={styles.aboutHeading}>Careers at 1MDM</p>
                <p className={styles.aboutContent}>Join Us</p>
                </div>

                <div className={styles.sales}>
                <img src={sell} alt="sell" className={styles.sellImg}/>
                <p className={styles.aboutHeading}>Sell at 1MDM</p>
                <p className={styles.aboutContent}>Start selling</p>
                </div>

            </div>

            <div className={styles.locationContact}>
                
                
            <div className={styles.location}>
                <img src={location} alt="location" className={styles.locationImg}/>
                <p className={styles.aboutHeading}>From humble beginnings</p>
                <p className={styles.aboutContent}>Our Story</p>
                </div>
 
                <div className={styles.contact}>
                <img src={contact} alt="contact" className={styles.contactImg}/>
                <p className={styles.aboutHeading}>Contact Us</p>
                <p className={styles.aboutContent}>Say hello!</p>
                </div>

            </div>


        </div>
    )
}

export default About