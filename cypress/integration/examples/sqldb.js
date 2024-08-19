 describe('My First Test Suit',function(){

    it('DataBse Test',function(){

        cy.sqlServer('SELECT * FROM [dbo].[Employee]').then((result)=>{
            expect(result).to.have.length(2)
        })

    })


 })