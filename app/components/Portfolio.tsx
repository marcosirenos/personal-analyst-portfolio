import Link from 'next/link';

type Locale = 'pt' | 'en';

const content = {
  pt: {
    nav: { about: 'Sobre', work: 'Trabalho', experience: 'Experiência', writing: 'Artigos', contact: 'Contato' },
    switchLabel: 'Mudar idioma',
    intro: 'Engenheiro de analytics em Curitiba.',
    bio: 'Trabalho com dados, relatórios e ferramentas internas. Hoje faço parte do time de Inteligência do Grupo RIC.',
    location: 'Curitiba, Brasil',
    availability: 'Dados · Sistemas · Software',
    aboutLabel: 'Sobre',
    aboutTitle: 'Informação clara, sistemas simples.',
    aboutBody: 'Meu trabalho combina contexto de negócio com SQL, Python e visualização. Gosto de reduzir trabalho manual e deixar a informação fácil de encontrar e usar.',
    workLabel: 'Trabalho',
    workTitle: 'O que faço',
    services: [
      { title: 'Engenharia de dados', text: 'Modelos em SQL e pipelines em Python para análises recorrentes.', tools: 'SQL · Python · BigQuery · Oracle' },
      { title: 'Relatórios', text: 'Dashboards em Power BI organizados em torno das perguntas de quem usa.', tools: 'Power BI · DAX · Modelagem' },
      { title: 'Ferramentas internas', text: 'Interfaces web e automações para times de dados e de negócio.', tools: 'Web · APIs · Automação' },
    ],
    experienceLabel: 'Experiência',
    experienceTitle: 'Onde trabalhei',
    experiences: [
      { period: '2025 — hoje', company: 'Grupo RIC', role: 'Analytics Engineer · Inteligência' },
      { period: '2024 — 2025', company: 'SLB OneSubsea', role: 'Estagiário de Qualidade de Fornecedores' },
      { period: '2023 — 2024', company: 'RM2 Intelligence Partner', role: 'Estagiário de Dados' },
    ],
    education: 'Engenharia de Software · UNIBRASIL · 2023—2026',
    contactLabel: 'Contato',
    contactTitle: 'Vamos conversar.',
    contactBody: 'Para falar sobre uma vaga, projeto ou trocar ideias, envie um e-mail.',
    email: 'Enviar e-mail',
    github: 'GitHub',
    footer: 'Engenheiro de analytics · Curitiba',
    skip: 'Pular para o conteúdo',
  },
  en: {
    nav: { about: 'About', work: 'Work', experience: 'Experience', writing: 'Writing', contact: 'Contact' },
    switchLabel: 'Change language',
    intro: 'Analytics engineer in Curitiba.',
    bio: 'I work with data, reporting, and internal tools. I am currently part of the Intelligence team at Grupo RIC.',
    location: 'Curitiba, Brazil',
    availability: 'Data · Systems · Software',
    aboutLabel: 'About',
    aboutTitle: 'Clear information, simple systems.',
    aboutBody: 'My work combines business context with SQL, Python, and visualization. I like removing manual work and making information easy to find and use.',
    workLabel: 'Work',
    workTitle: 'What I do',
    services: [
      { title: 'Data engineering', text: 'SQL models and Python pipelines for recurring analysis.', tools: 'SQL · Python · BigQuery · Oracle' },
      { title: 'Reporting', text: 'Power BI dashboards organized around the questions people actually ask.', tools: 'Power BI · DAX · Data modeling' },
      { title: 'Internal tools', text: 'Web interfaces and automation for data and business teams.', tools: 'Web · APIs · Automation' },
    ],
    experienceLabel: 'Experience',
    experienceTitle: 'Where I have worked',
    experiences: [
      { period: '2025 — now', company: 'Grupo RIC', role: 'Analytics Engineer · Intelligence' },
      { period: '2024 — 2025', company: 'SLB OneSubsea', role: 'Supplier Quality Intern' },
      { period: '2023 — 2024', company: 'RM2 Intelligence Partner', role: 'Data Intern' },
    ],
    education: 'Software Engineering · UNIBRASIL · 2023—2026',
    contactLabel: 'Contact',
    contactTitle: 'Let’s talk.',
    contactBody: 'For a role, a project, or a conversation, send me an email.',
    email: 'Send an email',
    github: 'GitHub',
    footer: 'Analytics engineer · Curitiba',
    skip: 'Skip to content',
  },
} as const;

export function Portfolio({ locale }: { locale: Locale }) {
  const copy = content[locale];
  const isEnglish = locale === 'en';

  return (
    <main className="portfolio-shell" lang={locale === 'pt' ? 'pt-BR' : 'en'}>
      <a className="skip-link" href="#content">{copy.skip}</a>

      <header className="site-header">
        <Link className="site-name" href={isEnglish ? '/en' : '/'} aria-label="Marcos Irenos">
          Marcos Irenos
        </Link>
        <nav className="primary-nav" aria-label={isEnglish ? 'Primary navigation' : 'Navegação principal'}>
          <a href="#about">{copy.nav.about}</a>
          <a href="#work">{copy.nav.work}</a>
          <a href="#experience">{copy.nav.experience}</a>
          <Link href={isEnglish ? '/en/blog' : '/blog'}>{copy.nav.writing}</Link>
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label={copy.switchLabel}>
            <Link className={!isEnglish ? 'is-active' : ''} href="/" hrefLang="pt-BR">PT</Link>
            <span aria-hidden="true">/</span>
            <Link className={isEnglish ? 'is-active' : ''} href="/en" hrefLang="en">EN</Link>
          </div>
          <a className="contact-link" href="#contact">{copy.nav.contact}</a>
        </div>
      </header>

      <div id="content">
        <section className="intro-section" aria-labelledby="intro-title">
          <div className="intro-index" aria-hidden="true">01</div>
          <div className="intro-main">
            <p className="kicker">Marcos Irenos</p>
            <h1 id="intro-title">{copy.intro}</h1>
            <p className="intro-copy">{copy.bio}</p>
          </div>
          <div className="intro-aside">
            <span>{copy.location}</span>
            <span>{copy.availability}</span>
          </div>
          <div className="blue-field" aria-hidden="true">
            <span>MI</span>
            <span>2026</span>
          </div>
        </section>

        <section className="plain-section about-section" id="about" aria-labelledby="about-title">
          <div className="section-meta"><span>02</span><span>{copy.aboutLabel}</span></div>
          <div className="section-content two-column-copy">
            <h2 id="about-title">{copy.aboutTitle}</h2>
            <p>{copy.aboutBody}</p>
          </div>
        </section>

        <section className="plain-section work-section" id="work" aria-labelledby="work-title">
          <div className="section-meta"><span>03</span><span>{copy.workLabel}</span></div>
          <div className="section-content">
            <h2 id="work-title">{copy.workTitle}</h2>
            <div className="service-list">
              {copy.services.map((service, index) => (
                <article className="service-row" key={service.title}>
                  <span className="row-index">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <small>{service.tools}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="plain-section experience-section" id="experience" aria-labelledby="experience-title">
          <div className="section-meta"><span>04</span><span>{copy.experienceLabel}</span></div>
          <div className="section-content">
            <h2 id="experience-title">{copy.experienceTitle}</h2>
            <div className="experience-list">
              {copy.experiences.map(item => (
                <article className="experience-row" key={item.company}>
                  <span>{item.period}</span>
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                </article>
              ))}
              <p className="education-line">{copy.education}</p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="section-meta section-meta-light"><span>05</span><span>{copy.contactLabel}</span></div>
          <div className="contact-content">
            <h2 id="contact-title">{copy.contactTitle}</h2>
            <p>{copy.contactBody}</p>
            <div className="contact-actions">
              <a href="mailto:marcosaureliokrunn@gmail.com">{copy.email}</a>
              <a href="https://github.com/marcosirenos" target="_blank" rel="noreferrer">{copy.github}</a>
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <span>© 2026 Marcos Irenos</span>
        <span>{copy.footer}</span>
        <a href="#content" aria-label={isEnglish ? 'Back to top' : 'Voltar ao topo'}>↑</a>
      </footer>
    </main>
  );
}
