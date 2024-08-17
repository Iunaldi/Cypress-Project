
import HomePage from '../pageObjects/HomePages'
import ProductsPage from '../pageObjects/ProductsPage'

describe('My Second Test Suit', function()
{
    before(function(){
        cy.fixture('example').then((data)=>{
            this.data=data;
        })
    })

    it('My FirstTest case',function(){
       // Cypress.config('defaultCommandTimeout',8000)

        const homePage = new HomePage();
        const productsPage = new ProductsPage();
        var sum=0;

        cy.visit(Cypress.env('url')+'/angularpractice/');
        
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender);
        homePage.getTwoWayDataBinding().should('have.value',this.data.name)  // from jquery 
        

        /*  OR
         cy.get('tr').each(($e1,index,$list)=>{
           const text = $e1.find('td:nth-child(2)').text();
            if (text.includes("TestNG")){
               const price=$e1.find('td:nth-child(3)').text()                        
               cy.log($e1.find('td:nth-child(3)').text());
               expect(price).to.equal('20')
           }
        */

           homePage.getEditBox().should('have.attr','minlength','2');
           homePage.getEntrepreneaur().should('be.disabled');
           homePage.getShopTap().click();

       
           this.data.productName.forEach((element)=>{
            cy.selectProduct(element)
           })
           productsPage.checkOutButton().click();

           cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>{
           const amount=$el.text();
           var res=amount.split(' ')
           res=res[1].trim();
           sum=sum+Number(res);
           return sum
           
           }).then(()=>{
            cy.log(sum)
           });
           cy.get('h3 strong').then((element)=>{
            const amount=element.text().trim();
            var res = amount.split(' ');
            var total=res[1].trim();
            expect(Number(total)).to.equal(sum);
           })

           

          

           /*  OR
            cy.get('#opentab').then((el)=>{
            const url=el.prop('href');
            cy.visit(url);
            cy.origin(url,()=>{
                cy.get("div.sub-menu-bar a[href*='about']" ).click();
            })
        })  */

            
            cy.contains('Checkout').click();
            cy.contains('Checkout').click();
            cy.get('#country').type('India');
            cy.get('.suggestions > ul > li > a').click();
            cy.get('#checkbox2').click({force:true});
            cy.get('input[type="submit"]').click();
            //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
            cy.get('.alert').then((text)=>{
                //expect(text.text().includes('Success! Thank you! Your order will be delivered in next few weeks :-).'));
                expect(text.text().includes('auccess'));
            })

    })
    
})