import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import GroceryItemCard from './GroceryItemCard';

const mockGroceryItems = [
  { id: 1, productName: 'Milk', categoryName: 'Dairy', quantityInGroceryList: 2, unitOfMeasure: 'Liters' },
  { id: 2, productName: 'Bread', categoryName: 'Bakery', quantityInGroceryList: 1, unitOfMeasure: 'Loaf' },
];

it('renders without crashing', function() {
  render(
    <BrowserRouter>
      <GroceryItemCard groceryItems={[mockGroceryItems]} user="testuser" updateGroceryItems={() => {}} />
    </BrowserRouter>
  );
});

it('matches snapshot', function() {
  const { asFragment } = render(
    <BrowserRouter>
      <GroceryItemCard groceryItems={[mockGroceryItems]} user="testuser" updateGroceryItems={() => {}} />
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it('displays grocery items correctly', function() {
  const { getByText } = render(
    <BrowserRouter>
      <GroceryItemCard groceryItems={[mockGroceryItems]} user="testuser" updateGroceryItems={() => {}} />
    </BrowserRouter>
  );

  expect(getByText('Milk')).toBeInTheDocument();
  expect(getByText('Bread')).toBeInTheDocument();
});
