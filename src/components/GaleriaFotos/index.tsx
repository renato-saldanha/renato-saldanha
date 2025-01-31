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
              <div className={styles.embla__slide__number}>
                <Image 
                  
                  fill={true}
                  sizes="(min-width: 700px) 941px, (min-width: 440px) 40vw, calc(5vw + 155px)"
                  alt={`Img${i + 1}`} 
                  src={item.imagem} />
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
              className={styles.embla__dot.concat(
                i === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default GaleriaFotos;