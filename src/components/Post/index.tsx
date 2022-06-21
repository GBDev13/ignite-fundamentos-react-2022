import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from '../Avatar';
import { Comment } from '../Comment';
import { format, formatDistanceToNow } from 'date-fns';

import ptBR from 'date-fns/locale/pt-BR'

import styles from './styles.module.css'

export interface PostProps {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: {
    type: 'paragraph' | 'link';
    content: string;
  }[];
  publishedAt: Date;
}

export function Post({ author, publishedAt, content }: PostProps) {
  const [comments, setComments] = useState([
    'Post muito bacana, hein?!'
  ]);

  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  });

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);

    setNewCommentText('');
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function deleteComment(commentToDelete: string){
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete
    });

    setComments(commentsWithoutDeleteOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          dateTime={publishedAt.toISOString()}
          title={publishedDateFormatted}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(element => {
          if(element.type === 'paragraph'){
            return <p key={element.content}>{element.content}</p>
          }else if (element.type === 'link'){
            return <p key={element.content}><a href='#'>{element.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          onChange={(event:ChangeEvent<HTMLTextAreaElement>) => { 
            event.target.setCustomValidity('')
            setNewCommentText(event.target.value)
          }}
          value={newCommentText}
          placeholder='Deixe um comentário'
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
        </footer>

      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => {
          return <Comment content={comment} key={index} onDeleteComment={deleteComment}/>
        })}
      </div>

    </article>
  )
}