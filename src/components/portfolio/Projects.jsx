import React, { useState } from "react";
import { ExternalLink, Github, ChevronDown } from "lucide-react";
import { useLang } from "@/contexts/LanguageContext";
import { SectionHeader } from "./About";
import { PROJECT_MEDIA } from "../../lib/projectMedia";

const ProjectCard = ({ project, labels }) => {
  const media = PROJECT_MEDIA[project.id];
  const Illustration = media?.Illustration;
  const titleId = `project-title-${project.id}`;

  return (
    <article id={`project-${project.id}`} className="card-tech card-project project-card" aria-labelledby={titleId} data-testid={`project-card-${project.id}`}>
      <figure className="project-figure">
        <div className="project-image">
          {media?.image ? (
            <img src={`${process.env.PUBLIC_URL}${media.image}`} alt={project.name} loading="lazy" width="800" height="500" />
          ) : Illustration ? (
            <div aria-hidden="true" className="w-full h-full"><Illustration /></div>
          ) : null}
        </div>
        <figcaption className="project-image-caption">{media?.image ? labels.image : labels.illustration}</figcaption>
      </figure>

      <div className="project-card-content">
        <div>
          <h3 id={titleId} className="font-heading font-semibold text-xl leading-snug tracking-tight text-[var(--text-primary)]">{project.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{project.summary}</p>
        </div>

        <ul className="flex flex-wrap gap-2" aria-label={labels.tech}>
          {project.tech.map(tech => <li key={tech} className="chip">{tech}</li>)}
        </ul>

        {(project.website || project.alternateWebsite || project.repository) && (
          <div className="project-actions">
            {[project.website, project.alternateWebsite].filter(Boolean).map(url => (
              <a key={url} href={url} target="_blank" rel="noopener noreferrer" className="project-action">
                <ExternalLink size={14} aria-hidden="true" />
                {labels.visitWebsite} · {new URL(url).hostname}
              </a>
            ))}
            {project.repository && (
              <a href={project.repository} target="_blank" rel="noopener noreferrer" className="project-action">
                <Github size={14} aria-hidden="true" />{labels.repository}
              </a>
            )}
          </div>
        )}

        <details className="project-case group">
          <summary aria-label={`${labels.details}: ${project.name}`} className="project-case-summary">
            {labels.details}
            <ChevronDown size={16} aria-hidden="true" className="shrink-0 transition-transform group-open:rotate-180" />
          </summary>
          <div className="project-case-content">
            <section>
              <h4>{labels.problem}</h4>
              <p>{project.problem}</p>
            </section>
            <section>
              <h4>{labels.solution}</h4>
              <p>{project.desc}</p>
              <ul>{project.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
            </section>
            <section>
              <h4>{labels.participation}</h4>
              <p>{project.participation}</p>
            </section>
            <section>
              <h4>{labels.result}</h4>
              <p>{project.impact}</p>
            </section>
          </div>
        </details>
      </div>
    </article>
  );
};

const Projects = () => {
  const { t } = useLang();
  const list = t("projects.list");
  const labels = t("projects.labels");
  const [showMore, setShowMore] = useState(false);
  const projects = Array.isArray(list) ? list : [];
  const featured = projects.filter(project => project.featured);
  const additional = projects.filter(project => !project.featured);

  return (
    <section id="projects" data-testid="projects-section" className="section-y relative bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="container-x">
        <SectionHeader overline={t("projects.overline")} title={t("projects.title")} lead={t("projects.lead")} />

        <div className="project-grid mt-10" data-testid="featured-projects">
          {featured.map(project => <ProjectCard key={project.id} project={project} labels={labels} />)}
        </div>

        {additional.length > 0 && (
          <>
            <div className="mt-8">
              <button type="button" className="btn-secondary" onClick={() => setShowMore(value => !value)} aria-expanded={showMore} aria-controls="additional-projects">
                {showMore ? labels.less : labels.more}
                <ChevronDown size={16} aria-hidden="true" className={`transition-transform ${showMore ? "rotate-180" : ""}`} />
              </button>
            </div>
            <div id="additional-projects" hidden={!showMore}>
              <div className="project-grid mt-8">
                {additional.map(project => <ProjectCard key={project.id} project={project} labels={labels} />)}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
