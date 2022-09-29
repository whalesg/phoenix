import React from 'react';

// Components
import CustomersTable from './components/CustomersTable';

/**
 *
 * Welcome to the Data Sorting coding challenge.
 *
 * Load json data from `/public/data.json` and render it in a table
 * using `/public/table.png` design.
 *
 * Make this behaviour reusable.
 *
 * Ask questions & have fun!
 *
 */

const App = () => (
  <div className="App">
    <CustomersTable />
  </div>
);

export default App;
