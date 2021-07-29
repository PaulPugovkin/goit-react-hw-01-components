import PropTypes from "prop-types";

const Statistic = ({ id, label, percentage }) => {
	return (
		<li class="item" key={id}>
			<span class="label">{label}</span>
			<span class="percentage">{percentage}</span>
		</li>
	);
};

Statistic.propTypes = {
	label: PropTypes.string.isRequired,
	percentage: PropTypes.number.isRequired,
};

export default Statistic;
