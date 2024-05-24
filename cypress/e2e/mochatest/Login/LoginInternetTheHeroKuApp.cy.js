describe('Login with credentials', () => {
  it('Login with valid username and password', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('input[id="username"]').type('tomsmith')
    cy.get('input[id="password"]').type('SuperSecretPassword!')
    cy.contains(' Login').click()
    cy.contains(' You logged into a secure area!')
  })
  it('Login with invalid username and valid password', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('input[id="username"]').type('smith')
    cy.get('input[id="password"]').type('SuperSecretPassword!')
    cy.contains(' Login').click()
    cy.contains('Your username is invalid!')
  })
  it('Login with valid username and invalid password', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('input[id="username"]').type('tomsmith')
    cy.get('input[id="password"]').type('SuperSecre')
    cy.contains(' Login').last().click()
    cy.contains('Your password is invalid!')
  })
})