describe('Parent Component', () => {
    it('renders Child Component correctly', () => {
      cy.visit('http://localhost:8080'); // URL de la aplicación
      cy.contains('p', 'Hello from Child Component'); // Verifica que el texto del Child Component esté presente
    });
  });