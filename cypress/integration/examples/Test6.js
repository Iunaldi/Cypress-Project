//cypress - Spec
describe('My Second Suit', function(){

    it('My Second cases', function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //cy.get("div.mouse-hover-content").invoke('show').contains('Top').click();
        cy.contains('Top').click({force: true});
        cy.url().should('include','top')

       
       
    })



})