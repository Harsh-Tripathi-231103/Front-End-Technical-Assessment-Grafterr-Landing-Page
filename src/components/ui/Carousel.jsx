import PropTypes from 'prop-types';
import { useRef } from 'react';
import ProductCard from './ProductCard';
import { useCarousel } from '../../hooks/useCarousel';
import styles from './Carousel.module.css';

function Carousel({ items, config }) {
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const {
    itemsPerView,
    currentIndex,
    canGoPrevious,
    canGoNext,
    goToPrevious,
    goToNext
  } = useCarousel(items, config?.itemsPerView);

  const handleTouchStart = (event) => {
    touchStartX.current = event.changedTouches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    touchEndX.current = event.changedTouches[0].clientX;
    const difference = touchStartX.current - touchEndX.current;

    if (Math.abs(difference) < 40) {
      return;
    }

    if (difference > 0) {
      goToNext();
      return;
    }

    goToPrevious();
  };

  return (
    <div className={styles.carouselShell}>
      {config?.showArrows ? (
        <div className={styles.controls}>
          <button
            className={styles.arrow}
            type="button"
            onClick={goToPrevious}
            disabled={!canGoPrevious}
            aria-label="Previous product"
          >
            ←
          </button>
          <button
            className={styles.arrow}
            type="button"
            onClick={goToNext}
            disabled={!canGoNext}
            aria-label="Next product"
          >
            →
          </button>
        </div>
      ) : null}
      <div
        className={styles.viewport}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`${styles.track} ${styles[`view${itemsPerView}`]} ${styles[`index${currentIndex}`]}`}
        >
          {items.map((item) => (
            <div key={item.id} className={styles.slide}>
              <ProductCard product={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Carousel.propTypes = {
  config: PropTypes.shape({
    itemsPerView: PropTypes.shape({
      mobile: PropTypes.number,
      tablet: PropTypes.number,
      desktop: PropTypes.number
    }),
    showArrows: PropTypes.bool
  }),
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Carousel;
