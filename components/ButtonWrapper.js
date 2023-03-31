import styles from '@/styles/Home.module.css';
import Button from './Button.js';
import Link from 'next/link'


export default function ButtonWrapper(props) {
  return (
    <div className={styles.buttonWrapper}>
    <Link href={props.href1} passHref>
      <Button btnType="primary">{props.label1}</Button>
    </Link>
    <Link href={props.href2} passHref>
      <Button type="secondary">{props.label2}</Button>
    </Link>
    </div>
  );
}