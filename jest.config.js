/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  verbose: true,
  injectGlobals: false,
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest",
  },
};
