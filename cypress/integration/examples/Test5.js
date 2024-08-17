//cypress - Spec
describe('My Second Suit', function(){

    it('My Second cases', function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('tr').each(($e1,index,$list)=>{
           const text = $e1.find('td:nth-child(2)').text();
            if (text.includes("TestNG")){
               const price=$e1.find('td:nth-child(3)').text()                        
               cy.log($e1.find('td:nth-child(3)').text());
               expect(price).to.equal('20')
           }

        })
       
    })



})