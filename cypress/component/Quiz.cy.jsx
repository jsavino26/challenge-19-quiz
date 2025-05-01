import React from 'react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions/random', {
      fixture: 'questions.json',
    }).as('getQuestions');
    cy.mount(<Quiz />);
  }
  );

  it('should render the Start Quiz button', () => {
    cy.contains('Start Quiz').should('be.visible');
  });

  it('should start the quiz when Start Quiz button is clicked', () => {
    cy.contains('Start Quiz').click();
    cy.get('h2').should('exist'); // shows loading spinner OR a question
  });

  // You can add more tests, like answering a question, finishing the quiz, etc.
});
