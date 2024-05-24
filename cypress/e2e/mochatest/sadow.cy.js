describe('Handle the sadow elements',()=>{
    it('verify the sadow elements',()=>{
        cy.visit('https://www.htmlelements.com/demos/menu/shadow-dom/index.htm')
        cy.get('.smart-ui-component').shadow().find('smart-menu-items-group[label="File"]').realClick()
    })
})