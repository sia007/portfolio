import Project from "@/components/Project";
import { site, projects, experience, skills, education } from "@/data/site";

export default function Home() {
  const contact = [
    site.email && { label: site.email, href: `mailto:${site.email}` },
    site.linkedin && { label: "LinkedIn", href: site.linkedin },
    { label: "GitHub", href: site.github },
    site.resume && { label: "Résumé", href: site.resume },
  ].filter(Boolean);

  return (
    <>
      <a href="#work" className="skip">Skip to projects</a>

      <header className="site-header wrap">
        <a href="#top" className="brand">{site.name}</a>
        <nav aria-label="Main">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero wrap" aria-labelledby="hero-title">
          <h1 id="hero-title">
            <span className="hero-name">{site.name}</span>
            <span className="hero-role">
              {site.role}, {site.location}
            </span>
          </h1>
          <p className="hero-intro">{site.intro}</p>
          <div className="hero-actions">
            {site.email && (
              <a className="btn btn-primary" href={`mailto:${site.email}`}>Email me</a>
            )}
            {site.resume && (
              <a className="btn" href={site.resume}>Download résumé</a>
            )}
            {site.linkedin && <a className="btn" href={site.linkedin}>LinkedIn</a>}
          </div>
          <ul className="hero-index" aria-label="Projects on this page">
            {projects.map((p) => (
              <li key={p.slug} style={{ "--accent": p.theme.accent }}>
                <a href={`#${p.slug}`}>
                  <span className="dot" aria-hidden="true" />
                  {p.title}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <div id="work">
          {projects.map((p) => (
            <Project key={p.slug} project={p} />
          ))}
        </div>

        <section id="experience" className="experience" aria-labelledby="experience-title">
          <div className="wrap">
            <h2 id="experience-title" className="section-title">Experience</h2>
            <ol className="jobs">
              {experience.map((job) => (
                <li className="job" key={job.company}>
                  <div className="job-meta">
                    <p className="job-dates">{job.dates}</p>
                    <p className="job-company">
                      {job.company}
                      {job.product && <span>, {job.product}</span>}
                    </p>
                  </div>
                  <div className="job-detail">
                    <h3>{job.role}</h3>
                    {job.highlight && <p className="job-highlight">{job.highlight}</p>}
                    <ul>
                      {job.points.map((pt) => (
                        <li key={pt}>{pt}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>

            <div className="about-grid">
              <div>
                <h2 className="section-title section-title-sm">Skills</h2>
                <dl className="skills">
                  {skills.map((s) => (
                    <div key={s.group}>
                      <dt>{s.group}</dt>
                      <dd>{s.items}</dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div>
                <h2 className="section-title section-title-sm">Education</h2>
                <ul className="education">
                  {education.map((e) => (
                    <li key={e.school}>
                      <p className="edu-degree">{e.degree}</p>
                      <p className="edu-school">
                        {e.school}, {e.dates}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="site-footer">
        <div className="wrap">
          <h2>Let’s build something.</h2>
          <p>I’m looking for full-stack roles, especially products with payments, integrations or AI features.</p>
          <ul className="contact">
            {contact.map((c) => (
              <li key={c.href}>
                <a href={c.href}>{c.label}</a>
              </li>
            ))}
          </ul>
          <p className="fine">© {new Date().getFullYear()} {site.name}</p>
        </div>
      </footer>
    </>
  );
}
