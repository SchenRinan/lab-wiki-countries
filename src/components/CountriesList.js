import { Link } from "react-router-dom";
// import CountryDetails from "./CountryDetails";


const CountriesList = props => {
    const countriesArray = item =>{
        const result = [];
        item.forEach(element =>
            result.push(
                    <Link
                        className="list-group-item list-group-item-action"
                        to={`/${element.alpha3Code}`} style={{textAlign: 'center'}}
                        >
                            <img
                                src={`https://flagpedia.net/data/flags/icon/72x54/${element.alpha2Code.toLowerCase()}.png`}
                                alt={element.name.common} srcset="" />
                            <br />
                            {element.name.common}
                    </Link>
            )
        )
        return result;
    }

    return (
    <div>    
        {/* {props.countries[0].name.common} */}
        {countriesArray(props.countries)}
    </div>
    );
}
 
export default CountriesList;