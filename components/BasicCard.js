import styles from '@/styles/Home.module.css';
import { Inter } from 'next/font/google' 

const inter = Inter({ subsets: ['latin'] })

export default function BasicCard(props) {
  const href = props.href;
  const heading = props.heading;
  const date = props.date;

  return (
    <div className={styles.basicCard}>

      <div className={[styles.h2, inter.className].join(' ')}>{heading}</div>
    </div>
  );
}