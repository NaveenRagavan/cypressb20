describe('Handle the iframes',()=>{
    it('check the iframe',()=>{
        cy.visit('https://jqueryui.com/checkboxradio/')
        cy.get('iframe[class="demo-frame"').then(($iframe)=>{
            var checkbox1=$iframe.contents().find('label[for="checkbox-1"]')
            cy.wrap(checkbox1).click()
        })
    })
})