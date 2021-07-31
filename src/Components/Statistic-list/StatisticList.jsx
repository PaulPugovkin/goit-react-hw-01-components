import Statistic from "../Statistic/Statistic";
import PropTypes from "prop-types";
import style from "./StatisticList.module.css";

const StatisticList = ({ items }) => {
  return (
    <>
      <div className={style.wrapper}>
        <h2 className={style.title}>Upload stats</h2>
        <ul className={style.list}>
          {items.map((item) => (
            <Statistic
              key={item.id}
              label={item.label}
              percentage={item.percentage}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

StatisticList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default StatisticList;
