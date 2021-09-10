import React from 'react';

const CountryDetail = (props) => {
    
    return (
        <div id="detail">
            
            <h1>{props.match.params.cca3OfTheCountry}</h1>
        </div>
    );
};

export default CountryDetail;