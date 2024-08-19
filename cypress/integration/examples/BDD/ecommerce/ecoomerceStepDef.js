
import{ Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
//import{ Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../../pageObjects/HomePages'
import ProductsPage from '../../../pageObjects/ProductsPage'

const homePage = new HomePage();
const productsPage = new ProductsPage();

Given('I open Ecommerce Page',function(){
    cy.visit(Cypress.env('url')+'/angularpractice/');
})

When('I add items to cart',()=>{
    homePage.getShopTap().click();       
    this.data.productName.forEach(function(){
     cy.selectProduct(element)
    })
    productsPage.checkOutButton().click();
})

When('Validate the tottal prices',function(){
    cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>{
        const amount=$el.text();
        var res=amount.split(' ')
        res=res[1].trim();
        sum=sum+Number(res);
        return sum
        
        }).then(()=>{
         cy.log(sum)
        });
        cy.get('h3 strong').then(function(element){
         const amount=element.text().trim();
         var res = amount.split(' ');
         var total=res[1].trim();
         expect(Number(total)).to.equal(sum);
        })

})

Then('select the country submit and verify Thank you',function(){
    cy.contains('Checkout').click();
            cy.contains('Checkout').click();
            cy.get('#country').type('India');
            cy.get('.suggestions > ul > li > a').click();
            cy.get('#checkbox2').click({force:true});
            cy.get('input[type="submit"]').click();
            //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
            cy.get('.alert').then((text)=>{
                expect(text.text().includes('Success! Thank you! Your order will be delivered in next few weeks :-).'));
            })
})

When('I fill the form details',function(){
    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender);

})

Then('Validate the forms behaviour',function(){
    homePage.getTwoWayDataBinding().should('have.value',this.data.name)  // from jquery 
    homePage.getEditBox().should('have.attr','minlength','2');
    homePage.getEntrepreneaur().should('be.disabled');
    

})

Then('select the Shop Page',()=>{
    homePage.getShopTap().click();
    
})

