describe('My Second Suit', function(){

    it('My Second cases', function(){

        cy.request('POST','http://216.10.245.166/Library/Addbook.php',
            {
                "name":"Learn Appium Automation with Java",
                "isbn":"bcdssss",
                "aisle":"22s7",
                "author":"John foe"
            }
        ).then((respose)=>{
           expect(respose.body).to.have.property("Msg","successfully added");
           expect(respose.status).equals(200);
        })


    })
})