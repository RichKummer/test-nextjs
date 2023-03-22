import styles from '@/styles/Home.module.css';
import Link from 'next/link'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <ul>
      <li> 
          <Link href="/" className={inter.className}>Home</Link>
        </li>
        <li> 
          <Link href="about" className={inter.className}>About Us</Link>
        </li>
        <li> 
          <Link href="other" className={inter.className}>Other</Link>
        </li>
      </ul>
    </div>
  );
}