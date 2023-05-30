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

  // Add more test cases for other scenarios
  // ...
});
