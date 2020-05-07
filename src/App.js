import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import ConctractSelect from "./components/contract-select";
import ContractRow from "./components/contract-row";

function App() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  const [selectedContract, setSelectedContract] = useState('');

  useEffect(() => {
      fetchData();
  }, []);
  async function fetchData() {
      await fetch('http://www.mocky.io/v2/5e8465c23000008400cf4395')
          .then(res => res.json())
          .then(res => {
            setData(res);
            setLoading(false);
            setSelectedContract(res['contract_length']['preselected_contract_length']);
          });
  }
  return (
    <div>
      {loading ?
          <p>Loading</p> :
          <div>
            <ConctractSelect options={data['contract_length']} selectedOption={selectedContract} setSelectedOption={setSelectedContract}/>
            <ContractRow items={data.items} selectedContract={selectedContract} assets={data.assets}/>
          </div>
      }
    </div>
  );
}

export default App;
