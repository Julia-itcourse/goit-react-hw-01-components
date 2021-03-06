import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionsHistory.module.css';

const TransactionsHistory = ({items}) =>{
 
return(
<table className={styles.transactionsHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
      {
          items.map((item)=>
  <tr key = {item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
          )
        }

  </tbody>
</table>
)
    }

    TransactionsHistory.propTypes = {
      items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          currency: PropTypes.string.isRequired,
        })
      ).isRequired,
  }

export default TransactionsHistory;
