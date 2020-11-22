import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import getRandomColor from '../../getRandomColor';



const Statistics = ({title, stats}) =>
{ return(
    <div className={styles.statistics}>
      {title ?  <h2 className={styles.title}>{title}</h2> : null}
  <ul className={styles.statList}>
      {stats.map((el) =>
      <li className = {styles.item} style = {{backgroundColor: getRandomColor()}}key = {el.id}>
<span className = {styles.label}>{el.label} </span>
<span className = {styles.percentage}>{el.percentage}%</span>
      </li>)}
    </ul>
</div>
)

}


Statistics.defaultProps = {
title: "Title not available",
stats: "Statistics not available"
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};


export default Statistics;

