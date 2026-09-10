import React, { useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { AnimatePresence, motion } from 'framer-motion'
import {
  BriefcaseBusiness, Code2, FolderCode,
  Mail, NotebookTabs, UserRound, X
} from 'lucide-react'
import './styles.css'

const LINKS = {
  github: 'https://github.com/Preaw-warinphorn',
  linkedin: 'https://www.linkedin.com/in/warinphorn-trakunsombud-26057b163/',
  email: 'mailto:warinphorn.trakunsombud@outlook.com',
}

const projects = [
  { id: 'hutchison', title: 'Hutchison IT', kicker: 'Web redevelopment · In progress', icon: Code2, featured: true, summary: 'A modern website redevelopment focused on clearer information architecture, stronger usability and maintainable WordPress delivery.', tags: ['WordPress', 'UI/UX', 'Web'] },
  { id: 'tetrix', title: 'Tetrix', kicker: 'Game · JavaFX', icon: FolderCode, summary: 'Interactive Tetris with single and two-player logic, persistent high scores, responsive resizing, audio and AI-based gameplay heuristics.', tags: ['Java', 'JavaFX', 'JSON'], demo: 'https://www.youtube.com/watch?v=MUCsAu3I0Wc' },
  { id: 'brick', title: 'Brick Measure', kicker: 'IoT · Hardware + Web', icon: FolderCode, summary: 'A NodeMCU smart-brick sensor measuring temperature, humidity and vibration, with a live dashboard and real-time safety alerts.', tags: ['C++', 'NodeMCU', 'JavaScript'], demo: 'https://www.youtube.com/watch?v=jNG6OQ4r49c' },
  { id: 'booking', title: 'Event Booking', kicker: 'Full-stack web', icon: FolderCode, summary: 'A Laravel event platform with organiser and attendee flows, validation, capacity controls, duplicate prevention and waiting lists.', tags: ['PHP', 'Laravel', 'MySQL'] },
  { id: 'vibeshift', title: 'VibeShift', kicker: 'NextGen Hackathon 2026', icon: FolderCode, summary: 'A 48-hour mobile web prototype that rewards young professionals for outdoor and social activities through GPS check-ins and partner discounts.', tags: ['UI/UX', 'JavaScript', 'Product'], demo: 'https://youtu.be/so0YU5UxpOo' },
  { id: 'todo', title: 'My Todo List', kicker: 'Mobile · React Native', icon: FolderCode, summary: 'A component-driven mobile task manager with creation, completion tracking, expandable views, validation and persistent local storage.', tags: ['React Native', 'AsyncStorage', 'JavaScript'], demo: 'https://youtu.be/ZJoG8jXaPgE' },
  { id: 'store', title: 'Fake Store App', kicker: 'Mobile · Full-stack', icon: FolderCode, summary: 'A full-stack shopping application with token-based authentication, protected navigation, cart management and REST API integration.', tags: ['React Native', 'Redux Toolkit', 'REST API'], demo: 'https://youtu.be/bDK4HsGLZzU' },
  { id: 'reef', title: 'Reef Through Time', kicker: 'VR · Team lead', icon: FolderCode, summary: 'An immersive desktop VR experience showing the Great Barrier Reef in 2026 and 2050, led across a cross-functional team of six.', tags: ['Unreal Engine 5', 'Blueprint', 'VR'], demo: 'https://www.youtube.com/watch?v=SpFDu9_Z1Is' },
]

const desktopProjects = [projects[1], projects[2], projects[3], projects[7]]

function About() {
  return <div className="window-copy about-copy">
    <p className="eyebrow">ABOUT / PREAW W.</p>
    <h2>Engineer by training.<br/><em>Curious</em> by default.</h2>
    <div className="two-col">
      <p>I’m a Master of Information Technology (Software Development) student at Griffith University, Gold Coast. Before Australia, I spent four years building and optimising COBOL systems across banking and fintech.</p>
      <p>That work taught me how to ship systems that cannot break. Today I combine that discipline with modern full-stack engineering and a growing focus on AI, cloud and cybersecurity.</p>
    </div>
    <div className="status-strip"><span/> Available for casual & internship opportunities · Gold Coast, AU</div>
  </div>
}

function Resume() {
  const roles = [
    ['NTT Data Thailand', 'COBOL Developer — Credit Card Systems', 'Built and optimised high-volume credit-card processing programs with a focus on security, data integrity and transaction stability.'],
    ['SS&C Technologies', 'Provident Fund System Developer', 'Developed mainframe modules, improved legacy flows and performed testing, debugging and performance tuning.'],
    ['Nanyang Technological University', 'Research Assistant — Google Maps Web App', 'Developed and tested a research prototype and authored operating procedures for the project team.'],
  ]
  return <div className="window-copy resume-copy"><p className="eyebrow">EXPERIENCE / EDUCATION</p><h2>Four years in systems<br/>that matter.</h2>
    <div className="timeline">{roles.map(([company, role, copy]) => <article key={company}><span className="timeline-dot"/><div><h3>{company}</h3><strong>{role}</strong><p>{copy}</p></div></article>)}</div>
    <section className="education-section">
      <div className="education-heading"><p className="eyebrow">EDUCATION / AUSTRALIA & THAILAND</p><h3>Academic<br/><em>foundation.</em></h3></div>
      <div className="education-cards">
        <article className="education-card education-card-featured"><span>01 · AUSTRALIA</span><h4>Griffith University</h4><strong>Master of Information Technology</strong><p>Software Development</p><small>February 2025 – present · Gold Coast, AU</small></article>
        <article className="education-card education-card-colour"><span>02 · AUSTRALIA</span><h4>Business College at IH</h4><strong>Diploma of Project Management</strong><ul><li>Covered Agile project delivery, risk management, and stakeholder communication.</li></ul><small>July 2023 – June 2024 · Gold Coast, AU</small></article>
        <article className="education-card"><span>03 · THAILAND</span><h4>KMITL</h4><strong>Bachelor of Engineering in Information Engineering</strong><p>Second Class Honours</p><small>August 2014 – May 2018 · Bangkok, Thailand</small></article>
      </div>
    </section>
  </div>
}

function ProjectList({ openProject }) {
  return <div className="window-copy"><p className="eyebrow">SELECTED WORK / 2026</p><h2>Things I’ve<br/><em>shipped.</em></h2>
    <div className="project-list">{projects.map((p, i) => <button key={p.id} onClick={() => openProject(p)}><span>{String(i+1).padStart(2,'0')}</span><div><b>{p.title}</b><small>{p.kicker}</small></div><i>↗</i></button>)}</div>
  </div>
}

function ProjectDetail({ project }) {
  return <div className="project-detail"><div className="project-visual"><project.icon strokeWidth={1}/><span>{project.kicker}</span></div><div className="project-body"><p className="eyebrow">PROJECT / {project.id.toUpperCase()}</p><h2>{project.title}</h2><p className="lead">{project.summary}</p><div className="tag-row">{project.tags.map(t=><span key={t}>{t}</span>)}</div>{project.demo && <a className="text-link" href={project.demo} target="_blank" rel="noreferrer">Watch project demo ↗</a>}</div></div>
}

function Contact() {
  return <div className="window-copy contact-copy"><p className="eyebrow">CONTACT / GOLD COAST</p><h2>Let’s build<br/><em>secure systems.</em></h2><p>Open to casual and internship opportunities across Australia. Valid Australian visa with full work rights.</p><div className="contact-links"><a href={LINKS.email}>Email me <span>↗</span></a><a href="tel:0421615828">0421 615 828 <span>↗</span></a><a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a></div></div>
}

function DesktopWindow({ item, active, onFocus, onClose, openProject, offset }) {
  let content = null
  if (item.type === 'about') content = <About/>
  if (item.type === 'resume') content = <Resume/>
  if (item.type === 'projects') content = <ProjectList openProject={openProject}/>
  if (item.type === 'contact') content = <Contact/>
  if (item.type === 'project') content = <ProjectDetail project={item.project}/>
  return <motion.section drag dragMomentum={false} dragConstraints={{left:-280,right:280,top:-150,bottom:180}} onPointerDown={onFocus} className={`os-window ${active ? 'active' : ''}`} style={{zIndex:item.z, left:`calc(50% + ${offset.x}px)`, top:`calc(50% + ${offset.y}px)`}} initial={{opacity:0,scale:.92,y:24}} animate={{opacity:1,scale:1,y:0}} exit={{opacity:0,scale:.94,y:18}} transition={{type:'spring',stiffness:360,damping:30}}>
    <header className="titlebar"><div className="traffic"><button onPointerDown={e=>e.stopPropagation()} onClick={onClose} aria-label={`Close ${item.title}`} className="close-dot"><X/></button><span/><span/></div><b>{item.title}</b><small>PREAW.W</small></header>{content}
  </motion.section>
}

function Dock({ open }) {
  const items = [
    ['about','About',UserRound],['resume','Experience / Education',NotebookTabs],['projects','Projects',BriefcaseBusiness],
    ['github','GitHub',null,'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'],
    ['linkedin','LinkedIn',null,'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg'],
    ['contact','Contact',Mail]
  ]
  return <nav className="dock" aria-label="Portfolio navigation">{items.map(([id,label,Icon,logo])=><button key={id} className={logo ? `brand-button ${id}-button` : ''} onClick={()=>open(id)} aria-label={label}><span className="tip">{label}</span>{logo ? <img src={logo} alt="" aria-hidden="true"/> : <Icon strokeWidth={1.5}/>}</button>)}</nav>
}

function App() {
  const [windows,setWindows] = useState([])
  const [topZ,setTopZ] = useState(10)
  const date = useMemo(()=>new Intl.DateTimeFormat('en-AU',{weekday:'short',day:'numeric',month:'short'}).format(new Date()),[])
  const focus = id => { const z=topZ+1; setTopZ(z); setWindows(ws=>ws.map(w=>w.id===id?{...w,z}:w)) }
  const close = id => setWindows(ws=>ws.filter(w=>w.id!==id))
  const launch = (type, project) => {
    if (type==='github') return window.open(LINKS.github,'_blank','noopener,noreferrer')
    if (type==='linkedin') return window.open(LINKS.linkedin,'_blank','noopener,noreferrer')
    const id = project ? `project-${project.id}` : type
    if (windows.some(w=>w.id===id)) return focus(id)
    const z=topZ+1; setTopZ(z)
    const titles={about:'About Me',resume:'Experience / Education',projects:'Selected Projects',contact:'Contact'}
    setWindows(ws=>[...ws,{id,type:project?'project':type,project,title:project?.title||titles[type],z}])
  }
  return <main className="desktop-shell">
    <div className="grain"/><header className="menubar"><div className="menu-left"><b className="apple-mark">●</b><b>Finder</b><span>File</span><span>Edit</span><span>View</span><span>Go</span><span>Window</span><span>Help</span></div><div className="menu-right"><span className="control-glyph">◒</span><span className="control-glyph">⌁</span><span className="live-dot"/><span>Available</span><time>{date}</time></div></header>
    <section className="hero-copy"><p>PORTFOLIO / 2026</p><h1>PREAW<br/><span>WARINPHORN.</span></h1><div className="role">FINTECH · FULL STACK · CLOUD<br/>CYBERSECURITY · AI</div></section>
    <div className="desktop-icons">{desktopProjects.map((p,i)=><motion.button key={p.id} className={`desktop-icon icon-${i}`} onDoubleClick={()=>launch('project',p)} onClick={()=>launch('project',p)} whileHover={{y:-5}}><span className="folder-icon"><span className="folder-tab"/><p.icon strokeWidth={1.45}/></span><b>{p.title}</b><small>{p.kicker.split(' · ')[0]}</small></motion.button>)}</div>
    <div className="desktop-hint">CLICK AN ICON TO OPEN <span>↗</span></div>
    <AnimatePresence>{windows.map((w,i)=><DesktopWindow key={w.id} item={w} active={w.z===topZ} onFocus={()=>focus(w.id)} onClose={()=>close(w.id)} openProject={p=>launch('project',p)} offset={{x:-320+(i%3)*160,y:-190+(i%3)*55}}/>)}</AnimatePresence>
    <Dock open={launch}/>
    <section className="mobile-content"><div className="mobile-intro"><p>PORTFOLIO / 2026</p><h1>Preaw<br/>Warinphorn.</h1><span>Software developer — FinTech, full stack, cloud, cybersecurity & AI.</span></div><About/><p className="eyebrow mobile-section-label">SELECTED PROJECTS</p><div className="mobile-grid">{projects.map(p=><button key={p.id} onClick={()=>launch('project',p)}><p.icon/><small>{p.kicker}</small><h3>{p.title}</h3><p>{p.summary}</p><div className="tag-row">{p.tags.map(t=><span key={t}>{t}</span>)}</div></button>)}</div><Resume/><Contact/></section>
  </main>
}

createRoot(document.getElementById('root')).render(<App />)
