/* eslint-disable */
import '@testing-library/jest-dom/extend-expect';
require('snapshot-diff/extend-expect');

// Ignore warnings such as: "Warning: componentWillMount has been renamed"
console.warn = () => {};

global.MutationObserver = class {
  constructor(callback) {}
  disconnect() {}
  observe(element, initObject) {}
};
