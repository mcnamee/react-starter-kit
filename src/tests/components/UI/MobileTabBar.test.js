import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import MobileTabBar from '../../../components/UI/MobileTabBar';

it('<MobileTabBar /> renders correctly', () => {
  const Component = (
    <MemoryRouter>
      <MobileTabBar />
    </MemoryRouter>
  );

  // Matches snapshot
  const tree = renderer.create(Component).toJSON();
  expect(tree).toMatchSnapshot();
});
