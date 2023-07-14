//<gen>cy_config
import {defineConfig} from 'cypress'

export default defineConfig({
  defaultCommandTimeout: 30000,
  responseTimeout: 30000,
  requestTimeout: 30000,
  env: {
    MAGENTO_ADMIN_USERNAME: 'MAGENTO_ADMIN_USERNAME',
    MAGENTO_ADMIN_PASSWORD: 'MAGENTO_ADMIN_PASSWORD',
    MAGENTO_BASE_PATH: 'MAGENTO_BASE_PATH',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // @ts-ignore
      return require('./cypress/plugins/index.js')(on, config)
    },
    // these examples require no test isolation
    testIsolation: false
  },
})
//</gen>
