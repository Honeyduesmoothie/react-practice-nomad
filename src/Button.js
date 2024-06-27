import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ value }) => {
  return <button className={styles.btn}>{value}</button>;
};

Button.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Button;
