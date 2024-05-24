describe('Understanding the conditional testing',()=>{
    beforeEach(()=>{
        cy.visit('https://www.wikipedia.org/')
        cy.title().should('eq','Wikipedia')
    })
    it('handle the conditional tesing',()=>{
        cy.get('body').then(($body)=>{
            if($body.find('[data-jsl10n="wikivoyage.namenaveen"]').length>0){
                cy.get('[data-jsl10n="wikivoyage.name"]').click()
                cy.origin('https://www.wikivoyage.org/',()=>{
                    cy.title().should('eq','Wikivoyage')
                })
            }
            else{
                cy.get('[data-jsl10n="wiktionary.slogan"]').click()
                cy.origin('https://www.wiktionary.org/',()=>{
                    cy.title().should('eq','Wiktionary')
                })
            }
        })
    })
})