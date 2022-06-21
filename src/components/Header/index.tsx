import igniteLogo from '../../assets/ignite-logo.svg';

import styles from './styles.module.css';

export function Header(){
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo Ignite" />
    </header>
  )
}