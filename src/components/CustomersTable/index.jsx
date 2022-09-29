import moment from 'moment';
import classNames from 'classnames/bind';

import React from 'react';

// Components
import DataTable from '../DataTable';

// Data
import customers from '../../data/customers.json';

// Styles
import styles from './style.module.scss';
const cx = classNames.bind(styles);

const NAME = 'customers-table';
const FULL_DATE_FORMAT = 'MM/DD/YYYY HH:mm:ss'
const SIMPLE_DATE_FORAMT = 'MM/DD/YYYY';

const columns = [
  {
    field: 'userName',
    label: 'User',
    render: (row) => (
      <div className={cx(`${NAME}-username`)}>
        <div className={cx(`${NAME}-username-left`)}>
          <div className={cx(`${NAME}-username-avatar`)}/>
          {/* <img
            className={cx(`${NAME}-username-avatar`)}
            src={row.avatar}
            alt='User Avatar'
          /> */}
        </div>
        <div className={cx(`${NAME}-username-right`)}>
          <div>{row.userName}</div>
          <div className={cx(`${NAME}-username-email`)}>{row.email}</div>
        </div>
      </div>
    )
  },
  { field: 'name', label: 'Name' },
  {
    field: 'joinedAt',
    label: 'Joined On',
    render: (row) => (
      <div>{moment(row.lastLogin).format(SIMPLE_DATE_FORAMT)}</div>
    )        
  },
  {
    field: 'lastLogin',
    label: 'Last Login',
    render: (row) => (
      <div>{moment(row.lastLogin).format(FULL_DATE_FORMAT)}</div>
    )        
  },
  {
    field: 'id',
    label: 'Transations / Balance',
    render: () => (
      <div className={cx(`${NAME}-transactions`)}>
        <div>-$220,00</div>
        <div>$500,00</div>
      </div>
    )
  },
  { 
    field: 'status',
    label: 'Status',
    render: (row) => (
      <div className={cx(`${NAME}-status`)}>
        {row.status}
        <span className={cx(row.status.toLowerCase())} />
      </div>
    )
  },
  { field: 'bio', label: 'Bio' },
];

const CustomersTable = () => (
  <DataTable 
    className={cx(NAME)}
    data={customers}
    columns={columns}
  />
);

export default CustomersTable;
