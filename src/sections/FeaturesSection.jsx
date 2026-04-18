import PropTypes from 'prop-types';
import Carousel from '../components/ui/Carousel';
import GradientText from '../components/ui/GradientText';
import { ErrorState, FeaturesSkeleton } from '../components/ui/SectionState';
import styles from './FeaturesSection.module.css';

function FeaturesSection({
  featuresSection,
  carouselConfig,
  loading,
  error,
  onRetry
}) {
  return (
    <section className={styles.featuresSection} id="features">
      <div className={styles.container}>
        {loading ? <FeaturesSkeleton /> : null}

        {!loading && error ? <ErrorState message={error} onRetry={onRetry} /> : null}

        {!loading && !error && featuresSection ? (
          <div className={styles.content}>
            <div className={styles.headingRow}>
              <div className={styles.titleBlock}>
                <span className={styles.kicker}>Products</span>
                <h2>
                  {featuresSection.title}{' '}
                  <GradientText>{featuresSection.titleAccent}</GradientText>
                </h2>
              </div>
              <div className={styles.subtitleWrap}>
                <span className={styles.divider} />
                <p>{featuresSection.subtitle}</p>
              </div>
            </div>

            <Carousel
              items={featuresSection.products}
              config={carouselConfig}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}

FeaturesSection.propTypes = {
  carouselConfig: PropTypes.object,
  error: PropTypes.string.isRequired,
  featuresSection: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  onRetry: PropTypes.func.isRequired
};

FeaturesSection.defaultProps = {
  carouselConfig: null,
  featuresSection: null
};

export default FeaturesSection;
