

describe('My First Test Suit',function(){

    it('My First case',function(){
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
        

        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'

        ,(req)=>{
            req.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=a'
            req.continue((res)=>{
                 //expect(res.statusCode).to.equal(403)
            })

        }).as('aut');
        cy.get('button.btn').click();
        cy.wait('@aut');

    })
})