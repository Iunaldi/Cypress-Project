//cypress - Spec
import 'cypress-iframe'

describe('Calandar test', function(){

    it('Verify date Selection', function(){

        const monthNumber ='6';
        const date = "15";
        const year = "2027"
        const expecteList = [monthNumber,date,year]

        cy.visit(Cypress.env('url')+"/seleniumPractise/#/offers");
        cy.get(".react-date-picker__inputGroup").click();
        cy.get(".react-calendar__navigation__label").click();
        cy.get(".react-calendar__navigation__label").click();
        cy.contains("button",year).click();
        cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click();
        cy.contains("abbr",date).click();

        cy.get(".react-date-picker__inputGroup__input").each(($e1,index,$list)=>{

            cy.wrap($e1).invoke('val').then((text)=>{
                cy.log(text);
            })

            cy.wrap($e1).invoke('val').should('equal',expecteList[index])

        })




       

        

    })

    it('My Second Test Cases', function(){

    })



})