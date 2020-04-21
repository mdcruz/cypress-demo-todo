/// <reference types="cypress" />

describe('TodoApp', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('.new-todo').as('addTodo');

    cy.get('@addTodo').type('do lunch and learn about Cypress {enter}');
    cy.get('@addTodo').type('have lunch {enter}');
  });

  it('should add a new todo successfully', () => {
    cy.get('.todo-list')
      .find('li')
      .should('have.length', 2);

    cy.getFirstTodoItem().should(
      'be.equal',
      'do lunch and learn about Cypress'
    );
  });

  it('should mark a todo item as completed', () => {
    cy.get('.toggle')
      .first()
      .click();

    cy.contains('Completed').click();
    cy.getFirstTodoItem().should(
      'be.equal',
      'do lunch and learn about Cypress'
    );
  });
});
