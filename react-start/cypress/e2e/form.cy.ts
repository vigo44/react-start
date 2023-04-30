describe('Test main page', () => {
  it('Should render Form page', () => {
    cy.visit('/form');
    cy.get('.input__name').should('have.value', '');
    cy.get('.input__date').should('have.value', '');
    cy.get('.input__continent').should('have.value', '');
    cy.get('.input__send-check').should('not.be.selected');
    cy.get('input[value="Male"]').should('not.be.selected');
    cy.get('input[value="Female"]').should('not.be.selected');
    cy.get('.input__avatar').should('have.value', '');
    cy.get('.input__accept-check').should('not.be.selected');
  });

  it('Should add user', () => {
    cy.visit('/form');
    cy.get('.input__name').type('Sigizmund').should('have.value', 'Sigizmund');
    cy.get('.input__date').type('1998-03-04').should('have.value', '1998-03-04');
    cy.get('.input__continent').type('Africa').select('Africa');
    cy.get('.input__send-check').check();
    cy.get('input[value="Male"]').check();
    cy.get('input[value="Female"]').should('not.be.selected');
    cy.get('.input__avatar').selectFile('./cypress/data/men.png');
    cy.get('.input__accept-check').check();
    cy.get('input[type="submit"]').click();

    cy.get('.modal-windows__content input[value="OK"]').click();

    cy.get('.input__name').should('have.value', '');
    cy.get('.input__date').should('have.value', '');
    cy.get('.input__continent').should('have.value', '');
    cy.get('.input__send-check').should('not.be.selected');
    cy.get('input[value="Male"]').should('not.be.selected');
    cy.get('input[value="Female"]').should('not.be.selected');
    cy.get('.input__avatar').should('have.value', '');
    cy.get('.input__accept-check').should('not.be.selected');

    cy.contains('Name: Sigizmund');
    cy.contains('Was born:1998-03-04');
    cy.contains('From: Africa');
    cy.contains('Gender: Male');
    cy.contains('News: sent');

    cy.get('.header__link').contains('About Us').click();
    cy.get('.header__link').contains('Form').click();

    cy.contains('Name: Sigizmund');
    cy.contains('Was born:1998-03-04');
    cy.contains('From: Africa');
    cy.contains('Gender: Male');
    cy.contains('News: sent');
  });
});
