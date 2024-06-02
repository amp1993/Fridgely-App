import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FridgeList from './FridgeList';

const mockFridgeItems = [
  { id: 1, productName: 'Apple', categoryName: 'Fruits', quantityInFridge: 5, unitOfMeasure: 'pcs' },
  { id: 2, productName: 'Carrot', categoryName: 'Vegetables', quantityInFridge: 10, unitOfMeasure: 'pcs' },
];

it('renders without crashing', function() {
  render(
    <BrowserRouter>
      <FridgeList fridgeItems={[]} updateFridgeItems={() => {}} user={null} />
    </BrowserRouter>
  );
});

it('matches snapshot', function() {
  const { asFragment } = render(
    <BrowserRouter>
      <FridgeList fridgeItems={[]} updateFridgeItems={() => {}} user={null} />
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it('displays the correct message when user is not logged in', function() {
  const { getByText } = render(
    <BrowserRouter>
      <FridgeList fridgeItems={[]} updateFridgeItems={() => {}} user={null} />
    </BrowserRouter>
  );

  expect(getByText('Please log in to access page.')).toBeInTheDocument();
});

it('displays the correct message when fridge is empty and user is logged in', function() {
  const { getByText } = render(
    <BrowserRouter>
      <FridgeList fridgeItems={[]} updateFridgeItems={() => {}} user="testuser" />
    </BrowserRouter>
  );

  expect(getByText('Fridge is Empty')).toBeInTheDocument();
  expect(getByText('Add an Item')).toBeInTheDocument();
});

