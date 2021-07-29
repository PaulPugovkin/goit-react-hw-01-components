import Friends from "../Friends/Friends";
import PropTypes from "prop-types";

const FriendsList = ({ items }) => {
	return (
		<ul class="friend-list">
			{items.map(item => {
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
