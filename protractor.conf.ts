import {Config} from 'protractor';

export let config: Config = {
  framework: 'jasmine',
  chromeOnly: true,
  directConnect: true,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
        args: ["--disable-gpu", "--window-size=1920,1080" ]
    },
    },
  specs: [ 'tests/*Spec.js' ],
  //seleniumAddress: 'http://localhost:4444/wd/hub',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000
  },
  onPrepare: ()=> {
    const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
    jasmine.getEnv().addReporter(new SpecReporter({
      displayStacktrace: false,
      displaySuccessesSummary: false,
      displayFailuresSummary: false,
      displayPendingSummary: true, 
      displaySuccessfulSpec: true,
      displayFailedSpec: false,
      displayPendingSpec: false, 
      displaySpecDuration: false, 
      displaySuiteNumber: false,
      colors: {
        success: 'green',
        failure: 'red',
        pending: 'yellow'
      },
      prefixes: {
        success: '✓ ',
        failure: '✗ ',
        pending: '* '
      },
      customProcessors: []
    }));
},
  noGlobals: true
};