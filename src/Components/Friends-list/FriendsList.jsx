import Friends from "../Friends/Friends";
import PropTypes from "prop-types";
import styles from "./FriendsList.module.css";

const FriendsList = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => {
        return (
          <Friends
            key={item.id}
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendsList.propTypes = {
  items: PropTypes.array,
};

export default FriendsList;
