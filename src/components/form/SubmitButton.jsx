import styles from './SubmitButton.module.css'

export function SubmitButton({ text }) {
    return (
        <div className={styles.btn_container}>
           <button >{text}</button>
        </div>
    )
}
