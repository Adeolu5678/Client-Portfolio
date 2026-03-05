"use client";
import { personal, awards, memberships } from "@/data/cv";
import { useReveal } from "@/hooks/useReveal";
import styles from "./About.module.css";

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className={`${styles.about} section`} ref={ref}>
      <div className="container">
        <div className={styles.grid}>
          {/* Left: section heading */}
          <div className={styles.headingCol}>
            <p className={`section-label reveal`}>Who I Am</p>
            <h2 className={`section-title reveal reveal-delay-1`}>
              Researcher &<br />Educationist
            </h2>
            <span className={`accent-line reveal reveal-delay-2`} />
            <div className={`${styles.credentials} reveal reveal-delay-2`}>
              <div className={styles.credential}>
                <span className={styles.credLabel}>Ordination</span>
                <span className={styles.credVal}>Ordained Pastor, Nigerian Baptist Convention</span>
              </div>
              <div className={styles.credential}>
                <span className={styles.credLabel}>ORCID iD</span>
                <a href={`https://orcid.org/${personal.orcid}`} target="_blank" rel="noopener noreferrer" className={styles.credLink}>
                  {personal.orcid}
                </a>
              </div>
              <div className={styles.credential}>
                <span className={styles.credLabel}>Languages</span>
                <span className={styles.credVal}>{personal.languages.join(", ")}</span>
              </div>
            </div>
          </div>

          {/* Right: Research interest + pull quotes */}
          <div className={styles.contentCol}>
            <p className={`${styles.lead} reveal`}>
              {personal.researchInterest}
            </p>

            <p className={`${styles.body} reveal reveal-delay-1`}>
              An ordained pastor of the Nigerian Baptist Convention with over three decades of service, 
              Dr. Adeoye has served at association, conference, and convention levels — combining 
              theological rigour with practical ministry. She is a registered teacher, school proprietor, 
              professional secretary, and seasoned speaker at international conferences, seminars, and workshops.
            </p>

            {/* Awards */}
            {awards.length > 0 && (
              <div className={`${styles.awards} reveal reveal-delay-2`}>
                <p className={styles.awardsTitle}>Recognition</p>
                <div className={styles.awardsList}>
                  {awards.map((a, i) => (
                    <div key={i} className={styles.award}>
                      <span className={styles.awardYear}>{a.year}</span>
                      <div>
                        <span className={styles.awardName}>{a.title}</span>
                        <span className={styles.awardBody}>{a.body}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Memberships */}
            <div className={`${styles.memberships} reveal reveal-delay-3`}>
              {memberships.map((m, i) => (
                <div key={i} className={styles.membership}>
                  <span className={styles.membershipDot} />
                  <span>{m}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
