import styles from './styles.module.css'

import { GaleriaItem } from '@/types'
import GaleriaFotos from '@/components/GaleriaFotos'


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
    <div className={styles.container} >
      <GaleriaFotos itens={galeriaItens} />
      <p>Sistema de gerenciamento de fluxo de produção, onde os usuários alimentam o sistema com informações dos clientes e dos orçamentos e após a salvar,
          os registros entram em banco e o sistema retorna as atividades cadastradas por etapas configuradas </p>
    </div >
 
  )
}