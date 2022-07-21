import React from 'react'
import styles from './Footer.module.css'
import Link from 'next/link'

//icons
import { FaMediumM, FaLinkedinIn, FaLink, FaInstagram, FaTwitter, FaBook, FaReadme } from 'react-icons/fa'

function Footer() {
    
    return (
        <div className={styles['main-footer-container']}>
            <div className={styles['footer-container']}>

                <div className={styles['footer-column']}>
                    <div className={styles['footer-header']}>NORD Szczecin</div>
                    <span className={styles['footer-content']}>NORD Szczecin Sp. z o.o.</span>
                    <span className={styles['footer-content']}>ul. Gdańska 3c </span>
                    <span className={styles['footer-content']}>71-660 Szczecin</span>
                    <span className={styles['footer-content']}>NIP 955-25-40-182</span>
                </div>

                <div className={styles['footer-column']}>

                    <div className={styles['footer-header']}>KONTAKT</div>
                    <a href="00-48-888-333-891" className={styles['footer-content']}>+48 888 333 891</a>
                    <span className={styles['footer-content']}>biuro@nordszczecin.pl</span>
                    
                </div>


            </div>
        </div>
    )
}

export default Footer