import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import logo from '../img/costs_logo_white_sm_ot.png'


export function Header() {
    return (
        <>
            <header className={styles.header_container}>

                <nav>
                    <div>
                        <Link to="/"><img src={logo} alt="costs" /></Link>
                    </div>

                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to='/company'>Empresa</Link></li>
                        <li><Link to='/contact'>Contato</Link></li>
                        <li><Link to='/newprojects'>Projects</Link></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}