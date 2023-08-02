import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import countries from '../countries.json';

const CountryDetails = (props) => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false)
  const {id} = useParams();

  useEffect(() => {
    fetch(`https://ih-countries-api.herokuapp.com/countries/${id}`)
       .then((res) => res.json())
       .then((data) => {
          setCountry(data);
          setLoading(true)
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, [id]);


    return (
      <div className="col-7">
        {loading && <>
        <img
          src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
          alt={country.name.common} srcset="" />
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: '30%'}}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country.borders.map(el => <li><Link to={`/${el}`}>{el}</Link></li>)}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
        </>
        }
    </div>
    );
}
 
export default CountryDetails;