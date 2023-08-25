import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 

function HomePage() {
  const apiUrl = "https://ih-countries-api.herokuapp.com/countries";
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountries(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>WikiCountries: Your Guide to the World</h2>
      {countries.map((country) => {
        let code = country.alpha2Code.toLowerCase();
        let code3 = country.alpha3Code;

        return (
          <Link to={`/country/${code3}`} key={country._id}>
            <div>
              <a className="list-group-item list-group-item-action" href={`/${code}`}>
                {country.name.official}
              </a>
              <img src={`https://flagpedia.net/data/flags/icon/72x54/${code}.png`} alt={`/${code}`} />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default HomePage;
