import PropTypes from 'prop-types';
import Skeleton from './Skeleton';
import styles from './SectionState.module.css';

export function HeroSkeleton() {
  return (
    <div className={styles.heroSkeleton}>
      <div className={styles.heroCopy}>
        <Skeleton className={styles.eyebrow} />
        <Skeleton className={styles.headlineLarge} />
        <Skeleton className={styles.headlineMedium} />
        <Skeleton className={styles.body} />
        <div className={styles.buttonRow}>
          <Skeleton className={styles.button} />
          <Skeleton className={styles.button} />
        </div>
      </div>
      <Skeleton className={styles.heroCard} />
    </div>
  );
}

export function FeaturesSkeleton() {
  return (
    <div className={styles.featuresSkeleton}>
      <div className={styles.sectionIntro}>
        <Skeleton className={styles.heading} />
        <Skeleton className={styles.body} />
      </div>
      <div className={styles.cardGrid}>
        <Skeleton className={styles.featureCard} />
        <Skeleton className={styles.featureCard} />
        <Skeleton className={styles.featureCard} />
      </div>
    </div>
  );
}

export function ErrorState({ message, onRetry }) {
  return (
    <div className={styles.errorState} role="alert">
      <p>{message}</p>
      <button type="button" onClick={onRetry}>
        Retry
      </button>
    </div>
  );
}

ErrorState.propTypes = {
  message: PropTypes.string.isRequired,
  onRetry: PropTypes.func.isRequired
};
