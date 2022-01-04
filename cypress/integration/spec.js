describe('Test 1', () => {

  it('finds the title', () => {
    cy.visit('/');
    cy.get('title').contains('UomCypress');
  });

});
