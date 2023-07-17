# Studioraz Cypress Plugin

#### Cypress env property
You can also configure Cypress using [cypress.config.ts](../cypress.config.ts) (create from [cypress.config.ts.sample](../cypress.config.ts.sample)

```typescript
import {defineConfig} from 'cypress'

export default defineConfig({
  defaultCommandTimeout: 30000,
  responseTimeout: 30000,
  requestTimeout: 30000,
  env: {
    MAGENTO_ADMIN_USERNAME: 'denistrator',
    MAGENTO_ADMIN_PASSWORD: '!StudioRaz2020#',
    MAGENTO_BASE_PATH: 'https://hyva.mystore.today/',
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
```
