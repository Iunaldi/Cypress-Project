

//cypress - Spec
describe('My Second Suit', function(){

    it('My Second cases', function(){

        cy.visit(Cypress.env('url')+"/AutomationPractice/");
        cy.get('#opentab').then((el)=>{
            const url=el.prop('href');
            cy.visit(url);
            cy.origin(url,()=>{
                cy.get("div.sub-menu-bar a[href*='about']" ).click();
            })
            

          
        })  
    })

    it('My Second Test Cases', function(){

    })



})