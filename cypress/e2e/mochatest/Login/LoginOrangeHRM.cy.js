import data from "../../../fixtures/logindata.json"
describe('Login with Credendials', () => {
  it.only('login with valid username and password', () =>{
  cy.login("Admin","admin123")
  })
  it('login with valid username and invalidpassword', () =>{
    cy.visit('/web/index.php/auth/login')
    cy.get('input[name="username"]').type('data.username')
    cy.get('input[type="password"]').type('admin123455589')
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid credentials').should('be.visible')
  })
  it('login with invalid username and validpassword', () =>{
    cy.visit('/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin12345')
    cy.get('input[type="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.contains('Invalid credentials').should("be.visible")
  })
  it('login without username and password', () =>{
    cy.visit('/web/index.php/auth/login')
    cy.contains(' Login ').click()
    cy.contains('Required').should("be.visible")
  })
})
