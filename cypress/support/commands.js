Cypress.Commands.add('getFirstTodoItem', () => {
  return cy
    .get('.todo-list')
    .find('li')
    .first()
    .invoke('text');
});

Cypress.Commands.add('verifyTodoItems', todoItems => {
  cy.get('.todo-count')
    .invoke('text')
    .should('be.equal', `${todoItems} left`);
});
