import { Given,And,When,Then } from "cypress-cucumber-preprocessor/steps";
And('user clicks on PIM',()=>{
    cy.contains('PIM').click()
})
And('user clicks on addemployee submenu',()=>{
    cy.contains('Add Employee').click()
})
And('user enter the firstname {string} and lastname {string}',(firstname,lastname)=>{
    cy.get('input[name="firstName"]').type(firstname)
    cy.get('input[name="lastName"]').type(lastname)
})
And('user clicks on save button',()=>{
    cy.contains(' Save ').click()
})
Then('user should get successfully saved conformation message',()=>{
    cy.contains('Successfully Saved')
})
Then('user should get errormessage for firstname and lastname',()=>{
    cy.contains('Required')
})