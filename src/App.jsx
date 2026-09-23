import { useState } from "react";
import { FiArrowRight, FiArrowUpRight, FiDownload } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import {
  profile, coreStack, alsoUse, featured, moreProjects,
  experience, education, recognition,
} from "./data";

const nav = [
  ["About", "#about"], ["Experience", "#experience"], ["Projects", "#projects"],
  ["Tech stack", "#stack"], ["Contact", "#contact"],
];

function Hero() {
  const [noPhoto, setNoPhoto] = useState(false);
  return (
    <section className="hero" id="about">
      <div className="hero-copy">
        <p className="pill">Open to work · Chennai</p>
        <p className="label">{profile.role}</p>
        <h1>{profile.name[0]}<br />{profile.name[1]}</h1>
        <p className="intro">{profile.intro}</p>
        <div className="hero-actions">
          <a className="btn" href={profile.resume} download>Download resume <FiDownload /></a>
          <a className="link" href="#projects">View projects <FiArrowRight /></a>
        </div>
      </div>
      <div className="hero-photo">
        {noPhoto ? (
          <span className="monogram" aria-hidden="true">NV</span>
        ) : (
          <img src={profile.photo} alt="Portrait of Neha Vardhini J K" onError={() => setNoPhoto(true)} />
        )}
      </div>
      <p className="vertical label">Building production-ready APIs</p>
    </section>
  );
}

function Stack() {
  return (
    <section className="band" id="stack">
      <div className="stack-head">
        <h2>Core<br />tech stack</h2>
        <p>{alsoUse}</p>
        <a className="link" href={profile.links.GitHub}>See GitHub <FiArrowRight /></a>
      </div>
      <div className="stack-grid">
        {coreStack.map(({ name, icon: Icon, color, text }) => (
          <div className="stack-cell" key={name}>
            <Icon size={46} color={color} aria-hidden="true" />
            <h3>{name}</h3>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Flow({ rows }) {
  return (
    <div className="flow" role="img" aria-label="Architecture diagram">
      {rows.map((row, i) => (
        <div className="flow-row" key={i}>
          {row.map((n) => (
            <div className={`node ${n.k}`} key={n.t}>
              <strong>{n.t}</strong>
              <span>{n.s}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

function Featured() {
  return (
    <section className="band" id="projects">
      <div className="band-head">
        <h2>Featured<br />projects</h2>
        <a className="link" href={profile.links.GitHub + "?tab=repositories"}>See all projects <FiArrowRight /></a>
      </div>
      {featured.map((p) => (
        <article className="project" key={p.title}>
          <div className="project-main">
            <h3>{p.title}</h3>
            <p className="sub">{p.subtitle}</p>
            <p>{p.text}</p>
            <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            <div className="project-links">
              <a className="link" href={p.live}>View live <FiArrowUpRight /></a>
              <a className="link" href={p.github}>Source code <FiArrowUpRight /></a>
            </div>
          </div>
          <Flow rows={p.flow} />
          <dl className="case">
            <dt className="label">Challenge</dt><dd>{p.challenge}</dd>
            <dt className="label">Solution</dt><dd>{p.solution}</dd>
            <dt className="label">Result</dt><dd>{p.result}</dd>
          </dl>
        </article>
      ))}
      <div className="more">
        <h3 className="label">More projects</h3>
        <div className="more-grid">
          {moreProjects.map((p) => (
            <div className="more-item" key={p.name}>
              <h4>{p.name}</h4>
              <p>{p.text}</p>
              <p className="stack-line">{p.stack}</p>
              <div className="project-links">
                <a className="link" href={p.live}>Live</a>
                <a className="link" href={p.github}>Code</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="band" id="experience">
      <div className="band-head"><h2>Experience</h2></div>
      <ol className="timeline">
        {experience.map((e) => (
          <li key={e.role}>
            <p className="when">{e.when}</p>
            <span className="dot" aria-hidden="true" />
            <div>
              <h3>{e.role}</h3>
              <p className="sub">{e.org}</p>
              <p>{e.text}</p>
            </div>
            <ul className="points">{e.points.map((x) => <li key={x}>{x}</li>)}</ul>
          </li>
        ))}
      </ol>
      <div className="edu">
        <div>
          <h3 className="label">Education</h3>
          {education.map((e) => (
            <div className="edu-item" key={e.name}>
              <h4>{e.name}</h4>
              <p className="sub">{e.org}, {e.when}</p>
              <p>{e.note}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="label">Certifications and research</h3>
          <ul className="points plain">{recognition.map((r) => <li key={r}>{r}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div>
        <h2>Let’s build<br />something great</h2>
        <p>I’m looking for backend engineering roles where I can contribute, learn and grow.</p>
        <dl className="facts">
          <div><dt className="label">Email</dt><dd>{profile.email}</dd></div>
          <div><dt className="label">Location</dt><dd>{profile.location}</dd></div>
        </dl>
      </div>
      <ul className="socials">
        <li><a href={profile.links.LinkedIn}><FaLinkedin size={22} /> LinkedIn</a></li>
        <li><a href={profile.links.GitHub}><FaGithub size={22} /> GitHub</a></li>
        <li><a href={`mailto:${profile.email}`}><MdOutlineMail size={22} /> Email</a></li>
      </ul>
      <div>
        <h2>Get in touch</h2>
        <p>Have a role or project in mind? Send me a note.</p>
        <a className="link big" href={`mailto:${profile.email}`}>Send a message <FiArrowRight /></a>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <header className="nav">
        <a className="brand" href="#about">Neha<br />Vardhini J K</a>
        <nav aria-label="Main">{nav.map(([n, h]) => <a key={h} href={h}>{n}</a>)}</nav>
        <a className="link" href={profile.resume} download>Download resume <FiDownload /></a>
      </header>
      <main>
        <Hero />
        <Stack />
        <Featured />
        <Experience />
        <Contact />
      </main>
      <footer className="foot">
        <span>Neha Vardhini J K</span>
        <span>© {new Date().getFullYear()} All rights reserved.</span>
      </footer>
    </>
  );
}
