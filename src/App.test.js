import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import DateTimeChecker from './DateTimeChecker';

describe('DateTimeChecker', () => {
  test('renders without error', () => {
    render(<DateTimeChecker />);
  });

  test('Check the day text box is null', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '' } });
    fireEvent.click(checkButton);

    const errorMessage = getByText('Input data for day is null!');
    expect(errorMessage).toBeInTheDocument();
  });


  test('Check The month text box is null', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '4' } });
    fireEvent.change(monthInput, { target: { value: '' } });
    fireEvent.change(yearInput, { target: { value: '2000' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('Input data for month is null!');
    expect(successMessage).toBeInTheDocument();
  });


  test('Check The date is valid', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '29' } });
    fireEvent.change(monthInput, { target: { value: '4' } });
    fireEvent.change(yearInput, { target: { value: '2000' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('29/4/2000 is a correct date time.');
    expect(successMessage).toBeInTheDocument();
  });


  test('Check The year text box is null', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '4' } });
    fireEvent.change(monthInput, { target: { value: '6' } });
    fireEvent.change(yearInput, { target: { value: '' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('Input data for year is null!');
    expect(successMessage).toBeInTheDocument();
  });

  test('Check The year text box is null', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, { target: { value: '32' } });
    fireEvent.change(monthInput, { target: { value: '4' } });
    fireEvent.change(yearInput, { target: { value: '2022' } });
    fireEvent.click(checkButton);

    const successMessage = getByText('Input data for day is out of range!');
    expect(successMessage).toBeInTheDocument();
  });


  test('Check User input negative number into the Day text box', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');
  
    fireEvent.change(dayInput, { target: { value: '-32' } });
    fireEvent.change(monthInput, { target: { value: '4' } });
    fireEvent.change(yearInput, { target: { value: '2022' } });
    fireEvent.click(checkButton);
  
    const errorMessage = getByText('Input data for day is out of range!');
    expect(errorMessage).toBeInTheDocument();
  });

  test('Check User input negative number into the Month text box', () => {
    const { getByLabelText, getByText } = render(<DateTimeChecker />);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');
  
    fireEvent.change(dayInput, { target: { value: '30' } });
    fireEvent.change(monthInput, { target: { value: '-4' } });
    fireEvent.change(yearInput, { target: { value: '2022' } });
    fireEvent.click(checkButton);
  
    const errorMessage = getByText('Input data for month is out of range!');
    expect(errorMessage).toBeInTheDocument();
  });
  
  test('Check User input negative number into the Year text box',() => {
    const {getByLabelText, getByText} = render(<DateTimeChecker/>);
    const dayInput = getByLabelText('Day:');
    const monthInput = getByLabelText('Month:');
    const yearInput = getByLabelText('Year:');
    const checkButton = getByText('Check');

    fireEvent.change(dayInput, {target: {value: '12'}});
    fireEvent.change(monthInput, {target: {value: '12'}});
    fireEvent.change(yearInput, {target: {value: '-2022'}});
    fireEvent.click(checkButton);

    const errorMessage = getByText('Input data for year is out of range!');
    expect(errorMessage).toBeInTheDocument();
  })

  test('check the reset button', () => {
    render(<DateTimeChecker />);
    
    const dayInput = screen.getByLabelText('Day:');
    const monthInput = screen.getByLabelText('Month:');
    const yearInput = screen.getByLabelText('Year:');
    const checkButton = screen.getByText('Check');
    const resetButton = screen.getByText('Reset');

    fireEvent.change(dayInput, { target: { value: '12' } });
    fireEvent.change(monthInput, { target: { value: '10' } });
    fireEvent.change(yearInput, { target: { value: '2022' } });
    fireEvent.click(checkButton);

    expect(screen.getByText('12/10/2022 is a correct date time.')).toBeInTheDocument();

    fireEvent.change(dayInput, { target: { value: '15' } });
    fireEvent.change(monthInput, { target: { value: '7' } });
    fireEvent.change(yearInput, { target: { value: '2023' } });

    fireEvent.click(resetButton);

    expect(dayInput.value).toBe('');
    expect(monthInput.value).toBe('');
    expect(yearInput.value).toBe('');
    expect(screen.queryByText('12/10/2022 is a correct date time.')).not.toBeInTheDocument();
  });



  // Add more test cases for other scenarios
  // ...
});
