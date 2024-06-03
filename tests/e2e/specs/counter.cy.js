// cypress/e2e/counter.cy.js
describe('Counter Component', () => {
    it('increments the counter on button click', () => {
      cy.visit('http://localhost:8080'); // URL de la aplicación
      cy.contains('button', 'Increment').click();
      cy.contains('p', '1'); // Verifica que el contador ha incrementado a 1
    });
  });
  