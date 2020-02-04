import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import TablePagination from '../../../components/UI/TablePagination';

it('<TablePagination /> renders correctly', () => {
  const Component = (
    <MemoryRouter>
      <TablePagination
        pagination={[
          {
            title: '1',
            link: '/articles/',
          }, {
            title: '2',
            link: '/articles/2',
          },
        ]}
        length={6}
        total={12}
        loading={false}
      />
    </MemoryRouter>
  );

  // Matches snapshot
  const tree = renderer.create(Component).toJSON();
  expect(tree).toMatchSnapshot();

  // Has the correct text on the page
  const { getByText } = render(Component);
  expect(getByText('Showing 6 of 12')).toBeInTheDocument();
  expect(getByText('2')).toBeInTheDocument();
});

it('<TablePagination /> renders correctly when no pagination set', () => {
  const Component = (
    <MemoryRouter>
      <TablePagination
        pagination={[]}
        length={6}
        total={12}
        loading={false}
      />
    </MemoryRouter>
  );

  // Matches snapshot
  const tree = renderer.create(Component).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toEqual(null);
});

it('<TablePagination /> renders correctly when loading', () => {
  const Component = (
    <MemoryRouter>
      <TablePagination
        pagination={[
          {
            title: '1',
            link: '/articles/',
          }, {
            title: '2',
            link: '/articles/2',
          },
        ]}
        length={6}
        total={12}
        loading
      />
    </MemoryRouter>
  );

  // Matches snapshot
  const tree = renderer.create(Component).toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree).toEqual(null);
});
