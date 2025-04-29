describe('Tech Quiz E2E', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('Starts and completes a quiz', () => {
      cy.contains('Start Quiz').click();
  
      for (let i = 0; i < 10; i++) {
        cy.get('.question').should('exist');
        cy.get('.answer-button').first().click(); // pick first answer
      }
  
      cy.contains('Your Score').should('exist');
      cy.contains('Start New Quiz').click();
      cy.contains('Start Quiz').should('exist');
    });
  });
  