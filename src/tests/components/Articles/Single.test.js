import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Single from '../../../components/Articles/Single';

it('<Single /> redirects to 404 when no quick quote is passed', () => {
  const history = createMemoryHistory();
  render(<Router history={history}><Single /></Router>);
  expect(history.location.pathname).toBe('/');
});

it('<Single /> shows the article when provided', () => {
  const Component = (
    <MemoryRouter>
      <Single
        article={{
          id: 1, name: 'TESTINGABC', date: '22nd June', contentRaw: 'Ello',
        }}
        id="1"
      />
    </MemoryRouter>
  );

  // Matches snapshot
  expect(renderer.create(Component).toJSON()).toMatchSnapshot();

  // Has the correct text on the page
  const { getByText } = render(Component);
  expect(getByText('TESTINGABC')).toBeInTheDocument();
  expect(getByText('Ello')).toBeInTheDocument();
});
