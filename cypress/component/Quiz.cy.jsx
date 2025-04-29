import React from 'react';
import Quiz from '../../client/src/components/Quiz';
import { mount } from 'cypress/react18';

describe('Quiz Component', () => {
  it('should render the Start Quiz button', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').should('be.visible');
  });

  it('should start the quiz when Start Quiz button is clicked', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.get('.spinner-border, h2').should('exist'); // shows loading spinner OR a question
  });

  // You can add more tests, like answering a question, finishing the quiz, etc.
});
