import PropTypes from 'prop-types';
import styles from './Skeleton.module.css';

function Skeleton({ className }) {
  return <div className={`${styles.skeleton} ${className}`} aria-hidden="true" />;
}

Skeleton.propTypes = {
  className: PropTypes.string
};

Skeleton.defaultProps = {
  className: ''
};

export default Skeleton;
