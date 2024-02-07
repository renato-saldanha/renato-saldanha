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

export default function Portifolio() {
  return (
    <div className={styles.container}>
      <section>
        <h1>Sisflup</h1>
        <Carousel >
          <CarouselContent>
            
          </CarouselContent>
        </Carousel>

        <Image alt="sisflup" src={}/>
      </section>
      <section></section>

    </div>
  )
}