import PropTypes from "prop-types";
import style from "./Statistic.module.css";

const Statistic = ({ id, label, percentage }) => {
  const color = () => "#" + Math.random().toString(16).substr(-6);
  return (
    <li className={style.item} key={id} style={{ backgroundColor: color() }}>
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default Statistic;
