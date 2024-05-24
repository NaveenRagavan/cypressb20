describe('Add employee', () => {
  it('Enter the mandatory details', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[type="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.contains('Dashboard').should('be.visible')
    cy.contains('PIM').click()
    cy.contains('Add Employee').click()
    cy.get('input[name="firstName"]').type('Naveen')
    cy.get('input[name="lastName"]').type('Veerappan')
    cy.contains(' Save ').click()
    cy.contains('Successfully Saved')
  })
  it('Enter without the mandatory details ', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[type="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.contains('Dashboard').should('be.visible')
    cy.contains('PIM').click()
    cy.contains('Add Employee').click()
    cy.contains(' Save ').click()
    cy.contains('Required')
  })
})