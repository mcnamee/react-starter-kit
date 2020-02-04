import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Loading from '../../../components/UI/Loading';

it('<Loading /> renders correctly', () => {
  const Component = <MemoryRouter><Loading /></MemoryRouter>;

  // Matches snapshot
  const tree = renderer.create(Component).toJSON();
  expect(tree).toMatchSnapshot();
});
