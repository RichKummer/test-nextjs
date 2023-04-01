import styles from '@/styles/Home.module.css';
import Button from './Button.js';
import Link from 'next/link'
import {Container, Row, Col} from 'react-grid-system'


export default function ButtonWrapper(props) {
  return (
    <div className={styles.buttonWrapper}>
    <Container>
    <Link href={props.href1} passHref>
      <Button btnType="primary">{props.label1}</Button>
    </Link>
    <Link href={props.href2} passHref>
      <Button type="secondary">{props.label2}</Button>
    </Link>
    </Container>
    </div>
  );
}