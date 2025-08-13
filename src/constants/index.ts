// Configurações do EmailJS
export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_pkx86ls',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_o0ckaid',
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'ne0bpE6PGjvhdKtUZ',
} as const;

// Configurações do site
export const SITE_CONFIG = {
  NAME: 'Portfólio Renato Saldanha',
  DESCRIPTION: 'Portfólio pessoal de Renato Saldanha - Desenvolvedor Full Stack',
  URL: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  AUTHOR: 'Renato Saldanha',
} as const;

// Links de contato
export const CONTACT_LINKS = {
  EMAIL: 'contato@renatosaldanha.com',
  LINKEDIN: 'https://linkedin.com/in/renato-saldanha',
  GITHUB: 'https://github.com/renato-saldanha',
} as const;

// Configurações de animação
export const ANIMATION_CONFIG = {
  DURATION: 0.4,
  DELAY: 0.2,
  EASING: 'easeInOut',
} as const;

// Configurações do carrossel
export const CAROUSEL_CONFIG = {
  ALIGN: 'start' as const,
  LOOP: true,
  SKIP_SNAPS: false,
} as const;
