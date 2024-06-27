import { Given,And,When,Then } from "cypress-cucumber-preprocessor/steps";
Given('Launch the application', () => {
    cy.visit('/web/index.php/auth/login')
  })
When('user enter the username {string} and password {string}', (username,password) => {
    cy.get('input[name="username"]').type(username)
    cy.get('input[type="password"]').type(password)
  })  
And('user clicks on the login button',()=>{
    cy.get('button[type="submit"]').click()
})
Then('user should be navigate to dashboard page', ()=>{
    cy.contains('Dashboard').should('be.visible')
})
Then('user should get login error',()=>{
    cy.contains('Invalid credentials').should('be.visible')
})