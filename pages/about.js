import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import heroImage from "public/about/test-hero.jpg"
import Image from 'next/image'
import Button from '@/components/Button'
import Link from 'next/link'
import { Inter } from 'next/font/google' 

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return <>
    <Head>
      <title>About page</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={[styles.main, inter.className].join(' ')}>
    <Navbar />
    <Hero eyebrow="About Us" eyebrowColor="eyebrow-purple" tab1="Design" tab2="Development" tab3="Systems design" subhead="This is a subhead that provides more context for what the page is about" headline="This is an H1 headline for the page" heroImage="heroImage"/>
    <Image
      className={styles.heroImage}
      src={heroImage}
      alt="test image"
      priority
    />
    <grid>
    <Link href="/other" passHref>
      <Button type="primary">Primary</Button>
    </Link>
    <Link href="/" passHref>
      <Button type="secondary" href="/other">Secondary</Button>
    </Link>
    </grid>

    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </main>
    </>
}