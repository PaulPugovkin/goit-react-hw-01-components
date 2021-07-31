import PropTypes from "prop-types";
import styles from "./Transactions.module.css";

const Transactions = ({ id, type, amount, currency }) => {
  return (
    <>
      <tr key={id} className={styles.item}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
    </>
  );
};

Transactions.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Transactions;
