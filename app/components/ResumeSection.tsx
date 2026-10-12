import { ME } from '@/app/config';

export function ResumeSection() {
  return (
    <section id="resume" className="portfolio-section" aria-label="Resume">
      <a href={ME.resumePath} className="resume-link" target="_blank" rel="noopener noreferrer">
        <img
          src="/resume-page.png"
          alt="Amy Zhao resume"
          className="resume-page"
        />
      </a>
    </section>
  );
}
