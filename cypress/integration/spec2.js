describe('Test 2', () => {

  it('gets Resources', () => {
    cy.visit('/');
    cy.get('h1').contains('Resources');
  });

});
