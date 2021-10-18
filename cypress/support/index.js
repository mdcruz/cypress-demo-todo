import './commands';
import addContext from 'mochawesome/addContext';

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshotDir = `../screenshots/${Cypress.spec.name}`;
    const screenshotFileBaseName =
      runnable.titlePath().join(' -- ') +
      (test.hookName ? ` -- ${test.hookName} hook` : '');
    const screenshot = `${screenshotDir}/${screenshotFileBaseName)} (failed).png`;
    addContext({ test }, screenshot);
  }
});
