import Transactions from "../Transactions/Transactions";
import PropTypes from "prop-types";

const TransactionsHistory = ({ items }) => {
	return (
		<table class="transaction-history">
			<thead>
				<tr>
					<th>Type</th>
					<th>Amount</th>
					<th>Currency</th>
				</tr>
			</thead>

			<tbody>
				{items.map(item => {
					return (
						<Transactions
							key={item.id}
							type={item.type}
							amount={item.amount}
							currency={item.currency}
						/>
					);
				})}
			</tbody>
		</table>
	);
};

TransactionsHistory.propTypes = {
	items: PropTypes.array.isRequired,
};

export default TransactionsHistory;
