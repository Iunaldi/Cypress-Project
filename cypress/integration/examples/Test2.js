//cypress - Spec
describe('My Second Suit', function(){

    it('My Second cases', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.products').as('productLocator')  
        cy.get('@productLocator').find('.product').each(($a,index,$l) => {
            const textVeg=$a.find('h4.product-name').text();
            if (textVeg.includes('Cashews')){
                cy.wrap($a).find('button').click();
            }            
        })
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click()

       
    })

    it('My Second Test Cases', function(){

    })



})