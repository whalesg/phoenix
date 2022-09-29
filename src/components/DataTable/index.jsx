import cx from 'classnames';

import React, { useEffect, useCallback, useState, useMemo } from 'react';

// Style
import styles from './style.module.scss';

const NAME = 'table';
const BUCKET_SIZE = 20;

const DataTable = ({
  className,
  columns,
  data
}) => {
  const [tableData, setTableData] = useState([]);

  const hasMore = useMemo(
    () => {
      return data.length && data.length !== tableData.length
    },
    [data.length, tableData.length]
  );

  const updateTableData = useCallback(
    () => {
      setTableData(data.slice(0, tableData.length + BUCKET_SIZE));
    },
    [data, tableData]
  );

  useEffect(() => {
    updateTableData();
  }, [data]);

  return (
    <div>
      <table className={cx(className, styles[NAME])}>
        <thead className={styles[`${NAME}-head`]}>
          <tr>
            {columns.map(({ field, label }) => (
              <th key={field}>{label || field}</th>
            ))}
          </tr>
        </thead>

        <tbody className={styles[`${NAME}-body`]}>
          {tableData.map((r) => (
            <tr key={r.id}>
              {columns.map(({ field }, ci) => (
                <td key={field} className={styles.cell}>
                  {columns[ci].render ? columns[ci].render(r) : r[field]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {hasMore ? (
        <div className={styles.footer}>
          <button onClick={updateTableData}>View More...</button>
        </div>
      ) : null}
    </div>
  )
}

export default DataTable;