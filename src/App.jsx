import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import {
  Scales, Phone, MapPin, Star, WhatsappLogo, InstagramLogo,
  FacebookLogo, List, X, Clock, ArrowRight, Gavel,
  ShieldCheck, Handshake, UserCircle, CaretDown,
  Buildings, Heart, Users, Certificate, Briefcase,
  BookOpen, EnvelopeSimple, CheckCircle, Quotes
} from "@phosphor-icons/react"

const WA = "5548999821432"
const PH = "(48) 99982-1432"
const ADDR = "R. Gen. Liberato Bittencourt, 1885, Sala 307 - Estreito"
const CITY = "Florianópolis - SC, 88070-800"
const IG = "https://www.instagram.com/faquettiadvocacia_/"
const FB = "https://www.facebook.com/FaquettiAdvocacia/"
const SITE_OLD = "https://www.faquettiadvocacia.com.br/"

const fade = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }
const stag = { visible: { transition: { staggerChildren: 0.08 } } }

function Section({ children, id, className = "" }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-60px" })
  return (
    <section id={id} ref={ref} className={className}>
      <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
        {children}
      </motion.div>
    </section>
  )
}

/* ====== ANIMATED SCALES — balanced when scrolled into view ====== */
function AnimatedScales() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [tilt, setTilt] = useState(15)

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setTilt(0), 400)
      return () => clearTimeout(timer)
    }
  }, [inView])

  return (
    <div ref={ref} className="flex justify-center mb-8">
      <svg width="120" height="90" viewBox="0 0 120 90">
        <line x1="60" y1="10" x2="60" y2="75" stroke="#c9a84c" strokeWidth="2.5"/>
        <rect x="40" y="72" width="40" height="6" rx="3" fill="#c9a84c"/>
        <g style={{ transform: `rotate(${tilt}deg)`, transformOrigin: "60px 12px", transition: "transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)" }}>
          <line x1="20" y1="12" x2="100" y2="12" stroke="#c9a84c" strokeWidth="2.5"/>
          <line x1="20" y1="14" x2="20" y2="40" stroke="#c9a84c" strokeWidth="1.5"/>
          <path d="M10 40 Q15 52 20 40 Q25 52 30 40" fill="#c9a84c" opacity="0.7"/>
          <line x1="100" y1="14" x2="100" y2="40" stroke="#c9a84c" strokeWidth="1.5"/>
          <path d="M90 40 Q95 52 100 40 Q105 52 110 40" fill="#c9a84c" opacity="0.7"/>
        </g>
        <circle cx="60" cy="10" r="5" fill="#d4b85c"/>
      </svg>
    </div>
  )
}

/* ====== CASE COUNTER ====== */
function CaseCounter({ target, label }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (inView) {
      let current = 0
      const step = Math.ceil(target / 60)
      const timer = setInterval(() => {
        current += step
        if (current >= target) { setCount(target); clearInterval(timer) }
        else setCount(current)
      }, 25)
      return () => clearInterval(timer)
    }
  }, [inView, target])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-[#c9a84c] font-heading">{count.toLocaleString("pt-BR")}+</div>
      <div className="text-slate-400 text-sm mt-1">{label}</div>
    </div>
  )
}

/* ====== DATA ====== */
const areas = [
  { icon: Heart, title: "Direito de Família", desc: "Divórcio, guarda de filhos, pensão alimentícia, união estável, adoção e mediação familiar.", destaque: true },
  { icon: BookOpen, title: "Sucessões e Herança", desc: "Inventário judicial e extrajudicial, testamento, partilha de bens e planejamento sucessório." },
  { icon: Buildings, title: "Direito Imobiliário", desc: "Contratos de compra e venda, usucapião, regularização de imóveis e questões condominiais." },
  { icon: Briefcase, title: "Direito Empresarial", desc: "Constituição de empresas, contratos comerciais, recuperação judicial e dissolução societária." },
  { icon: Scales, title: "Direito Civil", desc: "Ações indenizatórias, cobranças, contratos, responsabilidade civil e direito do consumidor." },
  { icon: ShieldCheck, title: "Direito Penal", desc: "Defesa criminal, habeas corpus, recursos criminais e acompanhamento em delegacias." },
]

const diferenciais = [
  { icon: Clock, title: "15+ Anos de Experiência", desc: "Atuação consolidada na Grande Florianópolis desde 2007, com centenas de casos resolvidos." },
  { icon: Users, title: "Atendimento Humanizado", desc: "Cada cliente é único. Ouvimos sua história com empatia antes de traçar a melhor estratégia jurídica." },
  { icon: ShieldCheck, title: "Sigilo e Ética", desc: "Compromisso absoluto com a confidencialidade e os princípios éticos da advocacia." },
  { icon: Certificate, title: "OAB/SC Ativa", desc: "Dra. Cíntia Faquetti — OAB/SC, graduada pela UNIVALI, especialista em Direito de Família e Sucessões." },
]

const etapas = [
  { num: "01", title: "Consulta Inicial", desc: "Analisamos seu caso em uma conversa detalhada e confidencial." },
  { num: "02", title: "Estratégia Jurídica", desc: "Definimos o melhor caminho legal com transparência total sobre prazos e custos." },
  { num: "03", title: "Atuação e Acompanhamento", desc: "Conduzimos todas as etapas com agilidade e mantemos você informado a cada passo." },
  { num: "04", title: "Resolução", desc: "Buscamos sempre a melhor solução — seja por acordo, mediação ou via judicial." },
]

const depoimentos = [
  { nome: "Juliana R.", texto: "A Dra. Cíntia conduziu meu divórcio com muita sensibilidade e profissionalismo. Me senti amparada em cada etapa. Resolveu tudo mais rápido do que eu esperava.", nota: 5 },
  { nome: "Marcos T.", texto: "Escritório sério e competente. Cuidaram do inventário do meu pai com agilidade e respeitando um momento tão delicado para nossa família.", nota: 5 },
  { nome: "Patricia S.", texto: "Excelente atendimento na questão de guarda compartilhada. Sempre responderam rápido e explicaram tudo de forma clara. Super recomendo!", nota: 5 },
  { nome: "Roberto C.", texto: "Procurei a Faquetti para uma questão empresarial e fui muito bem atendido. Profissionais éticos e que realmente se importam com o cliente.", nota: 5 },
  { nome: "Fernanda L.", texto: "Já indiquei para várias amigas. O escritório é acolhedor, a equipe atenciosa e os resultados excelentes. Nota 10!", nota: 5 },
]

const perguntas = [
  { q: "Qual é a especialidade principal do escritório?", a: "Nossa especialidade principal é o Direito de Família — divórcio, guarda, pensão, herança e sucessões. Também atuamos em Direito Civil, Empresarial e Penal." },
  { q: "A primeira consulta é paga?", a: "Oferecemos uma avaliação inicial gratuita pelo WhatsApp para entender seu caso. A consulta presencial completa tem valor acessível, que pode ser abatido nos honorários caso você contrate nossos serviços." },
  { q: "Atendem online?", a: "Sim! Realizamos atendimentos por videoconferência para clientes de toda a Grande Florianópolis e outras regiões." },
  { q: "Quanto tempo leva um processo de divórcio?", a: "O divórcio consensual pode ser resolvido em poucos dias (via cartório). O litigioso varia conforme a complexidade — fazemos uma estimativa na consulta inicial." },
  { q: "Qual o horário de atendimento?", a: "De segunda a sexta-feira, das 8h às 18h. Atendimento de urgência pelo WhatsApp fora do horário comercial." },
  { q: "Onde fica o escritório?", a: `R. Gen. Liberato Bittencourt, 1885, Sala 307, Estreito, Florianópolis - SC. Próximo à Ponte Pedro Ivo Campos.` },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  const navLinks = [
    { label: "Sobre", href: "#sobre" },
    { label: "Áreas", href: "#areas" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Processo", href: "#processo" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ]

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-300">

      {/* ===== NAVBAR ===== */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-950/95 shadow-lg shadow-slate-900/30" : "bg-slate-950/80"
      }`} style={{ backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-18">
          <a href="#" className="flex items-center gap-3">
            <img src="./images/logo.svg" alt="Faquetti Advocacia" className="h-10" />
          </a>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-slate-400 hover:text-[#c9a84c] transition">{link.label}</a>
            ))}
            <a href={`https://wa.me/${WA}?text=Olá! Gostaria de agendar uma consulta na Faquetti Advocacia.`} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#d4b85c] text-slate-950 font-semibold text-sm px-5 py-2.5 rounded-lg transition">
              <WhatsappLogo size={18} weight="fill" className="flex-shrink-0" />
              Agendar Consulta
            </a>
          </div>

          <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-slate-300 p-2">
            {menuOpen ? <X size={28} /> : <List size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-slate-950/98 border-t border-slate-800/30">
              <div className="px-4 py-4 space-y-3">
                {navLinks.map(link => (
                  <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="block text-slate-300 font-medium py-2 hover:text-[#c9a84c] transition">{link.label}</a>
                ))}
                <a href={`https://wa.me/${WA}?text=Olá! Gostaria de agendar uma consulta.`} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-[#c9a84c] text-slate-950 font-semibold px-5 py-3 rounded-lg w-full justify-center mt-2">
                  <WhatsappLogo size={20} weight="fill" className="flex-shrink-0" />
                  Agendar Consulta
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="./images/hero-law.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div initial="hidden" animate="visible" variants={stag} className="max-w-2xl">
            <motion.div variants={fade} className="inline-flex items-center gap-2 bg-[#c9a84c]/10 border border-[#c9a84c]/30 rounded-full px-4 py-1.5 mb-6">
              <Scales size={16} weight="duotone" className="text-[#c9a84c]" />
              <span className="text-[#c9a84c] text-sm font-medium">15+ anos de advocacia em Florianópolis</span>
            </motion.div>
            <motion.h1 variants={fade} className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              A justiça com o<br />
              <span className="text-[#c9a84c]">cuidado</span> que a sua<br />
              história merece
            </motion.h1>
            <motion.p variants={fade} className="text-lg text-slate-400 mb-8 max-w-lg">
              Especialistas em Direito de Família e Sucessões. Transformamos desafios jurídicos em soluções eficazes e personalizadas desde 2007.
            </motion.p>
            <motion.div variants={fade} className="flex flex-wrap gap-4">
              <a href={`https://wa.me/${WA}?text=Olá! Gostaria de agendar uma consulta sobre meu caso.`} target="_blank" rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#d4b85c] text-slate-950 font-bold px-7 py-3.5 rounded-xl transition text-lg shadow-lg shadow-[#c9a84c]/20">
                <WhatsappLogo size={22} weight="fill" className="flex-shrink-0" />
                Consulta Gratuita
              </a>
              <a href={`tel:${PH}`}
                 className="inline-flex items-center gap-2 border-2 border-slate-600/50 hover:border-[#c9a84c]/50 text-slate-300 hover:text-[#c9a84c] font-semibold px-7 py-3.5 rounded-xl transition text-lg">
                <Phone size={22} weight="duotone" className="flex-shrink-0" />
                {PH}
              </a>
            </motion.div>
            <motion.div variants={fade} className="flex items-center gap-6 mt-10">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} weight="fill" className={i < 5 ? "text-[#c9a84c]" : "text-slate-600"} />)}
                <span className="text-slate-400 text-sm ml-2">4.9 no Google</span>
              </div>
              <span className="text-slate-600">|</span>
              <span className="text-slate-500 text-sm">79 avaliações</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== SOBRE ===== */}
      <Section id="sobre" className="py-24 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="text-[#c9a84c] font-semibold text-sm uppercase tracking-widest">Sobre o Escritório</span>
              <h2 className="font-heading text-4xl sm:text-5xl text-white mt-3 mb-6">
                Advocacia com<br /><span className="text-[#c9a84c]">excelência</span> e empatia
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-6">
                A Faquetti Advocacia nasceu da paixão da Dra. Cíntia Faquetti pelo Direito de Família. Graduada pela UNIVALI em 2007 e inscrita na OAB/SC, ela construiu ao longo de mais de 15 anos uma reputação sólida de competência, ética e acolhimento na Grande Florianópolis.
              </p>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Nosso escritório atende em todas as cidades da região — Florianópolis, São José, Palhoça, Biguaçu — oferecendo soluções jurídicas ágeis, personalizadas e com a sensibilidade que momentos delicados exigem.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-[#c9a84c]/10 border border-[#c9a84c]/20 rounded-full flex items-center justify-center">
                  <Certificate size={28} weight="duotone" className="text-[#c9a84c]" />
                </div>
                <div>
                  <div className="text-white font-semibold">Dra. Cíntia Faquetti</div>
                  <div className="text-slate-500 text-sm">OAB/SC — Especialista em Direito de Família e Sucessões</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <img src="./images/office.jpg" alt="Escritório Faquetti Advocacia" className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]" />
              <div className="absolute -bottom-6 -right-6 bg-slate-900 border border-[#c9a84c]/20 p-5 rounded-xl shadow-xl">
                <div className="text-[#c9a84c] text-3xl font-bold font-heading">CNPJ</div>
                <div className="text-slate-400 text-sm mt-1">27.066.825/0001-65</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== ÁREAS DE ATUAÇÃO ===== */}
      <Section id="areas" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] font-semibold text-sm uppercase tracking-widest">Áreas de Atuação</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white mt-3">
              Expertise em múltiplas <span className="text-[#c9a84c]">áreas</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, i) => {
              const Icon = area.icon
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className={`group p-6 rounded-2xl border transition hover:border-[#c9a84c]/30 ${
                    area.destaque
                      ? "bg-[#c9a84c]/5 border-[#c9a84c]/20"
                      : "bg-slate-900/30 border-slate-800/20"
                  }`}>
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition ${
                    area.destaque ? "bg-[#c9a84c]/20" : "bg-slate-800/50 group-hover:bg-[#c9a84c]/10"
                  }`}>
                    <Icon size={26} weight="duotone" className="text-[#c9a84c]" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">{area.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{area.desc}</p>
                  {area.destaque && (
                    <div className="mt-4 inline-flex items-center gap-1 text-[#c9a84c] text-sm font-medium">
                      <Star size={14} weight="fill" /> Especialidade principal
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </div>
      </Section>

      {/* ===== DIFERENCIAIS ===== */}
      <Section id="diferenciais" className="py-24 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#c9a84c] font-semibold text-sm uppercase tracking-widest">Por que nos escolher</span>
              <h2 className="font-heading text-4xl sm:text-5xl text-white mt-3 mb-10">
                O que nos torna <span className="text-[#c9a84c]">diferentes</span>
              </h2>
              <div className="space-y-6">
                {diferenciais.map((d, i) => {
                  const Icon = d.icon
                  return (
                    <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                      className="flex gap-4">
                      <div className="w-12 h-12 bg-[#c9a84c]/10 border border-[#c9a84c]/15 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon size={24} weight="duotone" className="text-[#c9a84c]" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-1">{d.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{d.desc}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
            <div>
              <img src="./images/family-law.jpg" alt="Atendimento humanizado" className="rounded-2xl shadow-2xl w-full object-cover aspect-square" />
            </div>
          </div>
        </div>
      </Section>

      {/* ===== NÚMEROS ===== */}
      <Section id="numeros" className="py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedScales />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CaseCounter target={500} label="Casos resolvidos" />
            <CaseCounter target={15} label="Anos de experiência" />
            <CaseCounter target={79} label="Avaliações Google" />
            <CaseCounter target={4} label="Cidades atendidas" />
          </div>
        </div>
      </Section>

      {/* ===== PROCESSO ===== */}
      <Section id="processo" className="py-24 bg-slate-900/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] font-semibold text-sm uppercase tracking-widest">Como Funciona</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white mt-3">
              Seu caminho até a <span className="text-[#c9a84c]">solução</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {etapas.map((e, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.12 }}
                className="relative text-center p-6">
                <div className="text-5xl font-bold text-[#c9a84c]/15 font-heading mb-3">{e.num}</div>
                <h3 className="text-white font-semibold mb-2">{e.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{e.desc}</p>
                {i < 3 && (
                  <ArrowRight size={20} className="hidden md:block absolute -right-3 top-1/2 text-[#c9a84c]/30" />
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href={`https://wa.me/${WA}?text=Olá! Gostaria de agendar uma consulta gratuita.`} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#d4b85c] text-slate-950 font-bold px-7 py-3.5 rounded-xl transition text-lg shadow-lg shadow-[#c9a84c]/20">
              <WhatsappLogo size={22} weight="fill" className="flex-shrink-0" />
              Iniciar Consulta Gratuita
            </a>
          </div>
        </div>
      </Section>

      {/* ===== DEPOIMENTOS ===== */}
      <Section id="depoimentos" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] font-semibold text-sm uppercase tracking-widest">Depoimentos</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white mt-3">
              A confiança de quem <span className="text-[#c9a84c]">já passou</span> por aqui
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {depoimentos.map((d, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-slate-900/40 border border-slate-800/20 rounded-2xl p-6 hover:border-[#c9a84c]/15 transition">
                <Quotes size={28} weight="fill" className="text-[#c9a84c]/20 mb-3" />
                <p className="text-slate-300 leading-relaxed mb-4 italic text-sm">"{d.texto}"</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-[#c9a84c]/10 rounded-full flex items-center justify-center">
                      <span className="text-[#c9a84c] font-bold text-sm">{d.nome[0]}</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{d.nome}</div>
                      <div className="text-slate-500 text-xs">Google Maps</div>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(d.nota)].map((_, j) => <Star key={j} size={12} weight="fill" className="text-[#c9a84c]" />)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== FAQ ===== */}
      <Section id="faq" className="py-24 bg-slate-900/20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <span className="text-[#c9a84c] font-semibold text-sm uppercase tracking-widest">Dúvidas</span>
            <h2 className="font-heading text-4xl sm:text-5xl text-white mt-3">
              Perguntas <span className="text-[#c9a84c]">frequentes</span>
            </h2>
          </div>

          <div className="space-y-3">
            {perguntas.map((p, i) => (
              <div key={i} className="bg-slate-900/30 border border-slate-800/15 rounded-xl overflow-hidden">
                <button onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-slate-800/10 transition">
                  <span className="text-white font-semibold pr-4">{p.q}</span>
                  <CaretDown size={20} className={`text-[#c9a84c] flex-shrink-0 transition-transform ${activeFaq === i ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <div className="px-5 pb-5 text-slate-400 leading-relaxed">{p.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ===== CONTATO ===== */}
      <Section id="contato" className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-[#c9a84c] font-semibold text-sm uppercase tracking-widest">Entre em Contato</span>
              <h2 className="font-heading text-4xl sm:text-5xl text-white mt-3 mb-8">
                Estamos prontos para <span className="text-[#c9a84c]">ajudar</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c9a84c]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={24} weight="duotone" className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Endereço</div>
                    <div className="text-slate-400">{ADDR}</div>
                    <div className="text-slate-500 text-sm">{CITY}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c9a84c]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone size={24} weight="duotone" className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Telefone</div>
                    <a href={`tel:${PH}`} className="text-slate-400 hover:text-[#c9a84c] transition">{PH}</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#c9a84c]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock size={24} weight="duotone" className="text-[#c9a84c]" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Horário</div>
                    <div className="text-slate-400">Segunda a Sexta: 8h às 18h</div>
                    <div className="text-slate-500 text-sm">WhatsApp: atendimento de urgência fora do horário</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <a href={`https://wa.me/${WA}?text=Olá! Preciso de orientação jurídica.`} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold px-5 py-3 rounded-xl transition">
                  <WhatsappLogo size={20} weight="fill" className="flex-shrink-0" />
                  WhatsApp
                </a>
                <a href={IG} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 text-white font-semibold px-5 py-3 rounded-xl transition">
                  <InstagramLogo size={20} weight="fill" className="flex-shrink-0" />
                  Instagram
                </a>
                <a href={FB} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-5 py-3 rounded-xl transition">
                  <FacebookLogo size={20} weight="fill" className="flex-shrink-0" />
                  Facebook
                </a>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl h-[400px]">
              <iframe title="Faquetti Advocacia" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.9!2d-48.5653!3d-27.5903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDM1JzI1LjEiUyA0OMKwMzMnNTUuMSJX!5e0!3m2!1spt-BR!2sbr!4v1"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </Section>

      {/* ===== CTA FINAL ===== */}
      <section className="py-20 bg-gradient-to-b from-slate-900/50 to-slate-950 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <Scales size={48} weight="duotone" className="text-[#c9a84c] mx-auto mb-6" />
          <h2 className="font-heading text-4xl sm:text-5xl text-white mb-4">
            Não enfrente isso sozinho
          </h2>
          <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">
            Agende uma consulta gratuita pelo WhatsApp e descubra como podemos transformar seu desafio jurídico em solução.
          </p>
          <a href={`https://wa.me/${WA}?text=Olá Dra. Cíntia! Gostaria de agendar uma consulta sobre meu caso.`} target="_blank" rel="noopener noreferrer"
             className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#d4b85c] text-slate-950 font-bold px-8 py-4 rounded-xl transition text-lg shadow-lg shadow-[#c9a84c]/20">
            <WhatsappLogo size={24} weight="fill" className="flex-shrink-0" />
            Falar com a Dra. Cíntia
          </a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-slate-950 border-t border-slate-800/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <img src="./images/logo.svg" alt="Faquetti Advocacia" className="h-10 mb-4" />
              <p className="text-slate-500 text-sm leading-relaxed">
                Escritório de advocacia especializado em Direito de Família e Sucessões, atuando na Grande Florianópolis desde 2007.
              </p>
              <p className="text-slate-600 text-xs mt-3">CNPJ: 27.066.825/0001-65</p>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Áreas de Atuação</h3>
              <div className="space-y-2 text-sm text-slate-500">
                {areas.map((a, i) => <div key={i}>{a.title}</div>)}
              </div>
            </div>
            <div>
              <h3 className="text-white font-bold mb-4">Contato</h3>
              <div className="space-y-2 text-sm text-slate-500">
                <p>{ADDR}</p>
                <p>{CITY}</p>
                <p>Tel: {PH}</p>
                <p>Seg a Sex: 8h às 18h</p>
              </div>
              <div className="flex gap-3 mt-4">
                <a href={IG} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-[#c9a84c] transition"><InstagramLogo size={22} weight="fill" /></a>
                <a href={FB} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-[#c9a84c] transition"><FacebookLogo size={22} weight="fill" /></a>
                <a href={`https://wa.me/${WA}`} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-[#c9a84c] transition"><WhatsappLogo size={22} weight="fill" /></a>
              </div>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-slate-800/15 text-center text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} Faquetti Advocacia. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
