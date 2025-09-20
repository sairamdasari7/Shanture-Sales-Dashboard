import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SalesChart from './components/SalesChart';
import SalesTable from './components/SalesTable';

function App() {
  const [sales, setSales] = useState([]);
  const [aggregated, setAggregated] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL + '/sales')
      .then(res => setSales(res.data));
    axios.get(process.env.REACT_APP_API_URL + '/sales/aggregated')
      .then(res => setAggregated(res.data));
  }, []);

  return (
    <div className="App">
      <h1>📊 Shanture Sales Analytics</h1>
      <SalesChart data={aggregated} />
      <SalesTable data={sales} />
    </div>
  );
}

export default App;