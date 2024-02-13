import Image from 'next/image'
import styles from './styles.module.css'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { GaleriaItem } from '@/uteis/interfaces'
import GaleriaFotos from '@/components/GaleriaFotos'
import { motion } from 'framer-motion'

const galeriaItens: GaleriaItem[] = [
  { imagem: `/assets/Sisflup/sis1.png` },
  { imagem: `/assets/Sisflup/sis2.png` },
  { imagem: `/assets/Sisflup/sis3.png` },
  { imagem: `/assets/Sisflup/sis4.png` },
  { imagem: `/assets/Sisflup/sis5.png` },
  { imagem: `/assets/Sisflup/sis6.png` }
]

export default function Portifolio() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          left: 1,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .4
          }
        }
      }}>
      <div className={styles.container}>
        <section>
          <h1>Sisflup</h1>
          <div className={styles.containerGaleria}>
            <GaleriaFotos itens={galeriaItens} />
          </div>
          <p>Sistema de gerenciamento de fluxo de produção, onde os usuários alimentam o sistema com informações dos clientes e dos orçamentos e após a salvar,
            os registros entram em banco e o sistema retorna as atividades cadastradas por etapas configuradas </p>
        </section>
        <section></section>
      </div >
    </motion.div>
  )
}