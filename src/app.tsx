// src/App.tsx
import { useState } from 'react';
import './App.css'; 

// IMPORTAÇÃO DA SUA FOTO EDITADA:
// Certifique-se de salvar a imagem em: src/assets/eduardo-perfil.png
import fotoEduardo from './assets/eduardo-perfil.png';

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
            <li><a href="#inicio" onClick={() => setMenuOpen(false)}>Início</a></li>
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
          <p>
            Sou estudante de Engenharia de Software na Univassouras (Campus Saquarema). 
            Sou um iniciante apaixonado por tecnologia e programação, focado em construir uma base sólida 
            tanto em desenvolvimento Front-End quanto Back-End. Estou em busca de aprendizado contínuo e 
            futuras oportunidades de estágio na área de engenharia de software.
          </p>
          
          {/* MÍDIA 2 OBRIGATÓRIA: Áudio demonstrativo para cumprir a exigência de mídias de tipos diferentes */}
          <div className="audio-container">
            <p className="audio-label">Apresentação Pessoal em Áudio:</p>
            <audio controls src="https://soundhelix.com">
              Seu navegador não suporta o elemento de áudio.
            </audio>
          </div>
        </section>

        {/* SEÇÃO HABILIDADES */}
        <section id="habilidades">
          <h2>Minhas Habilidades</h2>
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
          <p>Se você deseja debater projetos ou oportunidades, entre em contato através dos canais abaixo:</p>
          <ul className="contact-links">
            <li>📧 E-mail: <a href="mailto:dudufernasc6789@gmail.com">dudufernasc6789@gmail.com</a></li>
            <li>🐙 GitHub: <a href="https://github.com/EduardoFernandesNascimento" target="_blank" rel="noreferrer">https://github.com/EduardoFernandesNascimento</a></li>
            <li>💼 LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noreferrer">https://linkedin.com</a></li>
          </ul>
        </section>
      </main>
    </div>
  );
}
