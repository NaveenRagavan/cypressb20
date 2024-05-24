describe('Login with Credendials', () => {
  const menuitems={
    menu1:"PIM",
    menu2:"Admin",
    menu3:"Leave",
    menu4:"Time"
}
  it('login with valid username and password', () =>{
    cy.visit('/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[type="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.contains('Dashboard').should('be.visible')
    for(let i in menuitems){
      cy.contains(menuitems[i]).should("be.visible")
    }
  })
})