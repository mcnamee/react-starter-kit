import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Header from '../../../components/UI/Header';
import Config from '../../../constants/config';

it('<Header /> renders correctly', () => {
  const Component = (
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );

  // Matches snapshot
  const tree = renderer.create(Component).toJSON();
  expect(tree).toMatchSnapshot();

  // Has the correct text on the page
  const { getByText } = render(Component);
  expect(getByText(Config.appName)).toBeInTheDocument();
});
