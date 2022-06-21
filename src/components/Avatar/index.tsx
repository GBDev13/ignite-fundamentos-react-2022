import { ImgHTMLAttributes } from 'react';

import styles from './styles.module.css';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder: boolean;
}

export function Avatar({ hasBorder, src }: AvatarProps){
  return (
    <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src} />
  )
}