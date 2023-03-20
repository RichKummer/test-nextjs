import { motion } from 'framer-motion';
import styles from '@/styles/Home.module.css';

export default function Blob() {
  return (
    <div className={styles.blob}>
      <motion.div initial= {{ y: 48, opacity:0 }} animate={{y: 0, opacity: 1, scale: 2, skew: 20, rotate:360 }} 
      whileHover= {{ scale: 1.5 }}
      whileTap = {{skew: -10}}
      className={styles.box} />
    </div>
  );
}