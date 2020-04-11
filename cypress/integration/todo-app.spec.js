/// <reference types="cypress" />

describe('TodoApp', () => {
  it('should add a new todo successfully', () => {
    cy.visit('/');
    cy.get('.new-todo').as('addTodo');

    cy.get('@addTodo').type('do lunch and learn about Cypress {enter}');
    cy.get('@addTodo').type('have lunch {enter}');

    cy.get('.todo-list').find('li').should('have.length', 2);
    cy.getFirstTodoItem().should(
      'be.equal',
      'do lunch and learn about Cypress'
    );
  });
});
