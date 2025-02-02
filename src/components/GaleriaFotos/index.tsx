import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { DotButton, useDotButton } from '../../components/DotButton'
import Image from 'next/image'

import styles from './styles.module.css'
import {  GaleriaProps } from '@/uteis/interfaces'

const GaleriaFotos: React.FC<GaleriaProps> = ({itens} : GaleriaProps) => {
  const options: EmblaOptionsType = {
    align: 'start'
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  return (
    <section className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {itens.map((item, i) => (          
            <div className={styles.embla__slide} key={i}>
              <div className={styles.containerPainel}>
                {item.titulo && (
                  <div className={styles.containerSobre}>
                    <p>
                      {item.titulo}
                    </p>
                  </div>)
                }
                <div className={item ? item.style : styles.embla__slide__number}>
                  <Image                   
                    width={1500}
                    height={1500}           
                    sizes="(min-width: 940px) 784px, (min-width: 700px) 85.45vw, 100vw" 
                    alt={`Img${i + 1}`} 
                    src={item.imagem} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__controls}>
        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, i) => (
            <DotButton
              key={i}
              onClick={() => onDotButtonClick(i)}
              className={i === selectedIndex ? styles.embla__dot : styles.embla__dot__selected}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default GaleriaFotos;