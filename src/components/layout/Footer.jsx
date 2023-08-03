import styles from './Footer.module.css'
import logo from '../img/icon-1.png'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

export function Footer() {
    return (
        <footer className={styles.footer_container}>
            <nav>
                <img src={logo} alt="Costs logo" />
                <ul>
                    <li><FaFacebook /></li>
                    <li><FaLinkedin /></li>
                    <li><FaInstagram /></li>
                </ul>
            </nav>
            <p>Costs &copy; 2021</p>
        </footer>
    )
}