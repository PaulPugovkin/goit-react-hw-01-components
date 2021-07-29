import PropTypes from "prop-types";

const Friends = ({ avatar, name, isOnline, id }) => {
	return (
		<li class="item" key={id}>
			<span class="status">{isOnline}</span>
			<img class="avatar" src={avatar} alt={name} width="48" />
			<p class="name">{name}</p>
		</li>
	);
};

Friends.propTypes = {
	name: PropTypes.string.isRequired,
	isOnline: PropTypes.bool.isRequired,
	avatar: PropTypes.string.isRequired,
};

export default Friends;
