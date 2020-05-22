Cypress.Commands.add('getFirstTodoItem', () => {
  return cy
    .get('.todo-list li')
    .first()
    .invoke('text');
});
