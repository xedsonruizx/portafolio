import React from 'react';
import { courses, courses_en } from '../data/courses';
import { useI18n } from '../i18n';

export default function Courses() {
  const { t, lang } = useI18n();
  const [courseViewer, setCourseViewer] = React.useState({ open: false, src: null, title: '' });
  
  // Select language-specific dataset
  const coursesData = lang === 'en' ? courses_en : courses;

  return (
    <>
      <section id="courses" className="section container">
        <h2 className="sectionTitle">{t('courses.title')}</h2>
        <div className="tableWrap">
          <table className="projectsTable">
            <thead>
              <tr>
                <th>{t('courses.table.course')}</th>
                <th>{t('courses.table.issuer')}</th>
                <th>{t('courses.table.year')}</th>
                <th>{t('courses.table.certificate')}</th>
              </tr>
            </thead>
            <tbody>
              {coursesData.map((course) => (
                <tr key={course.title}>
                  <td>{course.title}</td>
                  <td>{course.issuer}</td>
                  <td>{course.year}</td>
                  <td className="cellAction">
                    {course.file ? (
                      <a
                        className="btn primary btnSm"
                        href={course.file}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {t('courses.viewLabel')}
                      </a>
                    ) : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {courseViewer.open && (
        <div className="modalOverlay" onClick={() => setCourseViewer({ open: false, src: null, title: '' })}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <header className="modalHeader">
              <h3 className="modalTitle">{courseViewer.title}</h3>
              <button
                className="modalClose"
                onClick={() => setCourseViewer({ open: false, src: null, title: '' })}
                aria-label={t('modal.closeAria')}
              >
                ✕
              </button>
            </header>
            <object
              className="pdfFrame"
              data={`${courseViewer.src}#toolbar=0&navpanes=0&zoom=page-fit`}
              type="application/pdf"
            >
              <p>
                {t('pdf.fallback')}{' '}
                <a href={courseViewer.src} target="_blank" rel="noreferrer">{t('pdf.openNew')}</a>
              </p>
            </object>
          </div>
        </div>
      )}
    </>
  );
}