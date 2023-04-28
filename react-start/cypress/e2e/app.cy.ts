describe('App E2E', () => {
  it('passes', () => {
    cy.visit('/');
    cy.get('.header__title').contains('Home');
  });
});
