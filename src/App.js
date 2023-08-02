// import './App.css';
import { Route, Routes } from 'react-router-dom';
import CountriesList from './components/CountriesList';
import Navbar from './components/Navbar';
import ErrorPage from './components/ErrorPage';
import CountryDetails from './components/CountryDetails';
import { useEffect, useState } from 'react';

// import countries from './countries.json'

function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetch('https://ih-countries-api.herokuapp.com/countries')
       .then((res) => res.json())
       .then((data) => {
          setLoading(true)
          setCountries(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);

  return (
    <div className="App">
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <div className="list-group">
              {loading ? <CountriesList countries={countries} /> : 'Still Loading...'}
            </div>
          </div>
          <Routes>
            <Route path="/"/> 
            {/* Iteration 3 */}
            {/* {countries.map(element => <Route path={`/${element.alpha3Code}`} element={<CountryDetails country={element}/>} />)} */}
            {/* Iteration 5 */}
            <Route path={'/:id'} element={<CountryDetails/>} />
            <Route path="*" element={ <ErrorPage /> } />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
