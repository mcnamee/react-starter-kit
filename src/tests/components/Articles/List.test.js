import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import List from '../../../components/Articles/List';

it('<List /> shows a nice "no quick quote" message', () => {
  const Component = (
    <MemoryRouter>
      <List page={1} />
    </MemoryRouter>
  );

  // Matches snapshot
  expect(renderer.create(Component).toJSON()).toMatchSnapshot();

  // Has the correct text on the page
  const { getByText } = render(Component);
  expect(getByText('No Articles found')).toBeInTheDocument();
});

it('<List /> shows a table when provided', () => {
  const Component = (
    <MemoryRouter>
      <List page={1} listPaginated={{ 1: [{ id: 0, name: 'TESTINGABC', date: '22nd June' }] }} />
    </MemoryRouter>
  );

  // Matches snapshot
  expect(renderer.create(Component).toJSON()).toMatchSnapshot();

  // Has the correct text on the page
  const { getByText } = render(Component);
  expect(getByText(/TESTINGABC/)).toBeInTheDocument();
  expect(getByText(/22nd June/)).toBeInTheDocument();
});
