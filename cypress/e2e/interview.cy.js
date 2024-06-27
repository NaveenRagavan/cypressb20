describe("Login Functionality", () => {
    it("Login with valid details", () => {
        cy.visit('http://staging-websites.s3-website-ap-southeast-1.amazonaws.com/home')
        cy.get('div[class="css-901oao css-cens5h r-1b43r93 r-16dba41"]').click()
        cy.get('input[placeholder="Enter your phone number"]').type('8586939230')
        cy.get('input[placeholder="Enter your password"]').realType(1234567)
        cy.get('div[class="css-901oao css-cens5h"]').last().click()
    })
})
