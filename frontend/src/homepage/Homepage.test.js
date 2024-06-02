import React from 'react';
import { render, within } from '@testing-library/react';
import FridgelyApi from '../api/api';
import { BrowserRouter } from 'react-router-dom';

import Homepage from "./Homepage"

it("renders without crashing", function() {
    render(
    <BrowserRouter>
        <Homepage />
      </BrowserRouter>);
  });

  it("matches snapshot", function() {
    const { asFragment } = render(
    <BrowserRouter>
        <Homepage />
      </BrowserRouter>);
    expect(asFragment()).toMatchSnapshot();
  });


  it('displays the correct texts for logged-out users', function() {
    const { getByText } = render(
        <BrowserRouter>
            <Homepage />
        </BrowserRouter>
    );

    const cardTitle = getByText('Manage Your Meals With', { exact: false }).closest('h1');
    expect(cardTitle).toBeInTheDocument();
    expect(within(cardTitle).getByText('Fridgely')).toBeInTheDocument();

    expect(getByText('Effortless Meal Management: Simplify Your Kitchen with Fridgely')).toBeInTheDocument();
    expect(getByText('Create an Account')).toBeInTheDocument();
    expect(getByText('Log In')).toBeInTheDocument();
    expect(getByText('Browse Recipes')).toBeInTheDocument();
});
