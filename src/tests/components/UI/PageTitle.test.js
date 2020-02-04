import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import PageTitle from '../../../components/UI/PageTitle';

it('<PageTitle /> renders correctly', () => {
  const Component = (
    <MemoryRouter>
      <PageTitle title="Hello World" />
    </MemoryRouter>
  );

  // Matches snapshot
  const tree = renderer.create(Component).toJSON();
  expect(tree).toMatchSnapshot();

  // Has the correct text on the page
  const { getByText } = render(Component);
  expect(getByText('Hello World')).toBeInTheDocument();
});
