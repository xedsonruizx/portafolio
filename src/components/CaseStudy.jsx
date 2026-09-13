import React from 'react';
import { useI18n } from '../i18n';
import { caseStudy, caseStudy_en } from '../data/caseStudy';

export default function CaseStudy() {
  const { t, lang } = useI18n();
  const data = lang === 'en' ? caseStudy_en : caseStudy;

  return (
    <section id="case-study" className="section container caseStudy">
      <h2 className="sectionTitle reveal">
        <span className="sectionNum">07.</span>
        {t('caseStudy.title')}
      </h2>
      <p className="caseStudySubtitle reveal">{t('caseStudy.subtitle')}</p>

      <div className="card caseStudyIntro reveal">
        <span className="tag caseStudyBadge">{t('caseStudy.badge')}</span>
        <h3 className="caseStudyProject">{data.project}</h3>
        <p className="cardDesc">{data.description}</p>
      </div>

      <div className="grid grid-2 caseStudyGrid">
        <article className="card reveal">
          <h4 className="caseStudyBlockTitle">{t('caseStudy.challengeLabel')}</h4>
          <p className="cardDesc">{data.challenge}</p>
        </article>

        <article className="card reveal">
          <h4 className="caseStudyBlockTitle">{t('caseStudy.solutionLabel')}</h4>
          <ul className="featureList">
            {data.solution.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </article>

        <article className="card reveal">
          <h4 className="caseStudyBlockTitle">{t('caseStudy.toolsLabel')}</h4>
          <ul className="tagList">
            {data.tools.map((tool, i) => <li key={i} className="tag">{tool}</li>)}
          </ul>
        </article>

        <article className="card reveal">
          <h4 className="caseStudyBlockTitle">{t('caseStudy.learningsLabel')}</h4>
          <ul className="featureList">
            {data.learnings.map((l, i) => <li key={i}>{l}</li>)}
          </ul>
        </article>
      </div>

      <h4 className="caseStudyBlockTitle caseStudySectionLabel reveal">{t('caseStudy.metricsLabel')}</h4>
      <div className="metricsGrid">
        {data.metrics.map((m, i) => (
          <div
            key={i}
            className="metricCard reveal"
            style={{ '--reveal-delay': `${i * 80}ms` }}
          >
            <span className="metricValue">{m.value}</span>
            <span className="metricLabel">{m.label}</span>
          </div>
        ))}
      </div>

      <article className="card reveal caseStudyBlockFull">
        <h4 className="caseStudyBlockTitle">{t('caseStudy.skillsLabel')}</h4>
        <ul className="tagList">
          {data.skills.map((s, i) => <li key={i} className="tag">{s}</li>)}
        </ul>
      </article>

      <article className="card reveal caseStudyBlockFull">
        <h4 className="caseStudyBlockTitle">{t('caseStudy.justificationLabel')}</h4>
        <p className="cardDesc">{data.justification}</p>
      </article>
    </section>
  );
}
