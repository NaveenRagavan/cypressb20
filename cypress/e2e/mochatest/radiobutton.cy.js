describe('check the radiobutton,checkbox,dropdown',()=>{
    it('verify the radio button',()=>{
        cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
        cy.get('input[value="m"]').check().should("be.checked")
    })
    it('verify the checkbox',()=>{
        cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
        cy.get('input[name*="chk_altemail"]').check().should('be.checked')
        cy.get('input[name*="chk_altemail"]').uncheck().should('not.be.checked')
    })
    it('verify the dropdown',()=>{

        cy.visit('https://register.rediff.com/register/register.php?FormName=user_details')
        cy.get('select[name^="DOB_Day"]').select("09")
        cy.get('select[name^="DOB_Month"]').select("MAY")
        cy.get('select[name^="DOB_Year"]').select("2001")
        cy.get('select[name^="city"]').select('Chennai')
    })
})