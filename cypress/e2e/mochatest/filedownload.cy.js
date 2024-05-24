describe('understanding the file download',()=>{
    it('test the file download',()=>{
        cy.downloadFile('https://in.images.search.yahoo.com/yhs/search;_ylt=AwrPpn6PDEdm2FEIUBjnHgx.;_ylu=Y29sbwMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=virat+kohli+images','cypress/downloads','vk.jpg')
    })
})