describe('Handle the console error',()=>{
    it('console error',()=>{
        Cypress.on("uncaught:exception",()=>{
            return false
        })
        cy.visit('https://chercher.tech/practice/dropdowns')
        cy.get('#animals').select(2)
    })
})