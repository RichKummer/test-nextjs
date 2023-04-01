import ButtonWrapper from '@/components/ButtonWrapper.js'
import styles from '@/styles/Home.module.css';
import {Container, Row, Col} from 'react-grid-system'


export default function BottomBanner(props) {
  const href1 = props.href1;
  const href2 = props.href2;
  const label1 = props.label1;
  const label2 = props.label2;


  return (
    <div className={styles.bottomBanner}>
    <Container fluid>
      <Row>
        <Col md={6}>
          <h2 className={styles.h2}>More links</h2>
          <p className={styles.bottomDescription}>For you to explore</p>
        </Col>
        <Col md={6}>
         <ButtonWrapper href1={href1} label1={label1} href2={href2} label2={label2}>Test</ButtonWrapper>
        </Col>
      </Row>
    </Container>
    </div>
  );
}