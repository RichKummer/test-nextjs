import styles from '@/styles/Home.module.css';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Hero(props) {
  const {eyebrow, eyebrowColor, headline, subhead, tab1, tab2, tab3} = props;
  const eyebrowUpper = eyebrow.toUpperCase();

  return (
    <div className={styles.hero}>
      <div className={[styles.eyebrow, styles[props.eyebrowColor], inter.className].join(' ')}>{eyebrowUpper}</div>
      <h1 className={[styles.h1, inter.className].join(' ')}>{headline}</h1>

      <div className={[styles.subhead, inter.className].join(' ')}>{subhead}</div>
      <div className={[styles.tabwrapper, inter.className].join(' ')}>
       <div className={[styles.tab, inter.className].join(' ')}>{tab1}</div>
       <div className={[styles.tab, inter.className].join(' ')}>{tab2}</div>
       <div className={[styles.tab, inter.className].join(' ')}>{tab3}</div>
      </div>
    </div>
  );
}