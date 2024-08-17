//cypress - Spec
describe('My Second Suit', function(){

    it('My Second cases', function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#opentab").invoke('removeAttr','target').click();
        cy.origin('https://www.qaclickacademy.com/',()=>{
            cy.get("#navbarSupportedContent a[href*='about']").click();
            cy.get(".mt-50 h2").should("contain","QAClick Academy");
        })
    })

    it('My Second Test Cases', function(){

    })



})