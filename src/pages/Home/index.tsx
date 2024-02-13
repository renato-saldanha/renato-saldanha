import styles from './styles.module.css'
import { motion } from "framer-motion"

export default function Home() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          x: -150,
          y: 100,
          opacity: 0,
          transition: {
            ease: "backInOut",
            duration: .1,
            x: { duration: 1 }
          }
        },
        visible: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: {
           delay: .4
          }
        }
      }}>
      <div className={styles.container}>
        <h1>Saudações!</h1>
        <h1>Que bom ter você aqui!</h1>
        <p>Seja bem-vindo(a) ao meu portfólio, aqui você conhecerá um pouco mais sobre mim e sobre o meu trabalho.</p>
      </div>
    </motion.div>
  )
}