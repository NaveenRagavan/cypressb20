describe('handle the mouse action',()=>{
    it('verify the rightclick',()=>{
        cy.visit('https://www.programsbuzz.com/')
        cy.get('.slide__description').rightclick({force:true})
        cy.log('check the context menu')
    })
    it('verify the mouseHover',()=>{
        cy.visit('https://www.programsbuzz.com/')
        cy.contains('Tutorials').trigger('mouseHover')
        cy.log('Hover on tutorials')
    })
    it('verify the double click',()=>{
        cy.visit('https://www.programsbuzz.com/')
        cy.contains('Contact').dblclick({force:true})
    })
    it('scroll to particular element',()=>{
        cy.visit('https://docs.cypress.io/guides/overview/why-cypress')
        cy.get('#API').scrollIntoView()
    })
    it('get the text',()=>{
        cy.visit('https://www.flipkart.com/')
        cy.get('._2jPK0r').then((txt)=>{
            var textvalue=txt.text()
            cy.log(textvalue)
        })
    })
})