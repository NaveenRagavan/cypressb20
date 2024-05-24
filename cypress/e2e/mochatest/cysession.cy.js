describe('Understanding the cy.session',()=>{
    beforeEach(function(){
        cy.session('Login session',()=>{
            cy.visit('/web/index.php/auth/login')
            cy.get('input[name="username"]').type('Admin')
            cy.get('input[type="password"]').type('admin123')
            cy.get('button[type="submit"]').click()
        })
    })
    it('add employee',function(){
        cy.visit('/web/index.php/pim/addEmployee')
        cy.get('input[name="firstName"]').type('Naveen')
        cy.get('input[name="lastName"]').type('Veerappan')
        cy.contains(' Save ').click()
    })
    it('add job title',function(){
        cy.visit('/web/index.php/admin/saveJobTitle')
        cy.get('input[class="oxd-input oxd-input--active"]').last().type('Navin')
      cy.get('button[type="submit"]').click()
      cy.contains('Successfully Saved')

    })
})