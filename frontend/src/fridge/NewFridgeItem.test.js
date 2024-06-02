import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NewFridgeItem from './NewFridgeItem';

it('renders without crashing', function() {
  render(
    <BrowserRouter>
      <NewFridgeItem user="testuser" updateShowPopup={() => {}} showPopup={false} />
    </BrowserRouter>
  );
});

it('matches snapshot', function() {
  const { asFragment } = render(
    <BrowserRouter>
      <NewFridgeItem user="testuser" updateShowPopup={() => {}} showPopup={false} />
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});


it('handles form input changes correctly', function() {
  const { container } = render(
    <BrowserRouter>
      <NewFridgeItem user="testuser" updateShowPopup={() => {}} showPopup={false} />
    </BrowserRouter>
  );

  const inputs = container.querySelectorAll('input');

  fireEvent.change(inputs[0], { target: { value: 'Eggs' } }); // Product Name
  fireEvent.change(inputs[1], { target: { value: 'Dairy' } }); // Category
  fireEvent.change(inputs[2], { target: { value: 'pcs' } }); // Unit of Measure
  fireEvent.change(inputs[3], { target: { value: '12' } }); // Quantity

  expect(inputs[0].value).toBe('Eggs');
  expect(inputs[1].value).toBe('Dairy');
  expect(inputs[2].value).toBe('pcs');
  expect(inputs[3].value).toBe('12');
});
