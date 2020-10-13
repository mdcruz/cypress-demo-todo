import './commands';
import addContext from 'mochawesome/addContext';

Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    const screenshotDir = `${Cypress.config('screenshotsFolder')}/${Cypress.spec.name}`;
    const screenshot = `${screenshotDir}/${runnable.titlePath().join(' -- ')} (failed).png`;
    addContext({ test }, screenshot);
  }
});
