import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import GroceryList from './GroceryList';

it('renders without crashing', function() {
  render(
    <BrowserRouter>
      <GroceryList groceryItems={[]} updateGroceryItems={() => {}} user={null} />
    </BrowserRouter>
  );
});

it('matches snapshot', function() {
  const { asFragment } = render(
    <BrowserRouter>
      <GroceryList groceryItems={[]} updateGroceryItems={() => {}} user={null} />
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it('displays the correct message when user is logged out', function() {
  const { getByText } = render(
    <BrowserRouter>
      <GroceryList groceryItems={[]} updateGroceryItems={() => {}} user={null} />
    </BrowserRouter>
  );

  expect(getByText('Please log in to access page.')).toBeInTheDocument();
});

it('displays the correct texts when grocery list is empty and user is logged in', function() {
  const { getByText } = render(
    <BrowserRouter>
      <GroceryList groceryItems={[]} updateGroceryItems={() => {}} user="testuser" />
    </BrowserRouter>
  );

  expect(getByText('Grocery List is Empty')).toBeInTheDocument();
  expect(getByText('Add an Item')).toBeInTheDocument();
});
