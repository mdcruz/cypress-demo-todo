import './commands';
import addContext from 'mochawesome/addContext';

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    // It can also be a relative dir like `../screenshots/${Cypress.spec.name}`
    // Cypress.config('screenshotsFolder') is now an absolute path, so it no longer works.
    const screenshotDir = `assets/${Cypress.spec.name}`;
    const screenshotFileBaseName =
      runnable.titlePath().join(' -- ') +
      (test.hookName ? ` -- ${test.hookName} hook` : '');
    const screenshot = `${screenshotDir}/${screenshotFileBaseName)} (failed).png`;
    addContext({ test }, screenshot);
  }
});
