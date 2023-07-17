/// <reference types="./">
//<gen>cy_import_magento
import {MagentoClient} from "magento-client";
//</gen>
function register(Cypress: Cypress.Cypress) {
    //<gen>cy_add_plugin
    // read admin username/password and base path from environment variable (see the API Key section of README)
    const adminUsername = Cypress.env('MAGENTO_ADMIN_USERNAME');
    const adminPassword = Cypress.env('MAGENTO_ADMIN_PASSWORD');
    const basePath = Cypress.env('MAGENTO_BASE_PATH') + '/rest/all';

    if (!adminUsername || !adminPassword) {
        throw new Error(
            'Error: Magento admin username and/or password are not set. Please set the `MAGENTO_ADMIN_USERNAME` ' +
            'and `MAGENTO_ADMIN_PASSWORD` environment variables to use the Magento Cypress plugin.'
        );
    }
    // create an instance of magentoClient
    const magentoClient = new MagentoClient({
        username: adminUsername,
        password: adminPassword,
        basePath: basePath,
    });
    // register MagentoClient with cypress under "magentoClient" command
    // afterwards you can access it in tests using `cy.magentoClient().then(magentoClient => /* do stuff */)`
    Cypress.Commands.add('magentoClient' as  any, () => {
        return Promise.resolve(magentoClient);
    });
    //</gen>
}
register(Cypress);
