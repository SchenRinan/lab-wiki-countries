import { Link } from "react-router-dom";
// import countries from '../countries.json';

const CountryDetails = (props) => {
    return (
            <div className="col-7">
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${props.country.alpha2Code.toLowerCase()}.png`}
                alt={props.country.name.common} srcset="" />
              <h1>{props.country.name.common}</h1>
              <table className="table">
                <thead></thead>
                <tbody>
                  <tr>
                    <td style={{width: '30%'}}>Capital</td>
                    <td>{props.country.capital}</td>
                  </tr>
                  <tr>
                    <td>Area</td>
                    <td>
                      {props.country.area} km
                      <sup>2</sup>
                    </td>
                  </tr>
                  <tr>
                    <td>Borders</td>
                    <td>
                      <ul>
                        {props.country.borders.map(el => <li><Link to={`/${el}`}>{el}</Link></li>)}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>
    );
}
 
export default CountryDetails;