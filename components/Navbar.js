import styles from '@/styles/Home.module.css';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <h3 className={inter.className}>Here's a test navbar</h3>
      <p className={inter.className}>Just in case, here's some copy</p>
    </div>
  );
}