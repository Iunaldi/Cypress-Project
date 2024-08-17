//cypress - Spec
describe('My Second Suit', function(){

    it('My Second cases', function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get(`#alertbtn`).click();
        cy.get(`[value='Confirm']`).click();
        cy.on(`window:alert`,(s)=>{
            expect(s).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on(`window:conform`,(s)=>{
            expect(s).to.equal('Hello , Are you sure you want to confirm?')
        })      

    })

    it('My Second Test Cases', function(){

    })



})