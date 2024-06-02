import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NewGroceryItem from './NewGroceryItem';

it('renders without crashing', function() {
  render(
    <BrowserRouter>
      <NewGroceryItem user="testuser" updateShowPopup={() => {}} showPopup={false} userLoggedIn={true} />
    </BrowserRouter>
  );
});

it('matches snapshot', function() {
  const { asFragment } = render(
    <BrowserRouter>
      <NewGroceryItem user="testuser" updateShowPopup={() => {}} showPopup={false} userLoggedIn={true} />
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it('displays form fields correctly', function() {
  const { container } = render(
    <BrowserRouter>
      <NewGroceryItem user="testuser" updateShowPopup={() => {}} showPopup={false} userLoggedIn={true} />
    </BrowserRouter>
  );

  expect(container.querySelector('input[name="productName"]')).toBeInTheDocument();
  expect(container.querySelector('input[name="categoryName"]')).toBeInTheDocument();
  expect(container.querySelector('input[name="unitOfMeasure"]')).toBeInTheDocument();
  expect(container.querySelector('input[name="quantityInGroceryList"]')).toBeInTheDocument();
});

