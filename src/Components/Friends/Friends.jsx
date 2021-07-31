import PropTypes from "prop-types";
import styles from "./Friends.module.css";

const Friends = ({ avatar, name, isOnline, id }) => {
  return (
    <li className={styles.item} key={id}>
      <span className={styles.status}>{isOnline}</span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

Friends.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Friends;
