import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar';

import styles from './styles.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://user-images.githubusercontent.com/71772559/116590419-1b64a780-a8f4-11eb-9865-c50bd9dceeb0.png" />

      <div className={styles.profile}>
        <Avatar hasBorder src="https://avatars.githubusercontent.com/u/71772559?v=4" />

        <strong>Gabriel Borges</strong>
        <span>Full Stack Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}