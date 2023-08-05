import styles from "./ListRow.module.css";

const ListCell = ({ children, row, setSelectedOrderTimeStamps, timestamps,setSelectedOrderDetails }) => {
  return <tr 
            className={styles.cell} 
            onClick={() => {
                setSelectedOrderDetails(row.executionDetails)
                setSelectedOrderTimeStamps(timestamps)
          }}>{children}</tr>;
              
};

export default ListCell;
