describe("Automate the alerts",()=>{
    beforeEach(()=>{
        cy.visit("https://testpages.herokuapp.com/styled/alerts/alert-test.html")
    })
    it("Simple Alert",()=>{
        cy.get("#alertexamples").click()
        cy.on('window:alert',(alert)=>{
            expect(alert).to.equal('I am an alert box!')
        })
    })
    it('Confirm Alert click ok', ()=>{
       cy.get('#confirmexample').click()
        cy.on('window:confirm',()=>{
            return true
        })
        cy.contains('You clicked OK, confirm returned').should('be.visible')

    })
    it('Confirm Alert click cancel',()=>{
        cy.get('#confirmexample').click()
         cy.on('window:confirm',()=>{
             return false
         })
         cy.contains('You clicked Cancel, confirm returned').should('be.visible')
 
     })
     it('prompt Alert',()=>{
       const name = "naveen"
        cy.window().then(($win)=>{
            cy.stub($win,'prompt').returns(name)
            cy.get('#promptexample').click()
        })
        cy.contains(name).should('be.visible')
     })

})