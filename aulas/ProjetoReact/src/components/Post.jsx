import { Avatar } from './Avatar';
import { Connent } from './Connent';
import styles from './Post.module.css';
import {format } from 'date-fns/'
import { useState } from 'react';



export function Post({author, publishedAt, content}) {
    const [comments,setComments] = useState([
    'Bola de Fogo! ' 
    ])

    const publishedDateFormat =  format(publishedAt,"d  'de' LLLL 'às' HH:mm'h'" );

    function handleCreatNewComment(){
        event.preventDefault()
        newCommentText = event.target.comment.value
        setComments([...comments, newCommentText]);
    }
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarUrl } />
                    <div className={styles.authorinfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title='18 de outubro de 2022' dateTime='2022-10-18 14:29:00'>{publishedDateFormat} </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type== 'paragraph') {
                        return <p>{line.content}</p>;
                    }else if(line.type == 'link') {return <p><a href=''>{line.content}</a></p> }

                })}
            </div>

            <form onSubmit={handleCreatNewComment} className={styles.conmentForm}>
                <strong>Deixe seu comentario</strong>
                <textarea placeholder='Deixe um comentario' />
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>
            <div className={styles.connentList}>
                {comments.map(comments =>{return <Connent content= {comments}/>}) }
            </div>
        </article>
    );
} 