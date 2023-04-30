describe('Test not-found page', () => {
  it('Should render not-found page', () => {
    cy.visit('/impossible page');
    cy.contains(`404 Page not found`);
  });
});
