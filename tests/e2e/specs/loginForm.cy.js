describe('Login Form', () => {
    it('logs in with correct credentials', () => {
      cy.visit('http://localhost:8080'); // URL de la aplicación
      cy.get('input[placeholder="Username"]').type('testuser');
      cy.get('input[placeholder="Password"]').type('password123');
      cy.get('button').contains('Login').click();
      // Aquí puedes verificar el comportamiento esperado después del inicio de sesión
    });
  });