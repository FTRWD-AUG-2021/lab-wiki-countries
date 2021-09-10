import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import {Link, Switch, Route} from "react-router-dom";
import countries from './countries.json'
import Home from './components/Home'
import CountryDetail from './components/CountryDetail'
=======
import { Link, Switch, Route } from 'react-router-dom';
import countries from './countries.json';

>>>>>>> d1c0c7e7127c89ab4bf7474c7494491a3a365e25
function App() {
	const CountryList = () => {
		return countries.map((country) => {
			return (
				<Link key={country.cca3} to={`/country/${country.cca3}`}>
					<li>
						{country.flag} {country.name.common}
					</li>
				</Link>
			);
		});
	};

<<<<<<< HEAD
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

      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/country/:cca3OfTheCountry" component={CountryDetail} />
      </Switch>
    </div>
  );
=======
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
>>>>>>> d1c0c7e7127c89ab4bf7474c7494491a3a365e25
}

export default App;
