import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";


function CountryDetails() {

    const apiUrl = "https://ih-countries-api.herokuapp.com/countries/:alpha3Code";
    const [country, setCountry] = useState([]);
  
    useEffect(() => {
      fetch(apiUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCountry(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);



    return (
        <div>
            <Navbar />

            <h2>Country Details</h2>
            <div>
                <div className="container">
                    <p style={{ fontsize: "24px", fontweight: "bold" }}>Country Details</p>

                    <h1>{country.name.official}</h1>

                    <table className="table">
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td style={{ width: "30%" }}>Capital </td>
                                <td>{country.capital}</td>
                            </tr>
                            <tr>
                                <td>Area</td>
                                <td>
                                    {country.area} km
                                </td>
                            </tr>
                            <tr>
                                <td>{country.borders}</td>
                                {/* <td>
                                    <ul>
                                        <li><a href="/AND">Andorra</a></li>
                                        <li><a href="/BEL">Belgium</a></li>
                                        <li><a href="/DEU">Germany</a></li>
                                        <li><a href="/ITA">Italy</a></li>
                                        <li><a href="/LUX">Luxembourg</a></li>
                                        <li><a href="/MCO">Monaco</a></li>
                                        <li><a href="/ESP">Spain</a></li>
                                        <li><a href="/CHE">Switzerland</a></li>
                                    </ul>
                                </td> */}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

    )
}

export default CountryDetails;
