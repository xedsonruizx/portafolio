import React from 'react';
import ProjectCard from './ProjectCard';
import { projects as dataProjects } from '../data/projects';
import { FiGrid, FiList, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export default function Projects({ items = dataProjects }) {
  const [view, setView] = React.useState('cards');
  const [page, setPage] = React.useState(1);

  const PAGE_SIZE = 6;
  const totalPages = Math.ceil(items.length / PAGE_SIZE);
  const start = (page - 1) * PAGE_SIZE;
  const visible = items.slice(start, start + PAGE_SIZE);

  React.useEffect(() => { setPage(1); }, [view, items]);

  return (
    <section id="projects" className="section container">
      <h2 className="sectionTitle">Proyectos</h2>

      <div className="sectionToolbar">
        <div className="viewToggle">
          <button
            className={`toggleBtn ${view === 'cards' ? 'isActive' : ''}`}
            onClick={() => setView('cards')}
            aria-pressed={view === 'cards'}
          >
            <FiGrid className="toggleIcon" /> Tarjetas
          </button>
          <button
            className={`toggleBtn ${view === 'list' ? 'isActive' : ''}`}
            onClick={() => setView('list')}
            aria-pressed={view === 'list'}
          >
            <FiList className="toggleIcon" /> Lista
          </button>
        </div>

        <div className="pagination">
          <button
            className="pageBtn"
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            aria-label="Anterior"
          >
            <FiChevronLeft />
          </button>
          <span className="pageInfo">{page} / {totalPages}</span>
          <button
            className="pageBtn"
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            aria-label="Siguiente"
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
                <th>Título</th>
                <th>Descripción</th>
                <th>Etiquetas</th>
                <th>Demo</th>
                <th>Código</th>
              </tr>
            </thead>
            <tbody>
              {visible.map((p) => (
                <tr key={p.title}>
                  <td>{p.title}</td>
                  <td>{p.description}</td>
                  <td>{(p.tags || []).join(', ')}</td>
                  <td>{p.link ? <a className="btn primary btnSm" href={p.link} target="_blank" rel="noreferrer">Abrir</a> : '—'}</td>
                  <td>{p.repo ? <a className="btn btnSm" href={p.repo} target="_blank" rel="noreferrer">Ver</a> : '—'}</td>
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
            aria-label={`Ir a página ${i + 1}`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </section>
  );
}