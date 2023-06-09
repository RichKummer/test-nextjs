import styles from '@/styles/Home.module.css';
import { Inter } from 'next/font/google' 

const inter = Inter({ subsets: ['latin'] })

export default function Button(props) {
  const href = props.href;
  const type = props.type;
  let btnType = "btnPrimary";

  if (type === "secondary"){
      btnType = "btnSecondary";
  } else if (type === "primary"){
      btnType = "btnPrimary";
  }

  return (
    <button href={href} className={[styles[btnType],[styles.btn],inter.className].join(' ')}>{props.children}</button>
  );
}