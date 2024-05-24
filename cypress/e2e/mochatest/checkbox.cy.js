

describe('verify the checkbox',()=>{
    it('check the checkbox',()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('input[name="username"]').type("Admin")
        cy.get('input[type="password"]').type("admin123")
        cy.get('button[type="submit"]').click()
        cy.get('a[href="/web/index.php/dashboard/index"]').should("be.visible")
        cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
        cy.contains('PIM').should("be.visible")
        cy.get('input[type="checkbox"][value="0"]').check({force:true})
        cy.get('button[class*="button"]').eq(6).click()
        cy.contains(' Yes, Delete ').click()
        cy.contains('Successfully Deleted')
    })
})