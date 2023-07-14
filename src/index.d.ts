/// <reference types="cypress" />
import { MagentoClient } from "magento-client";

declare global {
    namespace Cypress {
        interface Chainable {
            magentoClient: () => Promise<MagentoClient>;
        }
    }
}
