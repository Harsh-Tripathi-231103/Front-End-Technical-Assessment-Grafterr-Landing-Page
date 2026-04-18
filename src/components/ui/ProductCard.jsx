import PropTypes from 'prop-types';
import styles from './ProductCard.module.css';

function ProductCard({ product }) {
  return (
    <article className={styles.card}>
      <div className={styles.mediaFrame}>
        <img
          className={styles.productImage}
          src={product.image.src}
          alt={product.image.alt}
        />
      </div>
      <div className={styles.copy}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
      <ul className={styles.highlights}>
        {product.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </article>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired
    }).isRequired,
    highlights: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};

export default ProductCard;
