"use client";
import { useState } from "react";
import { publications } from "@/data/cv";
import { useReveal } from "@/hooks/useReveal";
import styles from "./Publications.module.css";

type PubTab = "journals" | "books" | "articles" | "theses";

export default function Publications() {
  const [tab, setTab] = useState<PubTab>("journals");
  const [expanded, setExpanded] = useState<number | null>(null);
  const ref = useReveal();

  const tabs: { key: PubTab; label: string; count: number }[] = [
    { key: "journals", label: "Journal Articles", count: publications.journals.length },
    { key: "books", label: "Books", count: publications.books.length + publications.coAuthored.length },
    { key: "articles", label: "Articles & Chapters", count: publications.articles.length + publications.chapters.length },
    { key: "theses", label: "Theses", count: publications.theses.length },
  ];

  return (
    <section id="publications" className={`${styles.pubs} section`} ref={ref}>
      <div className="container">
        {/* Header */}
        <div className={styles.header}>
          <p className="section-label reveal">Scholarly Output</p>
          <h2 className={`section-title reveal reveal-delay-1`}>Publications</h2>
          <p className={`${styles.subtitle} reveal reveal-delay-2`}>
            A corpus of peer-reviewed journals, authored books, conference articles, and doctoral research — spanning religious ethics, pastoral counselling, and Christian education.
          </p>
        </div>

        {/* Tab Nav */}
        <div className={`${styles.tabNav} reveal reveal-delay-2`} role="tablist">
          {tabs.map((t) => (
            <button
              key={t.key}
              role="tab"
              aria-selected={tab === t.key}
              className={`${styles.tabBtn} ${tab === t.key ? styles.tabActive : ""}`}
              onClick={() => { setTab(t.key); setExpanded(null); }}
            >
              {t.label}
              <span className={styles.tabCount}>{t.count}</span>
            </button>
          ))}
        </div>

        {/* Journals */}
        {tab === "journals" && (
          <div className={styles.list}>
            {publications.journals.map((j, i) => (
              <article
                key={i}
                className={`${styles.pubItem} reveal`}
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className={styles.pubMeta}>
                  <span className={styles.pubYear}>{j.year}</span>
                  {j.doi && <a href={j.doi} target="_blank" rel="noopener noreferrer" className={styles.doiLink}>DOI ↗</a>}
                </div>
                <div className={styles.pubContent}>
                  <h3 className={styles.pubTitle}>{j.title}</h3>
                  <p className={styles.pubAuthors}>{j.authors}</p>
                  <p className={styles.pubJournal}>
                    <em>{j.journal}</em>
                    {j.details && ` — ${j.details}`}
                    {j.month && `. ${j.month}`}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Books */}
        {tab === "books" && (
          <div className={styles.booksGrid}>
            <div className={styles.booksSubgroup}>
              <p className={styles.subgroupLabel}>Sole Author</p>
              {publications.books.map((b, i) => (
                <article key={i} className={`${styles.bookCard} reveal`} style={{ transitionDelay: `${i * 0.08}s` }}>
                  <span className={styles.bookYear}>{b.year}</span>
                  <div>
                    <h3 className={styles.bookTitle}>{b.title}</h3>
                    <p className={styles.bookPublisher}>{b.location}: {b.publisher}</p>
                  </div>
                </article>
              ))}
            </div>
            <div className={styles.booksSubgroup}>
              <p className={styles.subgroupLabel}>Co-Authored</p>
              {publications.coAuthored.map((b, i) => (
                <article key={i} className={`${styles.bookCard} reveal`} style={{ transitionDelay: `${(i + publications.books.length) * 0.08}s` }}>
                  <span className={styles.bookYear}>{b.year}</span>
                  <div>
                    <h3 className={styles.bookTitle}>{b.title}</h3>
                    <p className={styles.bookAuthors}>{b.authors}</p>
                    <p className={styles.bookPublisher}>{b.location}: {b.publisher}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* Articles & Chapters */}
        {tab === "articles" && (
          <div className={styles.list}>
            {publications.chapters.map((c, i) => (
              <article key={`ch-${i}`} className={`${styles.pubItem} ${styles.pubItemChap} reveal`} style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className={styles.pubMeta}>
                  <span className={styles.pubYear}>{c.year}</span>
                  <span className={styles.pubTag}>Chapter</span>
                </div>
                <div className={styles.pubContent}>
                  <h3 className={styles.pubTitle}>{c.title}</h3>
                  <p className={styles.pubJournal}>In <em>{c.book}</em>. {c.editor}. {c.location}: {c.publisher}</p>
                </div>
              </article>
            ))}
            {publications.articles.map((a, i) => (
              <article
                key={`ar-${i}`}
                className={`${styles.pubItem} reveal`}
                style={{ transitionDelay: `${(i + publications.chapters.length) * 0.05}s` }}
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className={styles.pubMeta}>
                  <span className={styles.pubYear}>{a.year}</span>
                </div>
                <div className={styles.pubContent}>
                  <h3 className={styles.pubTitle}>{a.title}</h3>
                  <p className={styles.pubJournal}>
                    <em>{a.venue}</em>
                    {a.pages && `, pp. ${a.pages}`}
                    {a.month && `. ${a.month}`}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Theses */}
        {tab === "theses" && (
          <div className={styles.thesesList}>
            {publications.theses.map((t, i) => (
              <article key={i} className={`${styles.thesisItem} reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className={styles.thesisLeft}>
                  <span className={styles.thesisYear}>{t.year}</span>
                  <span className={styles.thesisType}>{t.type}</span>
                </div>
                <div className={styles.thesisRight}>
                  <h3 className={styles.thesisTitle}>{t.title}</h3>
                  <p className={styles.thesisInst}>{t.institution}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
