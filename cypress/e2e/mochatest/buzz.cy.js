describe('Verify Buzz Functionalities', () => {
  it('Verify whats on your mind', () => {
    cy.visit('/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[type="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.contains('Dashboard').should('be.visible')
    cy.contains('Buzz').click()
    cy.contains('Buzz Newsfeed').should('be.visible')
    cy.get(`textarea[placeholder="What's on your mind?"] `).type('Happy Pongal')
    cy.get('button[type="submit"]').click()
    cy.contains('Happy Pongal').should('be.visible')
  })
})