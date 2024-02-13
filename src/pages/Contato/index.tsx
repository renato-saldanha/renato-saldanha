import styles from './styles.module.css'
import { motion } from 'framer-motion'

export default function Contato() {
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

        </section>
        <section>

        </section>
      </div>
    </motion.div>
  )
}