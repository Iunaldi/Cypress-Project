

describe('My First Test Suit',function(){

    it('My First case',function(){
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');
        

        cy.intercept({
            method:'GET',
            url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'

        },{statusCode: 200,
            body : [
                {               
                    "book_name": "RestAssured with Java",
                    "isbn": "BSG",
                    "aisle": "2302"                
            },
            /*{               
                "book_name": "RestAssured with Java",
                "isbn": "BSG",
                "aisle": "2302"                
        }
                */]
        }).as('bookretrievals');
        cy.get('button.btn').click();
        cy.wait('@bookretrievals').then(({request,response})=>{
            cy.get('tr').should('have.length',response.body.length+1)
        })

        cy.get('p').should('have.text','Oops only 1 Book available')

    })
})