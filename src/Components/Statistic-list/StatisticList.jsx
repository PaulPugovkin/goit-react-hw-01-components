import Statistic from "../Statistic/Statistic";
import PropTypes from "prop-types";

const StatisticList = ({ items }) => {
	return (
		<>
			<h2 class="title">Upload stats</h2>
			<ul class="stat-list">
				{items.map(item => (
					<Statistic
						key={item.id}
						label={item.label}
						percentage={item.percentage}
					/>
				))}
			</ul>
		</>
	);
};

StatisticList.propTypes = {
	items: PropTypes.array.isRequired,
};

export default StatisticList;
