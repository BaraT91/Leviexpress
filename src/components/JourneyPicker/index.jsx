import React, { useEffect, useState } from 'react';
import './style.css';

const CityOptions = ({ cities }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {cities.map((city) => (
        <option key={city.code} value={city.code}>
          {city.name}
        </option>
      ))}
    </>
  );
};

const DataOptions = ({ dates }) => {
  return (
    <>
      <option value="">Vyberte</option>
      {dates.map((dates) => (
        <option key={dates.dateBasic} value={dates.dateBasic}>
          {dates.dateCs}
        </option>
      ))}
    </>
  );
};

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const selectFromCity = (event) => {
    setFromCity(event.target.value);
  };

  const [toCity, setToCity] = useState('');
  const selectToCity = (event) => {
    setToCity(event.target.value);
  };

  const [date, setDate] = useState('');
  const selectDate = (event) => {
    setDate(event.target.value);
  };

  const [cities, setCities] = useState([]);

  const [dates, setDates] = useState([]);

  useEffect(() => {
    const fetchCities = async () => {
      const resp = await fetch(
        'https://apps.kodim.cz/daweb/leviexpress/api/cities',
      );
      const data = await resp.json();
      setCities(data.results);
    };
    fetchCities();
  }, []);

  useEffect(() => {
    const fetchDates = async () => {
      const resp = await fetch(
        'https://apps.kodim.cz/daweb/leviexpress/api/dates',
      );
      const data = await resp.json();
      setDates(data.results);
    };
    fetchDates();
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await fetch(
      `https://apps.kodim.cz/daweb/leviexpress/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}`,
    );
    const data = await resp.json();
    onJourneyChange(data.results);
  };

  console.log(cities);

  const isButtonDisabled = !fromCity || !toCity || !date;
  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form">
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select onChange={selectFromCity} value={fromCity}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select onChange={selectToCity} value={toCity}>
              <CityOptions cities={cities} />
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select onChange={selectDate} value={date}>
              <DataOptions dates={dates} />
            </select>
          </label>
          <div className="journey-picker__controls">
            <button
              className="btn"
              type="submit"
              onClick={handleSubmit}
              disabled={isButtonDisabled}
            >
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src="/map.svg" />
      </div>
    </div>
  );
};
