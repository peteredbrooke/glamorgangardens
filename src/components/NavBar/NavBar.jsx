import React from 'react'
import styles from "./NavBar.module.scss"
// import "../../index.css";
import "../../App.css"
import logo from "../Home/images/glamlogo.png"

const NavBar = () => {
    return (
        <div className={styles.nav}>
                <div >
                    <img className={styles.logo} src={logo} alt=""/>
                </div>
                    <ul className={styles.navMenu}>
                        <li className={styles.navItem}>
                            <a href="#home" className={styles.navLinks}>Home</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#about" className={styles.navLinks}>About</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#reviews" className={styles.navLinks}>Testamonials</a>
                        </li>
                        <li className={styles.navItem}>
                            <a href="#contact" className={styles.navLinks}>Contact</a>
                        </li>
                    </ul>


                </div>
                
        
    )
}

export default NavBar
