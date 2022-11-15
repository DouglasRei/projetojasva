import { Avatar } from './Avatar';
import { Connent } from './Connent';
import styles from './Post.module.css';

import { format } from 'date-fns';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface Author {
    name: string;
    role: string;
    avatarURL: string;
}
interface Content {
    type:  string;
    content: string;
}
interface PostProps{
    author: Author;
    publishedAt: Date;
    content: Content[];

}



export function Post({ author, publishedAt, content }: PostProps) {
    const [comments, setComments] = useState(['Bola de Fogo! ']);


    const [newCommentText, setNewcommentText] = useState('');

    const publishedDateFormat = format(publishedAt, "d  'de' LLLL 'às' HH:mm'h'");

    function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('');
        setNewcommentText(event.target.value);
    }

    function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo e Obrigatorio!');
    }

    function deleteComment(commentToDelete:string) {
        const commentsWithoutDeleteOne = comments.filter(comment => {
            return comment != commentToDelete;
        })
        setComments(commentsWithoutDeleteOne);
    }

    function handleCreatNewComment(event: FormEvent) {
        
        event.preventDefault()

        setComments([...comments, newCommentText]);
        setNewcommentText('');


    }

    const isNewCommentInputEmpty = newCommentText.length == 0;
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar hasBorder src={author.avatarURL} />
                    <div className={styles.authorinfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title='18 de outubro de 2022' dateTime='2022-10-18 14:29:00'>{publishedDateFormat} </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type == 'paragraph') {
                        return <p key={line.content}>{line.content}</p>;
                    } else if (line.type == 'link') { return <p key={line.content}><a href=''>{line.content}</a></p> }

                })}
            </div>

            <form onSubmit={handleCreatNewComment} className={styles.conmentForm}>
                <strong>Deixe seu comentario</strong>

                <textarea
                    placeholder='Deixe um comentário'
                    name="comment"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <footer>
                    <button type='submit' disabled={isNewCommentInputEmpty}>Comentar</button>
                </footer>
            </form>
            <div className={styles.connentList}>
                {comments.map(comments => { return <Connent key={comments} content={comments} onDeleteComment={deleteComment} /> })}
            </div>
        </article>
    );
} 