Cypress.Commands.add('getFirstTodoItem', () => {
  return cy
    .get('.todo-list')
    .find('li')
    .first()
    .invoke('text');
});
