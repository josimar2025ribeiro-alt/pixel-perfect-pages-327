import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BarChart3, Check, ChevronDown, Menu, MousePointerClick, Share2, Sparkles, X } from "lucide-react";
import { useState } from "react";
const heroVideo = "/hero-video.webm";
const brandImage = "/Frame_860.webp";
const leadImage = "/Frame_857-min.webp";
const paymentImage = "/Frame_858.webp";
const catalogImage = "/Frame_861.webp";
const linksImage = "/Frame_863-min.webp";
const analyticsImage = "/analytics-dashboard.png";
const shapeImage = "/exemplo-shape.png";
const natuImage = "/exemplo-natupet.png";
const primeImage = "/exemplo-prime.png";
const mooviImage = "/exemplo-mooviloc.png";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Vision — Sua presença digital em um único lugar" },
    { name: "description", content: "Crie seu mini-site profissional com WhatsApp, catálogo, pagamentos, links e muito mais." },
    { property: "og:title", content: "Vision — Sua presença digital" },
    { property: "og:description", content: "Toda sua presença online em um único link." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: LandingPage,
});

const features = [
  { tag: "Personalização", title: "Do seu jeito, com sua cara", text: "Cores, logo, capa, tipografia e ordem das seções. Cada mini-site é único como sua marca.", image: brandImage },
  { tag: "Captura de contato", title: "Formulário integrado", text: "Colete e-mail e telefone dos visitantes direto do seu mini-site — vira lista de clientes na hora.", image: leadImage },
  { tag: "Pagamento", title: "Cobre com Pix em segundos", text: "QR Code, copia-e-cola e chave Pix visíveis com um toque. Menos fricção, mais venda.", image: paymentImage },
  { tag: "Catálogo", title: "Vitrine visual completa", text: "Produtos ou serviços com foto, descrição, preço e botão de pedir. Seu cardápio pronto.", image: catalogImage },
  { tag: "Links ilimitados", title: "Cadastre qualquer link", text: "WhatsApp, Instagram, TikTok, YouTube, agenda, catálogo — tudo num lugar só.", image: linksImage },
];

const plans = [
  { label: "Individual", name: "Plano Pro", desc: "Pra você, seu negócio, seu link único.", price: "R$ 97,90", detail: "1 site · cancele quando quiser", cta: "Assinar agora", hot: false, items: ["1 mini-site profissional", "WhatsApp, Pix, endereço, catálogo, redes", "Agendamento online com horários próprios", "Pix com QR Code e copia e cola", "Personalização total", "Analytics em tempo real", "Suporte no WhatsApp"] },
  { label: "Melhor pra agências", name: "Plano Premium", desc: "Agência começando? Gerencie múltiplas marcas num painel só.", price: "R$ 197,90", detail: "Até 30 sites · cancele quando quiser", cta: "Assinar o Premium", hot: true, items: ["Até 30 mini-sites", "Painel único pra gerenciar tudo", "Subcontas ilimitadas", "Analytics separado por site", "Todos os recursos do plano Pro", "Suporte prioritário no WhatsApp"] },
  { label: "Escala sem limite", name: "Plano Scale", desc: "Agência que gerencia carteira grande — e cresce sem trocar de plano.", price: "R$ 297,90", detail: "Até 100 sites · compre mais depois", cta: "Assinar o Scale", hot: false, items: ["Até 100 mini-sites inclusos", "Compre pacotes de sites extras", "Todos os recursos do plano Premium", "Subcontas ilimitadas", "Onboarding e suporte prioritário"] },
  { label: "Em breve", name: "Plano Whitelabel", desc: "Sua marca no lugar da Vision — a plataforma inteira, do seu jeito.", price: "Em breve", detail: "Ainda não disponível", cta: "Em breve", hot: false, disabled: true, items: ["Domínio próprio", "100% com sua marca", "Todos os recursos liberados", "Mini-sites sem limite prático", "Subcontas ilimitadas", "Onboarding dedicado"] },
];

const faqs = [
  ["Não sou bom com tecnologia — vou conseguir mexer?", "Sim. A plataforma foi feita para você montar e publicar tudo sem programação ou designer."],
  ["Eu já tenho Instagram, site ou linktree. Pra que outro?", "A Vision reúne todos os seus canais e ainda adiciona catálogo, Pix, agenda e métricas em uma página feita para converter."],
  ["Meu cliente vai perder tempo pra achar meu contato?", "Não. WhatsApp, redes, Pix e outros botões ficam visíveis e acessíveis com um toque."],
  ["R$ 97,90 por mês. E se eu não gostar?", "Você pode cancelar quando quiser. Se não amar a experiência, a gente devolve seu dinheiro."],
  ["Preciso saber programar ou pagar designer?", "Não. Você escolhe cores, imagens, textos e a ordem das seções em poucos minutos."],
  ["Meus clientes vão precisar baixar algum app?", "Não. Seu mini-site abre direto no navegador por link, QR Code ou cartão NFC."],
  ["Meus dados ficam seguros?", "Sim. A plataforma foi construída com práticas modernas de segurança e privacidade."],
];

const metrics = [
  { Icon: BarChart3, title: "Origem do tráfego" },
  { Icon: MousePointerClick, title: "Visitas e cliques no tempo" },
  { Icon: Share2, title: "Ranking dos botões" },
];

function Logo() { return <a href="#top" className="logo" aria-label="Vision"><span className="logo-mark">◖</span><strong>Vision</strong></a>; }

function LandingPage() {
  const [menu, setMenu] = useState(false);
  return <main id="top">
    <header className="site-header"><div className="nav-wrap"><Logo/><nav className={menu ? "nav-links open" : "nav-links"}><a href="#como">Como funciona</a><a href="#exemplos">Exemplos</a><a href="#preco">Preço</a><a href="#faq">FAQ</a></nav><div className="nav-actions"><a href="https://login-biosite.lovable.app/" target="_blank" rel="noopener noreferrer">Entrar</a><a className="btn lime compact" href="#preco">Começar agora</a><span className="flags">🇧🇷 🇺🇸 🇪🇸</span></div><button className="menu-button" aria-label="Abrir menu" onClick={() => setMenu(!menu)}>{menu ? <X/> : <Menu/>}</button></div></header>

    <section className="hero section"><div className="hero-copy"><span className="eyebrow"><Sparkles size={13}/> Sua presença digital</span><h1>Sua presença digital completa em <em>um único lugar.</em></h1><p>Crie um mini-site profissional para reunir WhatsApp, redes sociais, catálogo, links, pagamentos, localização e muito mais. Compartilhe com um único link, QR Code ou cartão NFC — e transforme visitantes em clientes.</p><div className="actions"><a className="btn lime" href="#preco">Ver preços <ArrowRight size={17}/></a><a className="btn pink" href="#exemplos">Ver templates prontos</a></div></div><div className="hero-media"><div className="glow"/><video autoPlay muted loop playsInline src={heroVideo}/><span className="live-dot">● &nbsp; Ao vivo</span><span className="channel-pill">▦ &nbsp; 1 link · todos os canais</span></div></section>

    <section id="como" className="section steps"><span className="eyebrow">Como funciona</span><h2>Sua página profissional pronta em <em>menos de 3 minutos.</em></h2><div className="step-grid">{[["01","Crie do seu jeito","Personalize cores, logo, links, WhatsApp, Pix, catálogo, redes sociais e muito mais. Sem programação."],["02","Publique instantaneamente","Sua página fica online na hora, com um link exclusivo para compartilhar onde quiser."],["03","Compartilhe e converta","Adicione na bio do Instagram, envie pelo WhatsApp, use no QR Code ou cartão NFC. Facilite o contato e transforme visitantes em clientes."]].map(([n,t,d])=><article className="step" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></section>

    <section className="feature-band"><div className="section"><span className="eyebrow">Na prática</span><h2>Feito pra converter — <em>não só pra bonito.</em></h2><p className="lead">Cada recurso pensado pra transformar visita em cliente. Veja como fica no celular do seu público.</p><div className="feature-list">{features.map((f,i)=><article className={i%2 ? "feature reverse" : "feature"} key={f.title}><div className="feature-image"><img src={f.image} alt={f.title}/></div><div className="feature-copy"><span className="tag">{f.tag}</span><h3>{f.title}</h3><p>{f.text}</p></div></article>)}</div></div></section>

    <section className="analytics"><div className="section analytics-grid"><div><span className="eyebrow dark">Analytics em tempo real</span><h2>Saiba de onde vem <em>cada clique.</em></h2><p className="lead">Chega de achismo. Descubra qual rede social realmente traz clientes, qual botão converte mais e em que dispositivo seu público te acessa — tudo atualizado ao vivo.</p><div className="metric-list">{metrics.map(({ Icon, title })=><div className="metric" key={title}><Icon size={20}/><span>{title}</span></div>)}</div></div><div><img className="dashboard" src={analyticsImage} alt="Painel de analytics em tempo real"/><div className="pills"><span>Dados ao vivo</span><span>Sem código</span><span>LGPD friendly</span></div></div></div></section>

    <section id="exemplos" className="section examples"><span className="eyebrow">Exemplos reais</span><h2>Serve pro seu <em>negócio também.</em></h2><p className="lead">De barbearia a consultório, cada mini-site é único como sua marca.</p><div className="example-grid">{[[shapeImage,"Shape","Beleza"],[natuImage,"NatuPet","Pet Shop"],[primeImage,"Barbearia Prime","Barbearia"],[mooviImage,"Mooviloc","Aluguel de motos"]].map(([src,name,type])=><article className="example" key={name}><img src={src} alt={`Mini-site de ${name}`}/><div><strong>{name}</strong><span>{type}</span></div></article>)}</div></section>

    <section id="preco" className="pricing"><div className="section"><span className="eyebrow">Preço</span><h2>Escolha o plano que <em>cabe no seu jogo.</em></h2><p className="lead">Um site pra você ou uma pilha pra agência. Sem taxa de setup em nenhum.</p><div className="plan-grid">{plans.map(p=><article className={p.hot ? "plan featured" : "plan"} key={p.name}><span className="plan-label">{p.label}</span><h3>{p.name}</h3><p>{p.desc}</p><div className="price">{p.price}{!p.disabled && <small>/mês</small>}</div><span className="plan-detail">{p.detail}</span><ul>{p.items.map(x=><li key={x}><Check size={16}/>{x}</li>)}</ul><a className={p.disabled ? "btn disabled" : p.hot ? "btn pink" : "btn dark-btn"} href={p.disabled ? undefined : "https://www.coonexta.com.br/checkout"}>{p.cta}<ArrowRight size={16}/></a></article>)}</div></div></section>

    <section id="faq" className="section faq"><div className="faq-head"><span className="eyebrow">Objeções, respondidas</span><h2>Aquela dúvida que você tá <em>pensando agora.</em></h2><p className="lead">A gente sabe que trocar de ferramenta dá preguiça. Por isso responde tudo sem enrolação.</p></div><div className="faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}<ChevronDown size={20}/></summary><p>{a}</p></details>)}</div></section>

    <section className="final-cta"><div className="section"><h2>Pronto pra ter um cartão que abre sozinho?</h2><p>Cancela quando quiser. E se você não amar, a gente devolve seu dinheiro.</p><div className="actions center"><a className="btn lime" href="https://www.coonexta.com.br/checkout?plano=pro">Começar agora — R$ 97,90/mês <ArrowRight size={17}/></a><a className="btn outline" href="#exemplos">Ver exemplos</a></div></div></section>
    <footer><div className="section footer-grid"><Logo/><p>Sua presença digital completa em um único lugar.</p><span>© 2026 Vision</span></div></footer>
    <a className="whatsapp" href="https://wa.me/5519993082135" target="_blank" rel="noopener noreferrer" aria-label="Fale conosco no WhatsApp">
      <svg viewBox="0 0 32 32" role="img" aria-hidden="true"><path fill="currentColor" d="M16.04 3C8.84 3 3 8.73 3 15.8c0 2.48.73 4.9 2.1 6.96L3.72 27.8l5.2-1.34a13.2 13.2 0 0 0 7.11 2.04h.01C23.24 28.5 29 22.77 29 15.8 29 8.73 23.24 3 16.04 3Zm0 23.34a11.1 11.1 0 0 1-5.65-1.53l-.4-.24-3.08.8.82-2.95-.26-.42a10.48 10.48 0 0 1-1.7-5.72c0-5.82 4.75-10.55 10.6-10.55 5.83 0 10.58 4.73 10.58 10.55 0 5.81-4.75 10.54-10.6 10.54Zm5.81-7.9c-.32-.16-1.88-.92-2.17-1.03-.29-.1-.5-.16-.72.16-.21.32-.82 1.03-1 1.24-.19.21-.38.24-.7.08-.32-.16-1.34-.49-2.55-1.57a9.56 9.56 0 0 1-1.77-2.18c-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.31.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.29.31-1.11 1.08-1.11 2.63 0 1.56 1.14 3.06 1.3 3.27.16.21 2.24 3.4 5.42 4.77.76.32 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.76 2.14-1.5.27-.74.27-1.37.19-1.5-.08-.14-.29-.22-.61-.38Z"/></svg>
    </a>
  </main>;
}
