import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'

import styles from './styles.module.css'

export default function Contato() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")
  const [emailEnviado, setEmailEnviado] = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

function handleClick() {

  setEmailEnviado(true)

  setTimeout(() => {
    setEmailEnviado(false)
    setMensagem("")
    setNome("")
    setEmail("")
  }, 15000);
}

  return (
    <motion.div className={styles.container}
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
      <form >
        <h2>Entre em contato comigo por email</h2>
        <div className={styles.content}>
          <div className={styles.containerDados}>
            <label>Nome</label>
            <input type='text' name={nome} value={nome} onChange={e => setNome(e.target.value)} />
            <label>Email</label>
            <input type='email' name={email} value={email} onChange={e => setEmail(e.target.value)} />
          </div>

          <div className={styles.containerMensagem}>
            <label>Mensagem</label>
            <textarea name={mensagem} value={mensagem} onChange={e => setMensagem(e.target.value)} />
          </div>
        </div>
        <div className={styles.containerBotao} >
          {emailEnviado && <BadgeCheck />} <input type='button' value={emailEnviado ? "Email enviado!" : "Enviar email"} onClick={handleClick} />
        </div>
      </form>
    </motion.div>
  )
}