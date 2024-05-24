describe('handle the origin',()=>{
    it('verify the origin',()=>{
        cy.visit('https://trello.com/')
        cy.contains('Log in').click()
        cy.origin('https://id.atlassian.com/',()=>{
            cy.get('input[name="username"]').type('naveen')
            cy.get('a').should('have.length',7)
            cy.get('#signup').then((txt)=>{
                var a=txt.text()
                cy.log(a)
            })

        })
    })
})