import Wrapper from "./Components/Wrapper/Wrapper.jsx";

import Profile from "./Components/User/Profile.jsx";
import userData from "./Components/User/user-data.json";

import StatisticList from "./Components/Statistic-list/StatisticList.jsx";
import stasticsData from "./Components/Statistic/statistical-data.json";

import FriendsList from "./Components/Friends-list/FriendsList.jsx";
import friendsData from "./Components/Friends/friends-data.json";

import TransactionsHistory from "./Components/Transactions-history/TransactionsHistory.jsx";
import transactionsData from "./Components/Transactions/transactions-data.json";

function App() {
	return (
		<>
			<Wrapper title={"profile"}>
				<Profile
					name={userData.name}
					tag={userData.tag}
					location={userData.location}
					avatar={userData.avatar}
					stats={userData.stats}
				/>
			</Wrapper>
			<Wrapper title="statistics">
				<StatisticList items={stasticsData} />
			</Wrapper>
			<Wrapper title="friends-list">
				<FriendsList items={friendsData} />
			</Wrapper>
			<Wrapper title="transactions">
				<TransactionsHistory items={transactionsData} />
			</Wrapper>
		</>
	);
}

export default App;
