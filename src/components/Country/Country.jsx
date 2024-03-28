
import "./country.css"
const Country = ({country, handleVisitedCountry, isVisitedCountry, handleRemoveCountry}) => {
    const {name, flags, area, capital, population, cca3} = country;
   
    
    return (
        <div className={`country ${isVisitedCountry && "visited-country"}`}>
            <div>
            <h2>{name?.common}</h2>
            <small>Code : {cca3}</small>
            </div>
            <img src={flags?.png} alt="" />
            <p>Capital: {capital}</p> 
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <br />
           {
            isVisitedCountry ?  <button onClick={()=>{handleRemoveCountry(country)}}>Remove</button> :  <button onClick={()=>{handleVisitedCountry(country)}}>Add visited </button> 
           }
            
           
        </div>
    );
};

export default Country;