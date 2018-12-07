const devMode = (process.env.NODE_ENV === 'development');

export default {
  // App Details
  appName: 'My React App',

  // API Hostname
  apiHostname: devMode ? 'https://www.mocky.io/' : 'https://www.mocky.io/',

  // Build Configuration - eg. Debug or Release?
  DEV: devMode,

  // Google Analytics - uses a 'dev' account while we're testing
  gaTrackingId: devMode ? '' : '',
};
