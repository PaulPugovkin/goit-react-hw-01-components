import Wrapper from "./Components/Wrapper";

import Profile from "./Components/Profile";
import userData from "./Data/user-data.json";

import StatisticList from "./Components/Statistic-list";
import stasticsData from "./Data/statistical-data.json";

import FriendsList from "./Components/Friends-list";
import friendsData from "./Data/friends-data.json";

import TransactionsHistory from "./Components/Transactions-history";
import transactionsData from "./Data/transactions-data.json";

function App() {
  return (
    <>
      <Wrapper>
        <Profile
          name={userData.name}
          tag={userData.tag}
          location={userData.location}
          avatar={userData.avatar}
          stats={userData.stats}
        />
      </Wrapper>
      <Wrapper>
        <StatisticList items={stasticsData} />
      </Wrapper>
      <Wrapper>
        <FriendsList items={friendsData} />
      </Wrapper>
      <Wrapper>
        <TransactionsHistory items={transactionsData} />
      </Wrapper>
    </>
  );
}

export default App;
