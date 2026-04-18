import PropTypes from 'prop-types';
import styles from './FloatingShape.module.css';

function FloatingShape({ variant, className }) {
  const combinedClassName =
    variant === 'circle'
      ? `${styles.shape} ${styles.circle} ${className}`
      : `${styles.shape} ${styles.rectangle} ${className}`;

  return <div className={combinedClassName} aria-hidden="true" />;
}

FloatingShape.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(['circle', 'rectangle']).isRequired
};

FloatingShape.defaultProps = {
  className: ''
};

export default FloatingShape;
