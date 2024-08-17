//cypress - Spec
import 'cypress-iframe'

describe('My Second Suit', function(){

    it('My Second cases', function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.frameLoaded("#courses-iframe");
        cy.iframe().find("a[href*='mentorship']").eq(0).click();
        cy.iframe().find("ul[class*='showPrice']").should('have.length',12);

        

    })

    it('My Second Test Cases', function(){

    })



})