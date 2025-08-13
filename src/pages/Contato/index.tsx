import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { BadgeCheck, AlertCircle } from 'lucide-react'
import { useEmailJS } from '@/hooks/useEmailJS'

import styles from './styles.module.css'

export default function Contato() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")
  
  const { sendEmail, isLoading, isSuccess, error, reset } = useEmailJS()

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const contato = {
      nome,
      email,
      mensagem
    }

    sendEmail(contato).then(() => {
      if (isSuccess) {
        limparCampos()
      }
    })
  }

  function limparCampos() {
    setTimeout(() => {
      reset()
      setMensagem("")
      setNome("")
      setEmail("")
    }, 5000);
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
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2>Entre em contato comigo!</h2>
        <div className={styles.content}>
          <div className={styles.containerDados}>
            <label>Nome</label>
            <input 
                type='text' 
                name="nome" 
                value={nome} 
                onChange={e => setNome(e.target.value)}
                aria-label="Nome completo"
                aria-required="true"
                required
              />
            <label>Email</label>
            <input 
                type='email' 
                name="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)}
                aria-label="Endereço de email"
                aria-required="true"
                required
              />
          </div>

          <div className={styles.containerMensagem}>
            <label>Mensagem</label>
            <textarea 
                name="mensagem" 
                value={mensagem} 
                onChange={e => setMensagem(e.target.value)}
                aria-label="Sua mensagem"
                aria-required="true"
                required
              />
          </div>
        </div>
        {error && (
          <div className={styles.error}>
            <AlertCircle size={16} />
            <span>{error}</span>
          </div>
        )}
        <div className={styles.containerBotao} >
          {isSuccess && <BadgeCheck />} 
          <input 
            type='submit' 
            value={isLoading ? "Enviando..." : isSuccess ? "Email enviado!" : "Enviar email"} 
            disabled={isLoading}
          />
        </div>
      </form>
    </motion.div>
  )
}