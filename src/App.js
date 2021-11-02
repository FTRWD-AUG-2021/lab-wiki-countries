import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import countries from './countries.json';
import Home from './components/Home';
import CountryDetail from './components/CountryDetail';
function App() {
  // okay so I want to map out the data available to me. so im going to import that data in the form of countries. i want to map out that data so i will return countries.map((eachCountry)=>{

  // return (<link key=individual-identifier to={/country/}) with a list iof the flag and name.} )
  const CountryList = () => {
    console.log(countries);
    return countries.map((country) => {
      // this is our list. we are listing down all the countries. each list item will have its link
      //  and it will have its flag as an image.
      return (
        <Link key={country.cca3} to={`/country/${country.cca3}`}>
          {/* each item will link to its cca3 (the abbreviation). remember this is a link that is created for 
      each mapped out item. so each item then gets a link created for it. when clicked it goes to that countries
       */}
          <li>
            {country.flag} {country.name.common}
            {/* here we are mapping our our list of countries. we use countries.map((country)=>{
              return the country flag and name which is wrapped in a link tag that routes us to the component details.
            }) */}
          </li>
        </Link>
      );
    });
  };

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">WikiCountries</Link>
            {/* our nav bar contains just one link, which is to our home page. we use a Link to=/ */}
          </li>
        </ul>
      </nav>
      <ul id="countrylist">
        {/* now we want to create and place our CountryList component. we map out our list above and now we place it here in a unordered list tag */}
        <CountryList />
      </ul>

      <Switch>
        {/* here we create our switch functionality which basically allows us to switch which route is being displayed. this way each time we select a new country, it replaces the old country. */}
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/country/:cca3OfTheCountry"
          //this creates a route for each country.
          // each country route will also have attached to it the countryDetail component, which will display the corresponding data.
          component={CountryDetail}
          //each time a countries link is clicked, we initiate the CountryDetail component which will match the selected link cca3 to the cca3 details by grabbing it from the json. it will then return the details in the form of headers. each path is the cca3OFTheCountry as found in props.
        />
      </Switch>
    </div>
  );
}

export default App;
