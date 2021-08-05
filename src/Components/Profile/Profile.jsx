import PropTypes from "prop-types";
import style from "./Profile.module.css";

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <>
      <div className={style["profile-wrapper"]}>
        <div>
          <img src={avatar} alt={name} className="avatar" width="150" />
          <p className={style.name}>{name}</p>
          <p className={style.tag}>@{tag}</p>
          <p className={style.location}>{location}</p>
        </div>

        <ul className={style.stats}>
          <li className={style.item}>
            <span className={style.label}>Followers</span>
            <span className={style.quantity}>{stats.followers}</span>
          </li>
          <li className={style.item}>
            <span className={style.label}>Views</span>
            <span className={style.quantity}>{stats.views}</span>
          </li>
          <li className={style.item}>
            <span className={style.label}>Likes</span>
            <span className={style.quantity}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};

export default Profile;
