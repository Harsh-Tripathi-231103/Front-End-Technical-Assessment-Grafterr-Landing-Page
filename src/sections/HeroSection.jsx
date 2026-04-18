import PropTypes from 'prop-types';
import GradientButton from '../components/ui/GradientButton';
import GradientText from '../components/ui/GradientText';
import FloatingShape from '../components/ui/FloatingShape';
import { ErrorState, HeroSkeleton } from '../components/ui/SectionState';
import styles from './HeroSection.module.css';

function HeroSection({ navigation, hero, loading, error, onRetry }) {
  return (
    <header className={styles.heroSection}>
      <div className={styles.container}>
        <nav className={styles.navigation} aria-label="Primary">
          {navigation ? (
            <>
              <a className={styles.logoLink} href="#top" aria-label="Grafterr home">
                <img
                  className={styles.logo}
                  src={navigation.logo.src}
                  alt={navigation.logo.alt}
                />
              </a>
              <div className={styles.navLinks}>
                {navigation.links.map((link) => (
                  <a key={link.label} href={link.href}>
                    {link.label}
                  </a>
                ))}
              </div>
              <GradientButton
                href={navigation.cta.href}
                label={navigation.cta.label}
              />
            </>
          ) : (
            <div className={styles.navPlaceholder} />
          )}
        </nav>

        <div className={styles.heroPanel}>
          <FloatingShape className={styles.topShape} variant="circle" />
          <FloatingShape className={styles.bottomShape} variant="rectangle" />

          {loading ? <HeroSkeleton /> : null}

          {!loading && error ? <ErrorState message={error} onRetry={onRetry} /> : null}

          {!loading && !error && hero ? (
            <div className={styles.content}>
              <div className={styles.copy}>
                <span className={styles.eyebrow}>{hero.eyebrow}</span>
                <h1 className={styles.headline}>
                  {hero.headlinePrefix}{' '}
                  <GradientText>{hero.headlineGradient}</GradientText>
                </h1>
                <p className={styles.subheadline}>{hero.subheadline}</p>
                <div className={styles.actions}>
                  <GradientButton href={hero.cta.href} label={hero.cta.label} />
                  <GradientButton
                    href={hero.secondaryCta.href}
                    label={hero.secondaryCta.label}
                    variant="secondary"
                  />
                </div>
                <ul className={styles.stats}>
                  {hero.stats.map((item) => (
                    <li key={item.label}>
                      <strong>{item.value}</strong>
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <aside className={styles.previewCard}>
                <span className={styles.previewEyebrow}>
                  {hero.previewCard.eyebrow}
                </span>
                <h2>{hero.previewCard.title}</h2>
                <ul className={styles.previewBullets}>
                  {hero.previewCard.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <div className={styles.metricGrid}>
                  {hero.previewCard.metrics.map((metric) => (
                    <div key={metric.label} className={styles.metricCard}>
                      <span>{metric.label}</span>
                      <strong>{metric.value}</strong>
                    </div>
                  ))}
                </div>
              </aside>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}

HeroSection.propTypes = {
  error: PropTypes.string.isRequired,
  hero: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  navigation: PropTypes.object,
  onRetry: PropTypes.func.isRequired
};

HeroSection.defaultProps = {
  hero: null,
  navigation: null
};

export default HeroSection;
