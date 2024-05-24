describe('handle the drag and drop', () => {
    it('verify the drag and drop data transfer method', () => {
        cy.visit('https://kitchen.applitools.com/ingredients/drag-and-drop')
        var dataTransfer = new DataTransfer()
        cy.get('#menu-fried-chicken').trigger('dragstart', {
            dataTransfer
        })
        cy.get('#plate-items').trigger('drop', {
            dataTransfer
        })
        cy.get('#menu-hamburger').trigger('dragstart', {
            dataTransfer
        })
        cy.get('#plate-items').trigger('drop', {
            dataTransfer
        })
        cy.get('#menu-ice-cream').trigger('dragstart', {
            dataTransfer
        })
        cy.get('#plate-items').trigger('drop', {
            dataTransfer
        })
    })
})