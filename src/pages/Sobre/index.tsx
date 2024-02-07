import Image from 'next/image'
import styles from './styles.module.css'
import Img from '../../../public/assets/parceira.jpeg'
import Link from 'next/link'

export default function Sobre() {
  return (
    <div className={styles.container}>
      <div className={styles.containerSobre}>
        <p>
          Desde a adolescência envolvido com jogos digitais, em 2011 abri uma assistência técnica de computadores, em 2013 tive o maior presente do universo, minha filha Morgana Heloisa e com isso comecei a pesquisar novos caminhos na área tecnologica.
          Conheci o Delphi por um amigo e com isso comecei a estudar Java e Delphi, ainda em 2013 comecei a trabalhar como suporte técnico em sistemas.
          Em 2015 dei partida na jornada de desenvolvedor Delphi, em 2022 decidi iniciar meus estudos em ReactNative e vim desenvolvendo pequenas soluções em empresas parceiras.
          Em 2022 decici iniciar a vida de Fullstack e iniciei meus estudos em ReactJS e Node e venho prestando serviços autônomos em TI fornecendo pequenas soluções para complementar as necessidades das empresas.
         <br/> Estou sempre aberto a novas oportunidades e desafios, entre em <Link href="/Contato">Contato</Link> comigo!
        </p>
        
      </div>

      <div className={styles.containerImg}>
        <Image alt="Img" src={Img} />
      </div>
    </div>
  )
}