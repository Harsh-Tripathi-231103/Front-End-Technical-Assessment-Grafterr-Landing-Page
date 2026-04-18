import PropTypes from 'prop-types';
import styles from './GradientButton.module.css';

function GradientButton({ href, label, variant = 'primary' }) {
  const className =
    variant === 'secondary' ? styles.secondaryButton : styles.primaryButton;

  return (
    <a className={className} href={href}>
      {label}
    </a>
  );
}

GradientButton.propTypes = {
  href: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary'])
};

export default GradientButton;
