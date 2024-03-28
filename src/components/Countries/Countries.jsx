import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountry, setVisitedCountry] = useState([]);
    
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=> res.json())
        .then(data=> setCountries(data))
    },[]);
    const handleVisitedCountry = country =>{
        console.log("this country is visited");
        const allVisitedCountry = [...visitedCountry, country];
        setVisitedCountry(allVisitedCountry);
    };
    const handleRemoveCountry = country =>{
        let allVisitedCountry = [...visitedCountry];
        allVisitedCountry = allVisitedCountry.filter(obj => obj.cca3 !== country.cca3);
        setVisitedCountry(allVisitedCountry);
    };
    console.log(visitedCountry);
    return (
        <div>
            <div className="countries">
                {
                    visitedCountry.map(country=>(
                        <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} country={country} isVisitedCountry={true} handleRemoveCountry={handleRemoveCountry}> </Country> 
                    ))
                }
            </div>

            <h2> AllCountries : {countries.length}</h2>
           
            <div className="countries">
            {
                countries.map(country =>(
                    <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} country={country} isVisitedCountry={false}> </Country>
                ))
            }
            </div>
        </div>
    );
};

export default Countries;