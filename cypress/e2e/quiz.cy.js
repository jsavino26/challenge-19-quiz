describe('Tech Quiz E2E', () => {
  const NUM_QUESTIONS = 20;
    beforeEach(() => {
      cy.intercept('GET', '/api/questions/random', {
        fixture: 'questions.json',
      }).as('getQuestions');
      cy.visit('/');
    });
  
    it('Starts a quiz', () => {
      cy.contains('Start Quiz').click();
        cy.get('h2').should('exist');
        cy.get('button').should('exist'); // pick first answer
  
    });

    it('Starts and completes a quiz', () => {
      cy.contains('Start Quiz').click();
  
      for (let i = 0; i < NUM_QUESTIONS; i++) {
        cy.get('h2').should('exist');
        cy.get('button').first().click(); // pick first answer
      }
  
      cy.contains('Quiz Completed').should('exist');
    });

    it('Shows score at end of test', () => {
      cy.contains('Start Quiz').click();
  
      for (let i = 0; i < NUM_QUESTIONS; i++) {
        cy.get('h2').should('exist');
        cy.get('button').first().click(); // pick first answer
      }
  
      cy.contains('Your score').should('exist');
    });

    it('Start new quiz at end of test', () => {
      cy.contains('Start Quiz').click();
  
      for (let i = 0; i < NUM_QUESTIONS; i++) {
        cy.get('h2').should('exist');
        cy.get('button').first().click(); // pick first answer
      }
  
      cy.contains('Your score').should('exist');
      cy.contains('Take New Quiz').click();
      cy.get('h2').should('exist');
    });
  });
  