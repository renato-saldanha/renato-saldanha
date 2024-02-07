import Image from 'next/image'
import styles from './styles.module.css'
import Img1 from '../../../public/assets/Sisflup/sis1.png'
import Img2 from '../../../public/assets/Sisflup/sis2.png'
import Img3 from '../../../public/assets/Sisflup/sis3.png'
import Img4 from '../../../public/assets/Sisflup/sis4.png'
import Img5 from '../../../public/assets/Sisflup/sis5.png'
import Img6 from '../../../public/assets/Sisflup/sis6.png'

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
        <div className={styles.carrocel}>
          <Carousel >
            <CarouselContent>
              {Array.from({ length: 6 }).map((_, i) => (
                <CarouselItem key={i} className={styles.carrocelItem}>
                  <div >
                    <Card >
                      <CardContent className={styles.imgContent}>
                        <Image 
                          alt="Img1"
                          src={`/assets/Sisflup/sis${i + 1}.png`}
                          quality={100}
                          width={500}
                          height={500}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          
        </div>


      </section>
      <section></section>

    </div>
  )
}