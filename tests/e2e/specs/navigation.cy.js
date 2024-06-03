describe('Navigation', () => {
    it('navigates to the About page', () => {
      cy.visit('http://localhost:8080'); // URL de la aplicación
      cy.contains('a', 'About').click();
      cy.url().should('include', '/about');
      cy.contains('h1', 'About Page'); // Verifica el contenido de la página About
    });
  });