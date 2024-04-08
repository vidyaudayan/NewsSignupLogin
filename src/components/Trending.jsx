import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Trending() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then(res => res.json())

      .then(json => setCountries(json))

  }, [])
  return (
    <div className='grid-container'>
      {
        countries.map((country) => (
          <div key={country.name} className="card">
            <div className='card-flag-container'>
              <Link to={country.alpha2Code}><img className='card-flag' src={country.flags.svg} alt="" /></Link>
            </div>
            <div className='card-info'>
              <h2>{country.name}</h2>
              <p>Popualtion: <span>{country.population.toLocaleString()}</span></p>
              <p>Region:{country.region}</p>
              <p>Capital: <span>{country.capital}</span></p>

            </div>


          </div>
        ))
      }
    </div>
  )
}

export default Trending