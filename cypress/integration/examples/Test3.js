//cypress - Spec
describe('My Second Suit', function(){

    it('My Second cases', function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
        cy.get(`input[type='checkbox']`).check(['option2','option3']).should('be.checked');
        

        cy.get('select').select('option2').should('have.value','option2')

        cy.get('#autocomplete').type('ind');

        cy.get('.ui-menu-item div').each(($i,index,$list)=>{

            if($i.text()=="India")
            {
                cy.wrap($i).click();
            }

        })

        cy.get("#autocomplete").should('have.value','India');

        cy.get('#displayed-text').should('be.visible');
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible');
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible');
        cy.get(`[value='radio2']`).check().should('be.checked');

    })

    it('My Second Test Cases', function(){

    })



})