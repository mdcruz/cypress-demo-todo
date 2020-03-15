/// <reference types="cypress" />

describe('TodoApp', () => {
  before(() => {
    cy.visit('/');
    cy.get('.new-todo').type('do lunch and learn about Cypress {enter}');
    cy.get('.new-todo').type('have lunch {enter}');
  });

  it('should add a new todo successfully', () => {
    cy.getFirstTodoItem().should(
      'be.equal',
      'do lunch and learn about Cypress'
    );

    cy.verifyTodoItems('2 items');
  });

  it('should mark a todo item as completed', () => {
    cy.get('.toggle')
      .first()
      .click();

    cy.verifyTodoItems('1 item');

    cy.contains('Completed').click();
    cy.getFirstTodoItem().should(
      'be.equal',
      'do lunch and learn about Cypress'
    );
  });
});
