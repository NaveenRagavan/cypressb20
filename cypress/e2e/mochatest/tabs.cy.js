describe('Handling the tabs',()=>{
    it('check the tabs/windows remove the target attribute',()=>{
        cy.visit('https://www.cypress.io/')
        cy.contains('API').invoke('removeAttr','target').click({force:true})
        cy.url().should('include','https://docs.cypress.io/api/commands/and')
        cy.go('back')
    })
    it.only('without the target attribute handle the tabs',()=>{
        Cypress.on('uncaught:exception',()=>{
            return false
        })
        cy.visit('https://demoqa.com/browser-windows',{
            onBeforeLoad(win){
                cy.stub(win,'open')
            }
        })
        cy.get('#tabButton').click()
        cy.window().its('open').should('be.called')
    })
})