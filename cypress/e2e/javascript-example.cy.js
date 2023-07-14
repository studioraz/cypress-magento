describe('Magento plugin example', () => {
  it('Can get Magento access token function exist', () => {
    cy.magentoClient().then(magentoClient => {
      // has instance and methods
      expect(magentoClient).to.exist;
      expect(typeof magentoClient.generateAccessToken).to.equal('function');
    });
  });
});
