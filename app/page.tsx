'use client';

import { FormEvent, useEffect } from 'react';
import Link from 'next/link';

const experiences = [
  {
    period: 'MAR 2024 — NOW',
    company: 'Grupo RIC',
    role: 'Junior Data Analyst · Financial Intelligence',
    description: 'Designing strategic Power BI dashboards, robust Python ETL pipelines, and complex SQL analysis across Oracle and BigQuery — turning financial data into decisions.',
    stack: ['POWER BI', 'PYTHON', 'SQL', 'BIGQUERY'],
  },
  {
    period: 'AUG 2023 — MAR 2024',
    company: 'SLB OneSubsea',
    role: 'Supplier Quality Intern',
    description: 'Built performance dashboards and KPIs while collaborating across teams to make supplier quality processes clearer, faster, and more measurable.',
    stack: ['DATA VIZ', 'KPIs', 'EXCEL', 'QUALITY'],
  },
  {
    period: 'FEB 2023 — AUG 2023',
    company: 'RM2 Intelligence Partner',
    role: 'Data Intern',
    description: 'Started a career in business intelligence by supporting dashboard creation, preparing datasets, and developing hands-on fluency in SQL and analytics.',
    stack: ['BI', 'SQL', 'DATA PREP', 'EXCEL'],
  },
];

const capabilities = [
  { number: '01', title: 'Analytics Engineering', text: 'Reliable transformation layers that turn raw inputs into analysis-ready data people can trust.', tags: ['SQL', 'BigQuery', 'Oracle'] },
  { number: '02', title: 'Data Products', text: 'Decision-focused dashboards with clean information architecture and sharp visual storytelling.', tags: ['Power BI', 'Data modeling', 'DAX'] },
  { number: '03', title: 'Automation & ETL', text: 'Practical pipelines that remove repetitive work and deliver accurate reporting at speed.', tags: ['Python', 'Pandas', 'Openpyxl'] },
  { number: '04', title: 'Applied Intelligence', text: 'Exploring machine learning and software patterns to make analytics more scalable and useful.', tags: ['ML', 'Software', 'APIs'] },
];

export default function Home() {
  useEffect(() => {
    const root = document.documentElement;
    const onPointerMove = (event: PointerEvent) => {
      root.style.setProperty('--pointer-x', `${event.clientX / window.innerWidth - 0.5}`);
      root.style.setProperty('--pointer-y', `${event.clientY / window.innerHeight - 0.5}`);
    };
    const onScroll = () => root.style.setProperty('--scroll-y', `${window.scrollY}`);
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.14 },
    );
    document.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element));
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      observer.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '');
    const email = String(form.get('email') || '');
    const message = String(form.get('message') || '');
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    window.location.href = `mailto:marcosaureliokrunn@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="site-shell">
      <a className="skip-link" href="#content">Skip to content</a>
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Marcos Krunn — home">MK<span>.</span></a>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#journey">Journey</a>
          <Link href="/blog">Blog</Link>
          <a className="nav-cta" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
        </div>
      </nav>

      <div id="content">
        <section className="hero" id="top">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="hero-copy">
            <p className="eyebrow"><span /> Available for ambitious data projects</p>
            <h1>I turn messy data into<em> clear momentum.</em></h1>
            <p className="hero-lede">
              I&apos;m Marcos Krunn, an Analytics Engineer building trustworthy data systems,
              sharp dashboards, and software that helps people move faster.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <span aria-hidden="true">↓</span></a>
              <a className="button button-ghost" href="https://github.com/marcosirenos" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
            </div>
          </div>

          <div className="data-orbit" aria-hidden="true">
            <div className="orbit-ring orbit-ring-one" />
            <div className="orbit-ring orbit-ring-two" />
            <div className="glass-panel signal-card">
              <div className="terminal-head"><i /><i /><i /><span>pipeline_status.sql</span></div>
              <div className="signal-copy"><span>01</span><code>select trust from data</code></div>
              <div className="signal-copy"><span>02</span><code>where quality = <b>&apos;high&apos;</b>;</code></div>
              <div className="metric-row">
                <div><strong>99.9%</strong><small>RELIABILITY</small></div>
                <div><strong>2.4M</strong><small>ROWS / DAY</small></div>
              </div>
            </div>
            <div className="float-chip chip-python">PYTHON</div>
            <div className="float-chip chip-sql">SQL</div>
            <div className="float-chip chip-dbt">ETL</div>
          </div>

          <div className="hero-foot">
            <span>Curitiba, Brazil</span>
            <span>Analytics engineering · Data products · Automation</span>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            <span>PYTHON</span><i>✦</i><span>POWER BI</span><i>✦</i><span>SQL</span><i>✦</i><span>BIGQUERY</span><i>✦</i><span>DATA MODELING</span><i>✦</i><span>ETL</span><i>✦</i>
            <span>PYTHON</span><i>✦</i><span>POWER BI</span><i>✦</i><span>SQL</span><i>✦</i><span>BIGQUERY</span><i>✦</i><span>DATA MODELING</span><i>✦</i><span>ETL</span><i>✦</i>
          </div>
        </div>

        <section className="section about" id="about">
          <div className="section-kicker" data-reveal><span>01</span> THE SIGNAL</div>
          <div className="about-grid">
            <h2 data-reveal>Data is only valuable when it creates <em>clarity.</em></h2>
            <div className="about-copy" data-reveal>
              <p>I work at the intersection of analytics and software engineering — where solid pipelines, thoughtful interfaces, and business context become one useful system.</p>
              <p>Today, I support Financial Intelligence at Grupo RIC. In 2026, I&apos;m completing my Software Engineering degree at UNIBRASIL.</p>
              <a className="text-link" href="#journey">See the full journey <span>↘</span></a>
            </div>
          </div>
          <div className="stats-grid" data-reveal>
            <div><strong>2+</strong><span>YEARS IN DATA</span></div>
            <div><strong>3</strong><span>COMPANIES SHAPED THE JOURNEY</span></div>
            <div><strong>&apos;26</strong><span>SOFTWARE ENGINEERING GRAD</span></div>
            <div><strong>∞</strong><span>CURIOSITY FOR BETTER SYSTEMS</span></div>
          </div>
        </section>

        <section className="section capabilities" id="work">
          <div className="section-kicker" data-reveal><span>02</span> WHAT I BUILD</div>
          <div className="section-heading" data-reveal>
            <h2>From raw data to<br/><em>real-world leverage.</em></h2>
            <p>End-to-end thinking across the modern analytics workflow.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map(item => (
              <article className="capability-card" data-reveal key={item.number}>
                <div className="card-number">/{item.number}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <div className="tag-row">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <div className="card-arrow" aria-hidden="true">↗</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section journey" id="journey">
          <div className="section-kicker" data-reveal><span>03</span> EXPERIENCE</div>
          <div className="journey-layout">
            <div className="journey-intro" data-reveal>
              <h2>Built through<br/><em>real problems.</em></h2>
              <p>Every role sharpened a different layer: business context, data craft, visual judgment, and engineering discipline.</p>
              <div className="education-card glass-panel">
                <small>EDUCATION</small>
                <strong>Software Engineering</strong>
                <span>UNIBRASIL · 2023—2026</span>
                <b>Graduating this year</b>
              </div>
            </div>
            <div className="timeline">
              {experiences.map((item, index) => (
                <article className="timeline-item" data-reveal key={item.company}>
                  <div className="timeline-index">0{index + 1}</div>
                  <div className="timeline-content">
                    <small>{item.period}</small>
                    <h3>{item.company}</h3>
                    <h4>{item.role}</h4>
                    <p>{item.description}</p>
                    <div className="tag-row">{item.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section principle">
          <div className="principle-orbit" aria-hidden="true"><i /><i /><i /></div>
          <p className="section-kicker" data-reveal><span>04</span> OPERATING PRINCIPLE</p>
          <blockquote data-reveal>
            “Technology exists to serve people. The best data work makes the complex feel <em>inevitable.</em>”
          </blockquote>
          <p className="signature" data-reveal>— MARCOS KRUNN</p>
        </section>

        <section className="contact" id="contact">
          <div className="contact-copy" data-reveal>
            <p className="section-kicker"><span>05</span> START A CONVERSATION</p>
            <h2>Have a difficult data problem?</h2>
            <h3>Let&apos;s make it clear.</h3>
            <p className="contact-lede">Open to analytics engineering opportunities, collaborations, and conversations about data, software, and useful technology.</p>
            <div className="contact-links">
              <a href="mailto:marcosaureliokrunn@gmail.com">marcosaureliokrunn@gmail.com <span>↗</span></a>
              <a href="https://github.com/marcosirenos" target="_blank" rel="noreferrer">github.com/marcosirenos <span>↗</span></a>
            </div>
          </div>
          <form className="contact-form glass-panel" onSubmit={sendEmail} data-reveal>
            <div className="form-head"><span>NEW_MESSAGE</span><i>● READY</i></div>
            <label>Your name<input required name="name" type="text" autoComplete="name" placeholder="Jane Smith" /></label>
            <label>Your email<input required name="email" type="email" autoComplete="email" placeholder="jane@company.com" /></label>
            <label>What are we building?<textarea required name="message" rows={4} placeholder="Tell me about the opportunity or problem..." /></label>
            <button type="submit">Open in email <span aria-hidden="true">↗</span></button>
            <small>This opens your default email app with the message ready to send.</small>
          </form>
        </section>
      </div>

      <footer>
        <a className="wordmark" href="#top">MK<span>.</span></a>
        <p>© 2026 MARCOS KRUNN · BUILT WITH INTENTION</p>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  );
}
