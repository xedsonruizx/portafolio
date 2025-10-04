import React from 'react';
import ProjectCard from './ProjectCard';
import { projects as projects_es, projects_en } from '../data/projects';
import { FiGrid, FiList, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useI18n } from '../i18n';

export default function Projects({ items }) {
  const [view, setView] = React.useState('cards');
  const [page, setPage] = React.useState(1);
  const { t, lang } = useI18n();

  // Choose dataset based on language, unless items were provided via props
  const sourceItems = items ?? (lang === 'en' ? projects_en : projects_es);

  const PAGE_SIZE = 6;
  const totalPages = Math.ceil(sourceItems.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const visible = sourceItems.slice(start, start + PAGE_SIZE);

  React.useEffect(() => { setPage(1); }, [view, sourceItems]);

  return (
    <section id="projects" className="section container">
      <h2 className="sectionTitle">{t('projects.title')}</h2>

      <div className="sectionToolbar">
        <div className="viewToggle">
          <button
            className={`toggleBtn ${view === 'cards' ? 'isActive' : ''}`}
            onClick={() => setView('cards')}
            aria-pressed={view === 'cards'}
          >
            <FiGrid className="toggleIcon" /> {t('projects.view.cards')}
          </button>
          <button
            className={`toggleBtn ${view === 'list' ? 'isActive' : ''}`}
            onClick={() => setView('list')}
            aria-pressed={view === 'list'}
          >
            <FiList className="toggleIcon" /> {t('projects.view.list')}
          </button>
        </div>

        <div className="pagination">
          <button
            className="pageBtn"
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            aria-label={t('pagination.prev')}
          >
            <FiChevronLeft />
          </button>
          <span className="pageInfo">{page} / {totalPages}</span>
          <button
            className="pageBtn"
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            aria-label={t('pagination.next')}
          >
            <FiChevronRight />
          </button>
        </div>
      </div>

      {view === 'cards' ? (
        <div className="grid grid-3">
          {visible.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      ) : (
        <div className="tableWrap">
          <table className="projectsTable">
            <thead>
              <tr>
                <th>{t('projects.table.title')}</th>
                <th>{t('projects.table.description')}</th>
                <th>{t('projects.table.tags')}</th>
                <th>{t('projects.table.demo')}</th>
                <th>{t('projects.table.code')}</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((p) => (
                <tr key={p.title}>
                  <td>{p.title}</td>
                  <td>{p.description}</td>
                  <td>{(p.tags || []).join(', ')}</td>
                  <td className="cellAction">
                  {p.link ? (
                    <a className="btn primary btnSm" href={p.link} target="_blank" rel="noreferrer">
                      {t('projects.actions.demo')}
                    </a>
                  ) : '—'}
                </td>
                <td className="cellAction">
                  {p.repo ? (
                    <a className="btn btnSm" href={p.repo} target="_blank" rel="noreferrer">
                      {t('projects.actions.code')}
                    </a>
                  ) : '—'}
                </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="pageNumbers">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            className={`pageNum ${page === i + 1 ? 'isActive' : ''}`}
            onClick={() => setPage(i + 1)}
            aria-label={t('pagination.goToPage')}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}