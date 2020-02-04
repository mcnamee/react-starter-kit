import config from '../../constants/config';

it('Config: Environment to be set correctly', () => {
  expect(config.isDevEnv).toBe(true);
});
