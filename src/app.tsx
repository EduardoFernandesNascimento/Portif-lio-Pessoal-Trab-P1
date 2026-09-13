// src/App.tsx
import { useState } from 'react';
import './App.css'; 

// IMPORTAÇÃO DA SUA FOTO EDITADA:
// Certifique-se de salvar a imagem em: src/assets/eduardo-perfil.png
import fotoEduardo from './assets/eduardo-perfil.png';
import apresentacaoEduardo from './assets/apresentacao_Eduardo-dev_compat.wav';

interface SkillCard {
  id: number;
  title: string;
  description: string;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lista com as suas habilidades reais (Cumpre o requisito de mínimo 3 cards)
  const skills: SkillCard[] = [
    { id: 1, title: 'Python', description: 'Desenvolvimento de scripts básicos, lógica de programação e automações estruturadas.' },
    { id: 2, title: 'React', description: 'Criação de interfaces web modernas com componentes dinâmicos, reutilizáveis e responsivos.' },
    { id: 3, title: 'Node.js', description: 'Fundamentos de back-end, gerenciamento de pacotes com npm e construção de APIs simples.' },
  ];

  return (
    <div className="portfolio-container">
      {/* HEADER E MENU SEMÂNTICO (Garante os critérios de usabilidade e estrutura HTML5) */}
      <header>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir Menu">
          ☰
        </button>
        <nav className={menuOpen ? 'nav-active' : ''}>
          <ul>
            <li><a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre</a></li>
            <li><a href="#habilidades" onClick={() => setMenuOpen(false)}>Habilidades</a></li>
            <li><a href="#contato" onClick={() => setMenuOpen(false)}>Contato</a></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* SEÇÃO INÍCIO (Com a animação CSS obrigatória e sua foto oficial implantada) */}
        <section id="inicio" className="hero-section">
          <div className="hero-content">
            <h1 className="pulse-animation">Eduardo Fernandes do Nascimento</h1>
            <p className="subtitle">Estudante de Engenharia de Software | Univassouras</p>
            <p>Seja bem-vindo ao meu espaço profissional. Desenvolvedor Júnior em constante evolução.</p>
            <a href="#habilidades" className="cta-button">Ver Habilidades</a>
            <div className="hero-drawing" aria-hidden="true">
              <svg viewBox="0 0 360 116" role="presentation">
                <path className="drawing-cyan" d="M4 88h78l26-52h66l22 34h76l22-48h72" />
                <path className="drawing-coral" d="M4 102h112l18-26h62l18 18h78" />
                <circle className="drawing-node drawing-node-cyan" cx="108" cy="36" r="5" />
                <circle className="drawing-node drawing-node-coral" cx="196" cy="70" r="5" />
                <circle className="drawing-node drawing-node-lime" cx="296" cy="22" r="5" />
                <rect className="drawing-frame" x="14" y="12" width="54" height="22" rx="2" />
                <path className="drawing-grid" d="M18 18h46M18 24h32M18 30h40" />
              </svg>
            </div>
          </div>
          
          {/* MÍDIA 1 OBRIGATÓRIA: Sua foto tratada integrada dinamicamente */}
          <div className="profile-img-container">
            <img 
              src={fotoEduardo} 
              alt="Foto de perfil profissional de Eduardo Fernandes do Nascimento" 
              className="profile-img" 
            />
          </div>
        </section>

        {/* SEÇÃO SOBRE */}
        <section id="sobre">
          <h2>Sobre Mim</h2>
          <div className="about-drawing" aria-hidden="true">
            <svg viewBox="0 0 210 150" role="presentation">
              <path className="about-line about-line-cyan" d="M18 30h54l24 28h62" />
              <path className="about-line about-line-coral" d="M18 104h42l20-24h38l22 24h32" />
              <rect className="about-box" x="18" y="18" width="42" height="24" rx="3" />
              <rect className="about-box about-box-lime" x="144" y="47" width="42" height="24" rx="3" />
              <rect className="about-box about-box-coral" x="78" y="91" width="42" height="24" rx="3" />
              <circle className="about-pulse" cx="96" cy="58" r="10" />
              <circle className="about-dot about-dot-cyan" cx="24" cy="132" r="4" />
              <circle className="about-dot about-dot-lime" cx="187" cy="112" r="4" />
            </svg>
          </div>
          <p>
            Sou estudante de Engenharia de Software na Univassouras (Campus Saquarema). 
            Sou um iniciante apaixonado por tecnologia e programação, focado em construir uma base sólida 
            tanto em desenvolvimento Front-End quanto Back-End. Estou em busca de aprendizado contínuo e 
            futuras oportunidades de estágio na área de engenharia de software.
          </p>
          
          {/* MÍDIA 2 OBRIGATÓRIA: Áudio demonstrativo para cumprir a exigência de mídias de tipos diferentes */}
          <div className="audio-container">
            <p className="audio-label">Apresentação Pessoal em Áudio:</p>
            <audio className="audio-player" controls src={apresentacaoEduardo}>
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        </section>

        {/* SEÇÃO HABILIDADES */}
        <section id="habilidades">
          <h2>Minhas Habilidades</h2>
          <div className="skills-drawing" aria-hidden="true">
            <svg viewBox="0 0 180 120" role="presentation">
              <circle className="orbit orbit-one" cx="90" cy="60" r="45" />
              <circle className="orbit orbit-two" cx="90" cy="60" r="27" />
              <path className="orbit-line" d="M28 60h124M90 8v104" />
              <circle className="orbit-core" cx="90" cy="60" r="8" />
              <circle className="orbit-dot orbit-dot-coral" cx="56" cy="27" r="4" />
              <circle className="orbit-dot orbit-dot-lime" cx="129" cy="88" r="4" />
            </svg>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.id} className="skill-card">
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SEÇÃO CONTATO */}
        <section id="contato">
          <h2>Contato</h2>
          <div className="contact-drawing" aria-hidden="true">
            <svg viewBox="0 0 220 150" role="presentation">
              <path className="contact-wave contact-wave-cyan" d="M12 74h38l18-38 26 76 24-52 20 28h70" />
              <path className="contact-wave contact-wave-coral" d="M12 112h48l18-18h44l16-32h70" />
              <circle className="contact-node contact-node-cyan" cx="94" cy="74" r="7" />
              <circle className="contact-node contact-node-coral" cx="118" cy="60" r="5" />
              <circle className="contact-node contact-node-lime" cx="188" cy="88" r="6" />
              <path className="contact-signal" d="M28 30h34M28 38h22M156 22h36M156 30h24" />
            </svg>
          </div>
          <p>Se você deseja debater projetos ou oportunidades, entre em contato através dos canais abaixo:</p>
          <ul className="contact-links">
            <li>📧 E-mail: <a href="mailto:dudufernasc6789@gmail.com">dudufernasc6789@gmail.com</a></li>
            <li>🐙 GitHub: <a href="https://github.com/EduardoFernandesNascimento" target="_blank" rel="noreferrer">https://github.com/EduardoFernandesNascimento</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
}
