import Image from 'next/image'
import styles from './styles.module.css'
import Img1 from '../../../public/assets/eu.png'
import Img2 from '../../../public/assets/parceira.jpeg'
import Link from 'next/link'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from '../../components/DotButton'

const galeriaItens = [
  {
    titulo: `Natural de Cuiabá-MT, cresci em um bairro periférico onde conheci o skate no início da adolescência e sempre envolvido com jogos de console e fliperama,
            aos 15 anos conheci a lanhouse e os jogos eletrônicos e fiquei encantado, com isso fui aprendendo mais sobre os componentes internos, seus funcionamentos e como identificar prévios problemas.
            Já com 17 anos, comecei a dar manutenção em computadores e notebooks e com 18 anos abri minha empresa de manuteção de computadores e rede.`,
    imagem: Img1,
    style: styles.containerImg1
  },
  {
    titulo: `Formado em Análise e Desenvolvimento de Sisitemas em 2018,
    desde 2013 trabalhando com soluções em TI, conheci o Delphi por um amigo e com isso comecei a estudar Java e Delphi e comecei a trabalhar como suporte técnico em sistemas.
    Em 2015 dei partida na jornada de desenvolvedor Delphi, passei por algumas empresas onde efetuava a manutenção dos sistemas EPRs existentes utilizando diversas tecnologias que a ferramenta proporciona.
    Em 2022 decidi iniciar meus estudos em ReactNative e vim desenvolvendo pequenas soluções em empresas parceiras.
    Em 2023 decici iniciar a vida de Fullstack e iniciei meus estudos em ReactJS e Node e venho prestando serviços autônomos em TI fornecendo pequenas soluções para complementar as necessidades das empresas.`,
    imagem: Img2,
    style: styles.containerImg2
  }
]


export default function Sobre() {
  const options: EmblaOptionsType = {
    align: 'start',
    dragFree: true,
    containScroll: "trimSnaps"
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  return (
    <div className={styles.container}   >
      <div className={styles.containerViewPort} ref={emblaRef}>
        <div className={styles.containerImagem}>
          {galeriaItens.map((item, i) => (
            <div className={styles.content}
              key={i}>
              <div className={styles.containerSobre}>
                <p>
                  {item.titulo}
                </p>
              </div>
              <div className={item.style}>
                <Image alt={`Img${i + 1}`} src={item.imagem} />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.botoesGaleria} >
          {scrollSnaps.map((_, i) => (
            <DotButton
              key={i}
              onClick={() => onDotButtonClick(i)}
              className={selectedIndex === i ? styles.dotButtonSelecionado : styles.dotButton} />
          ))}
        </div>

        <p className={styles.contato}><br /> Estou sempre aberto a novas oportunidades e desafios, entre em <Link href="/Contato">Contato</Link> comigo!</p>
      </div>


    </div>
  )
}