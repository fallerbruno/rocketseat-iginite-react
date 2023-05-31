import { ImgHTMLAttributes } from "react";
import styles from "./Avatar.module.css";
//extende a interface para todas props de imagens do ts
interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  //ponto de interrogração eh que opcional
  hasBorder?: boolean;
}

export function Avatar({ hasBorder = true, ...props }: AvatarProps) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...props}
    />
  );
}
