import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route } from 'react-router-dom';
import countries from './countries.json';
import Home from './components/Home';
import CountryDetail from './components/CountryDetail';
function App() {
<<<<<<< HEAD
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
        <Route
          exact
          path="/country/:cca3OfTheCountry"
          component={CountryDetail}
        />
      </Switch>
    </div>
  );
>>>>>>> adea51441ab35b6c0e5489e490e9a5d9626d2a77
}

export default App;
