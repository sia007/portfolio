export default function Project({ project }) {
  const { slug, title, tagline, summary, theme, images, links, stack, built, decisions, evolution } = project;
  const [lead, ...rest] = images;

  return (
    <article
      id={slug}
      className="project"
      aria-labelledby={`${slug}-title`}
      style={{ "--band": theme.band, "--accent": theme.accent, "--on-band": theme.onBand }}
    >
      <div className="project-head wrap">
        <h2 id={`${slug}-title`}>{title}</h2>
        <p className="tagline">{tagline}</p>
      </div>

      <div className="band">
        <figure className="shot shot-lead">
          <a href={lead.src} className="shot-link" aria-label={`Open full-size image: ${lead.caption}`}>
            <img src={lead.src} alt={lead.alt} width={lead.width || 1600} height={lead.height || 1000} />
          </a>
          <figcaption>{lead.caption}</figcaption>
        </figure>
        {rest.length > 0 && (
          <div className="shot-row">
            {rest.map((img) => (
              <figure className="shot" key={img.src}>
                <a href={img.src} className="shot-link" aria-label={`Open full-size image: ${img.caption}`}>
                  <img src={img.src} alt={img.alt} width={img.width || 1600} height={img.height || 1000} loading="lazy" />
                </a>
                <figcaption>{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>

      <div className="project-body wrap">
        <div className="col-main">
          <p className="summary">{summary}</p>

          <h3>What I built</h3>
          <ul className="built">
            {built.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          {evolution && (
            <>
              <h3>How it evolved</h3>
              <ol className="evolution">
                {evolution.map((step) => (
                  <li key={step.name}>
                    <a href={step.href}>{step.name}</a>
                    <p>{step.note}</p>
                  </li>
                ))}
              </ol>
            </>
          )}

          <div className="links">
            {links.map((l, i) => (
              <a key={l.href} href={l.href} className={i === 0 ? "btn btn-primary" : "btn"}>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <aside className="col-side" aria-label={`Decisions behind ${title}`}>
          <h3>Decisions</h3>
          {decisions.map((d) => (
            <div className="decision" key={d.title}>
              <h4>{d.title}</h4>
              <p>{d.body}</p>
            </div>
          ))}
          <h3>Built with</h3>
          <p className="stack">{stack.join(", ")}</p>
        </aside>
      </div>
    </article>
  );
}
