import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Form from '../../../components/Articles/Form';

it('<Form /> shows a form', () => {
  const Component = (
    <MemoryRouter>
      <Form onFormSubmit={() => {}} />
    </MemoryRouter>
  );

  // Matches snapshot
  expect(renderer.create(Component).toJSON()).toMatchSnapshot();
});

it('<Form /> shows loading state', () => {
  const { asFragment } = render(
    <MemoryRouter>
      <Form onFormSubmit={() => {}} />
    </MemoryRouter>,
  );
  const firstRender = asFragment();

  const { asFragment: asFragment2 } = render(
    <MemoryRouter>
      <Form onFormSubmit={() => {}} loading />
    </MemoryRouter>,
  );

  expect(firstRender).toMatchDiffSnapshot(asFragment2());
});
