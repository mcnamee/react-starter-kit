import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Error from '../../../components/UI/Error';

it('<Error /> renders correctly', () => {
  const Component = <Error title="Hello" content="World" />;

  // Matches snapshot
  const tree = renderer.create(Component).toJSON();
  expect(tree).toMatchSnapshot();

  // Has the correct text on the page
  const { getByText } = render(Component);
  expect(getByText('Hello')).toBeInTheDocument();
  expect(getByText('World')).toBeInTheDocument();
});
