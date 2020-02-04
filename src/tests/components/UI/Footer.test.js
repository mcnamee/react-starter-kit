import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Footer from '../../../components/UI/Footer';

it('<Footer /> renders correctly', () => {
  const Component = <MemoryRouter><Footer /></MemoryRouter>;

  // Matches snapshot
  const tree = renderer.create(Component).toJSON();
  expect(tree).toMatchSnapshot();
});
