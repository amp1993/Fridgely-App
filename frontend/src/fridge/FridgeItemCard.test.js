import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FridgeItemCard from './FridgeItemCard';

const mockFridgeItems = [
  { id: 1, productName: 'Apple', categoryName: 'Fruits', quantityInFridge: 5, unitOfMeasure: 'pcs' },
  { id: 2, productName: 'Carrot', categoryName: 'Vegetables', quantityInFridge: 10, unitOfMeasure: 'pcs' },
];

it('renders without crashing', function() {
  render(
    <BrowserRouter>
      <FridgeItemCard fridgeItems={[mockFridgeItems]} user="testuser" updateFridgeItems={() => {}} />
    </BrowserRouter>
  );
});

it('matches snapshot', function() {
  const { asFragment } = render(
    <BrowserRouter>
      <FridgeItemCard fridgeItems={[mockFridgeItems]} user="testuser" updateFridgeItems={() => {}} />
    </BrowserRouter>
  );
  expect(asFragment()).toMatchSnapshot();
});

it('displays fridge items correctly', function() {
  const { getByText } = render(
    <BrowserRouter>
      <FridgeItemCard fridgeItems={[mockFridgeItems]} user="testuser" updateFridgeItems={() => {}} />
    </BrowserRouter>
  );

  expect(getByText('Apple')).toBeInTheDocument();
  expect(getByText('Carrot')).toBeInTheDocument();
});

it('handles quantity increase and decrease correctly', async function() {
  const { getAllByText, getByText, rerender } = render(
    <BrowserRouter>
      <FridgeItemCard fridgeItems={[mockFridgeItems]} user="testuser" updateFridgeItems={() => {}} />
    </BrowserRouter>
  );

  const increaseButtons = getAllByText('→');
  const decreaseButtons = getAllByText('←');
  const appleQuantity = getByText('5 pcs');

  fireEvent.click(increaseButtons[0]);

  // Mock the state update to immediately reflect the change
  mockFridgeItems[0].quantityInFridge += 1;
  rerender(
    <BrowserRouter>
      <FridgeItemCard fridgeItems={[mockFridgeItems]} user="testuser" updateFridgeItems={() => {}} />
    </BrowserRouter>
  );

  await waitFor(() => expect(appleQuantity.textContent).toBe('6 pcs'));

  fireEvent.click(decreaseButtons[0]);

  // Mock the state update to immediately reflect the change
  mockFridgeItems[0].quantityInFridge -= 1;
  rerender(
    <BrowserRouter>
      <FridgeItemCard fridgeItems={[mockFridgeItems]} user="testuser" updateFridgeItems={() => {}} />
    </BrowserRouter>
  );

  await waitFor(() => expect(appleQuantity.textContent).toBe('5 pcs'));
});

it('handles item deletion correctly', async function() {
  const { getAllByText, queryByText, rerender } = render(
    <BrowserRouter>
      <FridgeItemCard fridgeItems={[mockFridgeItems]} user="testuser" updateFridgeItems={() => {}} />
    </BrowserRouter>
  );

  const deleteButtons = getAllByText('Delete');
  fireEvent.click(deleteButtons[0]);

  // Mock the state update to immediately reflect the change
  const updatedFridgeItems = mockFridgeItems.filter(item => item.productName !== 'Apple');
  rerender(
    <BrowserRouter>
      <FridgeItemCard fridgeItems={[updatedFridgeItems]} user="testuser" updateFridgeItems={() => {}} />
    </BrowserRouter>
  );

  await waitFor(() => expect(queryByText('Apple')).not.toBeInTheDocument());
});
