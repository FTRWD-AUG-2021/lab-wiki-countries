import logo from './logo.svg';
import './App.css';
import {Link, Switch, Route} from "react-router-dom";
import countries from './countries.json'

function App() {

  const CountryList = () => {
    return countries.map((country) => {
      return <Link key={country.cca3} to={`/country/${country.cca3}`}><li>{country.flag} {country.name.common}</li></Link>
    })
  }

  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">WikiCountries</Link>
          </li>
        </ul>
      </nav>
      <ul id="countrylist">
        <CountryList />
      </ul>
    </div>
  );
}

export default App;
