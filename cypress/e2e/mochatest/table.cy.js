describe('Handle the tables',()=>{
    it('verify the table',()=>{
        cy.visit('https://money.rediff.com/indices/bse/sensex')
        cy.xpath('//table[@class="dataTable"]/tbody/tr[1]/td').should('have.length',6)
        cy.xpath('//table[@class="dataTable"]/tbody/tr[1]/td[3]').then((txt)=>{
            var textvalue=txt.text()
            //expect(textvalue).to.be.equal("2840.00")

        cy.xpath('//table[@class="dataTable"]/tbody/tr[4]').within(()=>{
            cy.get('td').eq(3).then((txt)=>{
                const value=txt.text()
                //expect(value).to.be.equal("1575.85")
            })
        })  
    }) 
        var total=0
        cy.get('.dataTable>tbody>tr>td:nth-child(4)')
        .each((col)=>{
            cy.wrap(col).within((celldata)=>{
                var x=celldata.text()
                var y=Number(x)
                total=total+y    
            })
        })
        cy.log(total) 
        
    })
})