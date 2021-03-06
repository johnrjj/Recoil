/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 *
 * @emails oncall+perf_viz
 * @flow strict-local
 * @format
 */

'use strict';

// @fb-only: const expectationViolation = require('expectationViolation');

const sprintf = require('Recoil_sprintf'); // @oss-only:
function expectationViolation(format: string, ...args: $ReadOnlyArray<mixed>) { // @oss-only:
  if (__DEV__) { // @oss-only:
    const message = sprintf.call(null, format, ...args); // @oss-only:
    const error = new Error(message); // @oss-only:
    error.name = 'Expectation Violation'; // @oss-only:
    console.error(error); // @oss-only:
  } // @oss-only:
} // @oss-only:

module.exports = expectationViolation;
