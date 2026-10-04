import { useEffect, useMemo, useState } from 'react';

const projects = [
  { number: '01', type: 'WEB APP', category: 'web', title: 'Inventory Management App', description: 'An interactive inventory management application for tracking products, quantities, prices, profit and total stock value.', features: ['Add products dynamically', 'Remove products', 'Calculate stock value', 'Calculate profit per item', 'Low-stock warning system'], tech: ['HTML', 'CSS', 'JavaScript'], demo: '#' },
  { number: '02', type: 'WEBSITE', category: 'web', title: 'FitLab by Dee', description: 'A responsive fashion website designed to showcase different clothing collections through a modern visual interface.', features: ['Responsive interface', 'Collection gallery', 'Bridal collection', 'Corporate collection', 'Traditional collection'], tech: ['HTML', 'CSS', 'JavaScript'], demo: '#' },
  { number: '03', type: 'WEB APP', category: 'web', title: 'Login Interface', description: 'A responsive login interface featuring client-side validation, password visibility controls and user-friendly feedback.', features: ['Input validation', 'Password visibility', 'Error handling', 'Responsive design'], tech: ['HTML', 'CSS', 'JavaScript'], demo: '#' },
  { number: '04', type: 'DATA ANALYTICS', category: 'data', title: 'Interactive Data Dashboard', description: 'A data analytics project designed to transform raw information into meaningful KPIs, trends and interactive visualizations for decision-making.', features: ['Data cleaning', 'KPI development', 'Interactive visualizations', 'Trend analysis'], tech: ['Power BI', 'SQL', 'Excel', 'Data Visualization'] }
];

const skills = [
  ['</>', 'Frontend Development', 'Technologies I use to build responsive web interfaces.', ['HTML5', 'CSS', 'JavaScript', 'Responsive Design', 'DOM Manipulation']],
  ['{ }', 'Programming & Data', 'Technologies used for programming, data manipulation and analysis.', ['Python', 'Pandas', 'NumPy', 'SQL']],
  ['◫', 'Data Analytics', 'Tools I use to analyze, visualize and communicate data.', ['Power BI', 'Excel', 'Data Visualization', 'Statistics']],
  ['⚙', 'Developer Tools', 'Tools that support my software development and analytical workflow.', ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'SQL Server']]
];

const navItems = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState('all');
  const [activeSection, setActiveSection] = useState('home');
  const visibleProjects = useMemo(() => projects.filter((project) => filter === 'all' || project.category === filter), [filter]);

  useEffect(() => {
    const sections = [...document.querySelectorAll('main section[id]')];
    const onScroll = () => {
      const section = sections.filter((item) => window.scrollY >= item.offsetTop - 150).at(-1);
      if (section) setActiveSection(section.id);
    };
    const onResize = () => { if (window.innerWidth > 700) setMenuOpen(false); };
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onResize); };
  }, []);

  return <>
    <header className="header"><nav className="navbar">
      <a href="#home" className="logo">Sarah<span>.</span></a>
      <button className="menu-btn" aria-label="Open navigation menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? '✕' : '☰'}</button>
      <ul className={`nav-links${menuOpen ? ' show' : ''}`}>{navItems.map((item) => <li key={item}><a className={activeSection === item ? 'active-link' : ''} href={`#${item}`} onClick={() => setMenuOpen(false)}>{item}</a></li>)}</ul>
    </nav></header>
    <main>
      <section className="hero" id="home"><div className="hero-content"><p className="hero-label">SOFTWARE DEVELOPER</p><h1>Hi, I&apos;m <span>Sarah Azuka.</span></h1><h2>I build useful digital solutions.</h2><p className="hero-description">I&apos;m a software developer and data analyst focused on building responsive web applications and data-driven solutions using JavaScript, Python, SQL and modern development tools.</p><div className="social-links"><a href="https://github.com/sarah-azuka" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/sarah-azuka" target="_blank" rel="noreferrer">LinkedIn ↗</a><a href="mailto:sarahobiajuluazuka@gmail.com">Email Me ↗</a></div></div><div className="hero-image"><div className="image-background"><img src="/_PVI3080.JPG" alt="Sarah Azuka - Software Developer and Data Analyst" /></div></div></section>
      <section className="section" id="about"><Heading label="ABOUT ME" title="Building at the intersection of software and data." /><div className="about-grid"><div className="about-text"><p>I&apos;m Sarah Azuka, a software developer and data analyst with experience building practical digital and data-driven solutions.</p><p>My background in data analytics gives me a different perspective on software development. I think about how an application looks and the information it collects, processes and communicates.</p><p>I work with HTML, CSS, JavaScript, Python, SQL, Pandas, Power BI, and Excel.</p><p>I&apos;m particularly interested in software development, healthcare technology, digital health and applications that solve practical problems.</p></div><div className="about-cards">{[['01','Software Development','Building responsive and interactive web applications.'],['02','Data Analytics','Transforming data into useful insights and visualizations.'],['03','Healthcare Technology','Exploring how software and data can improve healthcare delivery.']].map(([n,t,d]) => <div className="about-card" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>
      <section className="section alternate-section" id="skills"><Heading label="MY TOOLKIT" title="Skills & Technologies" /><div className="skills-grid">{skills.map(([icon,title,description,tags]) => <div className="skill-card" key={title}><div className="skill-icon">{icon}</div><h3>{title}</h3><p>{description}</p><div className="skill-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div>)}</div></section>
      <section className="section" id="projects"><Heading label="MY WORK" title="Featured Projects" description="A selection of software development, data analytics and healthcare projects I&apos;ve worked on." /><div className="project-filters">{[['all','All'],['web','Web Development'],['data','Data Analytics'],['health','Healthcare']].map(([value,label]) => <button className={`filter-btn${filter === value ? ' active' : ''}`} key={value} onClick={() => setFilter(value)}>{label}</button>)}</div><div className="projects-grid">{visibleProjects.map((project) => <article className="project-card" key={project.number}><div className="project-top"><span className="project-number">{project.number}</span><span className="project-type">{project.type}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-features">{project.features.map((feature) => <p key={feature}>✓ {feature}</p>)}</div><div className="tech-stack">{project.tech.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-links">{project.demo && <a href={project.demo}>Live Demo ↗</a>}<a href="https://github.com/sarah-azuka" target="_blank" rel="noreferrer">GitHub ↗</a></div></article>)}</div></section>
      <section className="section alternate-section" id="experience"><Heading label="EXPERIENCE" title="Experience & Leadership" /><div className="experience-container"><Experience title="Data Analytics Instructor / Facilitator" company="Itech Vocational Charity" current text="Facilitate practical data analytics training and support learners in developing industry-relevant analytical skills." items={['Facilitate SQL training and practical database exercises.','Teach data visualization and Power BI.','Support learners through assignments and practical projects.','Facilitate statistics and probability concepts for data analytics.']} /><Experience title="Program Support Officer" company="Itech Development Charities" text="Support technology-focused programmes designed to expand digital skills and opportunities for young people." items={['Support project planning and implementation.','Coordinate technology and digital skills initiatives.','Contribute to programme proposals and reporting.']} /></div></section>
      <section className="contact-section" id="contact"><div className="contact-container"><p className="contact-label">GET IN TOUCH</p><h2>Let&apos;s build something useful.</h2><p className="contact-description">I&apos;m open to software development, data analytics, digital health, internship and collaborative opportunities.</p><div className="contact-grid"><Contact href="mailto:sarahobiajuluazuka@gmail.com" label="Email" text="sarahobiajuluazuka@gmail.com" /><Contact href="https://www.linkedin.com/in/sarah-azuka" label="LinkedIn" text="Connect with me ↗" external /><Contact href="https://github.com/sarah-azuka" label="GitHub" text="View my repositories ↗" external /></div><div className="contact-action"><a href="mailto:sarahobiajuluazuka@gmail.com?subject=Opportunity%20for%20Sarah%20Azuka" className="btn primary-btn">Send Me an Email</a></div></div></section>
    </main>
    <footer><div className="footer-container"><a href="#home" className="footer-logo">Sarah<span>.</span></a><p>© {new Date().getFullYear()} Sarah Azuka. Built with React.</p><div className="footer-links"><a href="https://github.com/sarah-azuka" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/sarah-azuka" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:sarahobiajuluazuka@gmail.com">Email</a><a href="#home" className="back-top">Back to top ↑</a></div></div></footer>
  </>;
}

function Heading({ label, title, description }) { return <div className="section-heading"><p className="section-label">{label}</p><h2>{title}</h2>{description && <p className="section-description">{description}</p>}</div>; }
function Experience({ title, company, current, text, items }) { return <article className="experience-card"><div className="experience-header"><div><h3>{title}</h3><p className="company">{company}</p></div>{current && <span className="date">Current</span>}</div><p>{text}</p><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul></article>; }
function Contact({ href, label, text, external }) { return <a href={href} className="contact-card" target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}><span>{label}</span><strong>{text}</strong></a>; }
