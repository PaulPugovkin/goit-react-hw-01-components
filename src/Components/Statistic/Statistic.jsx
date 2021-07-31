import PropTypes from "prop-types";
import style from "./Statistic.module.css";

const Statistic = ({ id, label, percentage }) => {
  return (
    <li className={style.item} key={id}>
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
