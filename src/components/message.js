import styles from "../components/message.module.css"

export function Message({text}){
    
    return(
        <div className={styles.main}>            
            { text }
        </div>
    )
}