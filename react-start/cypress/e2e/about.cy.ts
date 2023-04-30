describe('Test about page', () => {
  it('Should render about page', () => {
    cy.visit('/about');
    cy.contains(`It's all about us`);
  });
});
