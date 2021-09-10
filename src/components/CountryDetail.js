import React, { useEffect, useState } from 'react';
import countries from '../countries.json'; //Took the info from coutnires.jsonn

const CountryDetail = (props) => {
  const [theCountry, setTheCountry] = useState();

  useEffect(() => {
    let country = countries.find((eachCountry) => {
      return eachCountry.cca3 === props.match.params.cca3OfTheCountry;
    });
    console.log(country);
    setTheCountry(country);
  });

  return (
    <div id="detail">
      <h1>{props.match.params.cca3OfTheCountry}</h1>
      <h4>{theCountry?.name?.common}</h4>
    </div>
  );
};

export default CountryDetail;
