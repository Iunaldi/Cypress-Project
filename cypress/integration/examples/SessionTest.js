import neatCSV from 'neat-csv';

let expectedProduct
let expectedInvoiceIds
let actualInvoiceNumber

describe('JWM Session',function(){

    it('is logged in through local storage',async ()=>{

        cy.loginAPI().then(()=>{

            cy.visit('https://rahulshettyacademy.com/client',{
                onBeforeLoad:function(window){
                    window.localStorage.setItem('token',Cypress.env('token'))
                }                
            })
            
        })

        cy.get('div.left>h3').should('have.text','Automation')

        cy.get(".card-body b").eq(1).then((el)=>{
           expectedProduct = el.text();
        })
      
        cy.get(".card-body button:last-of-type").eq(1).click();
        cy.get("[routerlink*='cart']").click();
        cy.contains("Checkout").click();
        cy.get("[placeholder*='Country']").type("ind");
        cy.get(".ta-results button").each(($el,index,$list)=>{
            if($el.text()===" India"){
                cy.wrap($el).click();
            }
        })

        cy.get(".action__submit").click();
        cy.wait(2000);
        cy.get('label.ng-star-inserted').eq(0).then(($el)=>{
            expectedInvoiceIds=$el.text().split(" ")[2].trim();
        })
        cy.get(".order-summary button").eq(0).click();
        Cypress.config("fileServerFolder")

        cy.readFile(Cypress.config("fileServerFolder")+ "/cypress/downloads/order-invoice_ilkerunaldi20.csv").then(async (text)=>{
            const csv = await neatCSV(text)
            console.log(csv);
            const actualProduct =csv[0] ["Product Name"]
            actualInvoiceNumber = csv[0] ["Invoice Number"];
            expect(expectedProduct).to.eq(actualProduct)
            expect(expectedInvoiceIds).to.eq(actualInvoiceNumber)
        })

      
    })
})