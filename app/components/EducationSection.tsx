import { EDUCATION } from '@/app/config';

export function EducationSection() {
  return (
    <section id="education" className="portfolio-section">
      <div className="section-header">
        <span className="section-label">Where I studied</span>
      </div>

      <div className="edu-list">
        {EDUCATION.map((entry) => (
          <div key={entry.school} className="edu-card">
            <div className="edu-header">
              <div>
                <p className="edu-school">{entry.school}</p>
                <p className="edu-degree">{entry.degree}{entry.minor ? `, Minor in ${entry.minor}` : ''}</p>
                <p className="edu-meta">
                  {entry.expected ? `Expected ${entry.graduation}` : entry.graduation}
                  {entry.gpa ? ` · GPA ${entry.gpa}` : ''}
                </p>
              </div>
            </div>

            {entry.notes && entry.notes.length > 0 && (
              <ul className="exp-bullets edu-notes">
                {entry.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            )}

            {entry.courses.length > 0 && (
              <div className="edu-courses-row">
                <p className="edu-courses-label">Relevant Coursework</p>
                <div className="tech-pill-row">
                  {entry.courses.map((course) => (
                    <span key={course} className="tech-pill">{course}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
