//cypress - Spec
describe('My First Suit', function(){

    it('My First cases', function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
        cy.get('.search-keyword').type('ca');
        cy.wait(2000);
        cy.get('.product').as('productLocator')
        cy.get('@productLocator').should('have.length',5);
        cy.get('.product:visible').should('have.length',4);
        cy.get('.products').find('.product').should('have.length',4);
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().then(()=>{
            console.log('sf')
        })

        cy.get('.products').find('.product').each(($a,index,$l) => {
            const textVeg=$a.find('h4.product-name').text();
            if (textVeg.includes('Cashews')){
                cy.wrap($a).find('button').click();
            }            
        })

        cy.get('.brand').should('have.text','GREENKART');
        cy.get('.brand').then(logoelemnt=>{cy.log(logoelemnt.text())})
    })

    it('My Second Test Cases', function(){

    })



})