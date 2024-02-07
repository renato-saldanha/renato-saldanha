import Link from 'next/link'
import styles from './styles.module.css'
import Image from 'next/image'
import imgProfile from '../../../public/assets/profile.png';
import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Header() {
  const history = useRouter()

  function toHome() {
    history.push("/")
  }

  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        <Image
          alt='profile'
          src={imgProfile}
          onClick={() => toHome()} />
        <span onClick={() => toHome()}> Renato Saldanha </span>
      </div>
      <div className={styles.menu}>
        <Link href="/Home">Home</Link>
        <Link href="/Sobre">Sobre</Link>
        <Link href="/Portifolio">Portifólio</Link>
        <Link href="/Contato" >Contato</Link>
      </div>
    </div>
  )
}