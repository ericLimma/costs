import styles from './Home.module.css'
import savings from '../img/19724.png'
import { LinkButton } from '../layout/LinkButton'

export function Home() {
    return (
        <>
           <section className={styles.home_container}>
            <h1>Bem-Vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar seus projetos agora mesmo!</p>
            <LinkButton to = '/newprojects' text = 'Criar Projeto'/>
            <img src={savings} alt="Costs" />
           </section>
        </>
    )
}