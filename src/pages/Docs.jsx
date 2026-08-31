import { useMemo, useRef, useState } from 'react';
import { AlertTriangle, Search } from 'lucide-react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import { healthTopics, warningSigns } from '../dataFolder/docsData.js';

function Docs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedIssueId, setSelectedIssueId] = useState(healthTopics[0]?.id || '');
  const detailRef = useRef(null);

  const categories = ['All', ...new Set(healthTopics.map((topic) => topic.category))];

  const filteredTopics = useMemo(() => {
    const query = searchTerm.toLowerCase().trim();

    return healthTopics.filter((topic) => {
      const matchesCategory = activeFilter === 'All' || topic.category === activeFilter;
      const searchableText = `${topic.title} ${topic.summary} ${topic.category} ${topic.tags.join(' ')}`.toLowerCase();
      const matchesSearch = !query || searchableText.includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeFilter]);

  const selectedIssue =
    filteredTopics.find((topic) => topic.id === selectedIssueId) ||
    filteredTopics[0] ||
    healthTopics[0];

  const handleReadIssue = (issueId) => {
    setSelectedIssueId(issueId);

    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
  };

  return (
    <>
      <Navbar />

      <main className="docs-page">
        <section className="docs-hero">
          <div className="docs-hero-copy">
            <span className="eyebrow">Health knowledge hub</span>
            <h1>Understand common health issues and what to do next.</h1>
            <p>
              MedConnect provides practical education on everyday health concerns so patients can
              recognize warning signs, build healthy routines, and seek care earlier.
            </p>
          </div>

          <div className="docs-hero-card">
            <h3>Quick reminder</h3>
            <p>
              Some symptoms are mild and manageable at home, while others need a clinician sooner.
              When in doubt, check with a qualified healthcare professional.
            </p>
          </div>
        </section>

        <section className="docs-section">
          <div className="section-heading">
            <span className="section-kicker">Health issues library</span>
            <h2>Browse common conditions and health topics</h2>
          </div>

          <div className="docs-search-panel">
            <div className="search-bar">
              <Search size={18} />
              <input
                type="text"
                placeholder="Search health issues, symptoms, or topics..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>

            <div className="category-filters">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={activeFilter === category ? 'active-filter' : ''}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {filteredTopics.length > 0 ? (
            <>
              {selectedIssue && (
                <article ref={detailRef} className="issue-detail-panel">
                  <div className="detail-header">
                    <span className="topic-badge">{selectedIssue.category}</span>
                    <h3>{selectedIssue.title}</h3>
                  </div>

                  <p className="detail-summary">{selectedIssue.summary}</p>

                  {selectedIssue.sections.map((section) => (
                    <div className="detail-section" key={section.heading}>
                      <h4>{section.heading}</h4>
                      <p>{section.content}</p>
                    </div>
                  ))}
                </article>
              )}

              <div className="docs-grid">
                {filteredTopics.map(({ id, icon: Icon, title, category, summary, tip, tags }) => (
                  <article
                    className={`doc-card ${selectedIssue?.id === id ? 'selected-doc-card' : ''}`}
                    key={id}
                  >
                    <div className="doc-header-row">
                      <div className="doc-icon-wrap">
                        <Icon size={24} />
                      </div>
                      <span className="topic-badge">{category}</span>
                    </div>

                    <h3>{title}</h3>
                    <p>{summary}</p>

                    <div className="issue-tags">
                      {tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>

                    <div className="doc-tip">
                      <strong>Helpful tip:</strong>
                      <span>{tip}</span>
                    </div>

                    <button className="read-more-btn" type="button" onClick={() => handleReadIssue(id)}>
                      Read article
                    </button>
                  </article>
                ))}
              </div>
            </>
          ) : (
            <div className="empty-state">
              <p>No health issues match your search yet.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setActiveFilter('All');
                }}
              >
                Clear search
              </button>
            </div>
          )}
        </section>

        <section className="docs-alert-box">
          <div className="alert-title">
            <AlertTriangle size={24} />
            <h2>When to seek care urgently</h2>
          </div>

          <ul>
            {warningSigns.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Docs;