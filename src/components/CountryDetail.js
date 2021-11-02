import React, { useEffect, useState } from 'react';
import countries from '../countries.json'; //Took the info from coutnires.jsonn
import { Link } from 'react-router-dom';

const CountryDetail = (props) => {
  const [theCountry, setTheCountry] = useState({ borders: [] });
  //i Want this componant to display the details of each selected country. I want it to display the country, the capital, the language, the map, the flag, and the bordering coutnries. this means im going to have to map out the data into a div. becuase i want the componant to change based off of the newly selected countries that also means im going to need to use useState and useEffect. usEffect will be used to set the state everytime a country is selected. everytime the country is selected and the new country is set, the page will re-render to reflect the newly mapped out country.
  useEffect(() => {
    let country = countries.find((eachCountry) => {
      //here we are wanting to display the selected country. so we create a variable known as country. in this variable we want to store and display the information from the selected country. so we import our countiries from our database and we use a find method to search. now our search parameters are going to be at variable to whatever we select, and we dont want to make a hundred links. we are going to be finding a lot of countries so we want to be able to use the data we have to find the data we need. so in our find method we are going to need a function that helps us find the selected data. each country is going to have a unique cca3, which is its abberviated Id. so we want to find that id. in order to do this we need to create a function. the function is basically just going to act as instructions for the computer. we want the computer to take the sele
      console.log(props);

      console.log(countries[1]);
      return eachCountry.cca3 === props.match.params.cca3OfTheCountry;
      //we match the selected cca3 to the props(the title for the objects passing into this function.)match.params.cca3ofTheCountry. we do this by console.log(props) the name representing what is being passed into the function (const CountryDetail = (props) =>{ }  ) so we find the country matching the one passing through as a prop and we return that country as our new country variable. we the setTheCountry(country) meaning that is the current country of whose details will be displayed.
    });
    console.log(country);
    setTheCountry(country);
  });

  const ShowBorders = () => {
    let borders = theCountry.borders.map((border) => {
      //borders is going to be equal to which ever country the useState is set too.borders.map(we map it using a function that finds the borders associated with cca3, returns it into a variable known as borders, then maps it out using a link tag that goes to the border.cca3. we place the border names in a list tag
      return countries.find((country) => {
        return country.cca3 === border;
        //since the borders are is an array that we want to assin links to we need extract those borders, map them as a list with a link. this is going to be its own component
      });
    });
    return borders.map((border) => {
      return (
        <Link to={`/country/${border.cca3}`}>
          <li>{border.name.common}</li>
        </Link>
      );
    });
    // return borders;
  };

  return (
    <div id="detail">
      {/* here we are just placing the details found in our json into different headers to be displayed when the component is called. */}
      <h1>{props.match.params.cca3OfTheCountry}</h1>
      <h4>{theCountry?.name?.common}</h4>
      <h4>{theCountry?.capital?.[0]}</h4>
      <h4>
        {theCountry?.area} km <sup>2</sup>
      </h4>
      <ShowBorders />
    </div>
  );
};

export default CountryDetail;
