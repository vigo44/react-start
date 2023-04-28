describe('Test main page', () => {
  it('Should render Main page', () => {
    cy.visit('/');
    cy.get('input').should('have.value', '');
    cy.get('button').should('have.text', 'SEARCH');
    cy.get('.character').should('have.length', 20);
  });

  it('Should open and close description', () => {
    cy.visit('/');
    cy.get('.character').eq(5).click();
    cy.contains('Abadango');
    cy.get('.modal__close').click();
    cy.get('.modal__windows').should('have.length', 0);
  });

  it('Should search', () => {
    cy.visit('/');
    cy.get('input').eq(0).type('Cat Monster').should('have.value', 'Cat Monster');
    cy.get('button').click();
    cy.get('.character__title').should('have.text', 'Giant Cat Monster');
    cy.get('.header__link').contains('Form').click();
    cy.get('.header__link').contains('Home').click();
    cy.get('input').eq(0).should('have.value', 'Cat Monster');
    cy.get('.character__title').should('have.text', 'Giant Cat Monster');
  });

  it('Should empty-earch', () => {
    cy.visit('/');
    cy.get('input').eq(0).type('12345').should('have.value', '12345');
    cy.get('button').click();
    cy.contains('OOPS! There is nothing here');
  });
});
