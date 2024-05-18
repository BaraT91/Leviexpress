import React, { useEffect, useState } from 'react';
import './style.css';

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('');
  const selectFromCity = (event) => {
    setFromCity(event.target.value);
    console.log(event.target.value);
  };
  console.log(fromCity);

  const [toCity, setToCity] = useState('');
  const selectToCity = (event) => {
    setToCity(event.target.value);
    console.log(event.target.value);
  };
  console.log(toCity);

  const [date, setDate] = useState('');
  const selectDate = (event) => {
    setDate(event.target.value);
    console.log(event.target.value);
  };
  console.log(date);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      'Odesílám formulář s cestou:' +
        'Z:' +
        fromCity +
        'Do' +
        toCity +
        'Dne:' +
        date,
    );
  };

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form">
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select onChange={selectFromCity} value={fromCity}>
              <option value="">Vyberte</option>
              <option value="mesto01">Město 01</option>
              <option value="mesto02">Město 02</option>
              <option value="mesto03">Město 03</option>
              <option value="mesto04">Město 04</option>
              <option value="mesto05">Město 05</option>
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select onChange={selectToCity} value={toCity}>
              <option value="">Vyberte</option>
              <option value="mesto01">Město 01</option>
              <option value="mesto02">Město 02</option>
              <option value="mesto03">Město 03</option>
              <option value="mesto04">Město 04</option>
              <option value="mesto05">Město 05</option>
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select onChange={selectDate} value={date}>
              <option value="">Vyberte</option>
              <option value="datum01">Datum 01</option>
              <option value="datum02">Datum 02</option>
              <option value="datum03">Datum 03</option>
              <option value="datum04">Datum 04</option>
              <option value="datum05">Datum 05</option>
            </select>
          </label>
          <div className="journey-picker__controls">
            <button className="btn" type="submit" onClick={handleSubmit}>
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src="/map.svg" />
      </div>
    </div>
  );
};
