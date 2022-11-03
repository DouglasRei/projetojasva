import { ThumbsDown, ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./avatar";
import styles from "./Connent.module.css";

export function Connent(props) {
    return (
        <div className={styles.connent}>
            <Avatar hasborder={false} src={"https://avatars.githubusercontent.com/u/21282250?v=4"} />            
            <div className={styles.connentBox}>
                <div className={styles.connentContent}>
                    <header>
                        <div className={styles.connentAuthorAndTime}>
                            <strong>Douglas Reis</strong>
                            <time title="25 de outubro de 2022" dateTime="2022-10-25 14:55:00">Publicado a 1h</time>
                        </div>
                        <button title="Deletar Comentário">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>{props.content} </p>
                </div>
                <footer>
                    <ThumbsUp /> Aplaudir 
                    <span>20</span>
                </footer>
            </div>
        </div>
    )
}