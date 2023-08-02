// import './App.css';
import { Route, Routes } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import ErrorPage from './components/ErrorPage';
import CountryDetails from './components/CountryDetails';

import countries from './countries.json'


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <div className="list-group">
              <CountriesList countries={countries} />
            </div>
          </div>
          <Routes>
            <Route path="/"/> 
            {countries.map(element => <Route path={`/${element.alpha3Code}`} element={<CountryDetails country={element}/>} />)}
            <Route path="*" element={ <ErrorPage /> } />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
