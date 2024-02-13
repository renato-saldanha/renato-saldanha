import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { DotButton, useDotButton } from '../../components/DotButton'

import styles from './styles.module.css'
import { GaleriaProps } from '@/uteis/interfaces'

export default function GaleriaFotos({ itens }: GaleriaProps) {
  const options: EmblaOptionsType = {
    align: 'start',
    dragFree: true,
    containScroll: "trimSnaps"
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  return (
    <div ref={emblaRef}>
      <div className={styles.containerImagem}>
        {itens.map((item, i) => (
          <div className={styles.content} key={i}>
            {item.titulo && (
              <div className={styles.containerSobre}>
                <p>
                  {item.titulo}
                </p>
              </div>)
            }
            <div className={item ? item.style : styles.imagem}>
              <Image width={900} height={900} alt={`Img${i + 1}`} src={item.imagem} />
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
    </div>
  )
}