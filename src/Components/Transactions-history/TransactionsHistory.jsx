import Transactions from "../Transactions/Transactions";
import PropTypes from "prop-types";
import styles from "./TransactionsHistory.module.css";

const TransactionsHistory = ({ items }) => {
  return (
    <div className={styles["table-wrapper"]}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>Type</th>
            <th className={styles.th}>Amount</th>
            <th className={styles.th}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => {
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
    </div>
  );
};

TransactionsHistory.propTypes = {
  items: PropTypes.array.isRequired,
};

export default TransactionsHistory;
