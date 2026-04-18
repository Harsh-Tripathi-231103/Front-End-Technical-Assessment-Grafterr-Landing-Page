import PropTypes from 'prop-types';
import styles from './GradientText.module.css';

function GradientText({ children, as: Tag = 'span' }) {
  return <Tag className={styles.gradientText}>{children}</Tag>;
}

GradientText.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default GradientText;
