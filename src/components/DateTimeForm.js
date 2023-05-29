import React, { useState } from 'react';
function DateTimeForm() {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');


  
  function checkDateTime() {
    if (day === '') {
      showMessage('Input data for day is null!');
      return;
    }

    if (month === '') {
      showMessage('Input data for month is null!');
      return;
    }

    if (year === '') {
      showMessage('Input data for year is null!');
      return;
    }

    if (!isNumeric(day)) {
      showMessage('Input data for day is incorrect format!');
      return;
    }

    if (!isNumeric(month)) {
      showMessage('Input data for month is incorrect format!');
      return;
    }

    if (!isNumeric(year)) {
      showMessage('Input data for year is incorrect format!');
      return;
    }

    const dayValue = parseInt(day);
    const monthValue = parseInt(month);
    const yearValue = parseInt(year);

    if (dayValue < 1 || dayValue > 31) {
      showMessage('Input data for day is out of range!');
      return;
    }

    if (monthValue < 1 || monthValue > 12) {
      showMessage('Input data for month is out of range!');
      return;
    }

    if (yearValue < 1000 || yearValue > 3000) {
      showMessage('Input data for year is out of range!');
      return;
    }

    const dateTimeString = `${dayValue}/${monthValue}/${yearValue}`;

    if (isValidDateTime(dateTimeString)) {
      showMessage(`${dateTimeString} is a correct date time.`);
    } else {
      showMessage(`${dateTimeString} is NOT a correct date time.`);
    }
  }


  function isNumeric(value) {
    return /^\d+$/.test(value);
  }

  function isValidDateTime(dateTimeString) {
    const dateTimeRegex = /^(\d{1,2})\/(\d{1,2})\/(\d{4})$/;

    if (!dateTimeRegex.test(dateTimeString)) {
      return false;
    }

    const [, dayValue, monthValue, yearValue] = dateTimeString.match(dateTimeRegex);
    const date = new Date(yearValue, monthValue - 1, dayValue);

    if (
      date.getDate() !== parseInt(dayValue) ||
      date.getMonth() !== parseInt(monthValue) - 1 ||
      date.getFullYear() !== parseInt(yearValue)
    ) {
      return false;
    }

    if (monthValue === '2') {
      if (dayValue > 29) {
        return false;
      }
      if (dayValue === '29') {
        if ((yearValue % 4 === 0 && yearValue % 100 !== 0) || yearValue % 400 === 0) {
          return true;
        } else {
          return false;
        }
      }
    } else if (['4', '6', '9', '11'].includes(monthValue)) {
      if (dayValue > 30) {
        return false;
      }
    }

    return true;
  }

  function showMessage(message) {
    const messageDiv = document.getElementById('message');
    messageDiv.innerText = message;
    document.getElementById('messageTable').style.display = 'table';
  }

  function ClearInput(){
    setDay("");
    setMonth("");
    setYear("");
  }

  return (
    <div>
      <div className="form-group">
        <label htmlFor="dayInput">Day:</label>
        <input
          type="text"
          id="dayInput"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="monthInput">Month:</label>
        <input
          type="text"
          id="monthInput"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="yearInput">Year:</label>
        <input
          type="text"
          id="yearInput"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>

      <div className="form-group">
        <button onClick={checkDateTime}>Check</button>
        <button onClick={ClearInput}>Clear</button>
      </div>
    </div>
  );
}

export default DateTimeForm;
