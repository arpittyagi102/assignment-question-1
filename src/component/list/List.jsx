import ListRow from "./ListRow";
import ListRowCell from "./ListRowCell";

import ListHeader from "./ListHeader";
import ListHeaderCell from "./ListHeaderCell";

import styles from "./List.module.css";

const List = ({ rows, timestamps, currency, setSelectedOrderTimeStamps, setSelectedOrderDetails}) => {
  return (
    <table className={styles.container}>
      <thead>
        <ListHeader>
          <ListHeaderCell>Order ID</ListHeaderCell>
          <ListHeaderCell>Buy/Sell</ListHeaderCell>
          <ListHeaderCell>Country</ListHeaderCell>
          <ListHeaderCell>Order Submitted</ListHeaderCell>
          <ListHeaderCell>Order Volume / {currency}</ListHeaderCell>
        </ListHeader>
      </thead>
      <tbody>
        {rows.map((row,key) => {

            const thisTimestamp= timestamps.results.find((item) => item['&id'] == row['&id']).timestamps            
            return(  
               <ListRow 
                  key={key} 
                  row={row} 
                  setSelectedOrderTimeStamps={setSelectedOrderTimeStamps} 
                  timestamps={thisTimestamp}
                  setSelectedOrderDetails={setSelectedOrderDetails}
                >
                    <ListRowCell>{row["&id"]}</ListRowCell>
                    <ListRowCell>{row.executionDetails.buySellIndicator}</ListRowCell>
                    <ListRowCell>{row.executionDetails.orderStatus}</ListRowCell>
                    <ListRowCell>{thisTimestamp.orderSubmitted}</ListRowCell>
                    <ListRowCell>{row.bestExecutionData.orderVolume[currency]}</ListRowCell>
                </ListRow>
        )})}</tbody>
    </table>
  );
};

export default List;
