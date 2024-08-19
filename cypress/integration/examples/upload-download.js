describe('upload and download test',function(){
    it('veify excel upload download',()=>{
        const replaceNum=350;
        const searchTxt="Apple";
        const FilePath = Cypress.config("fileServerFolder") +"/cypress/downloads/download.xlsx";
        cy.visit("https://rahulshettyacademy.com/upload-download-test/index.html");
        cy.get("#downloadButton").click();
        cy.task('writeExcelTest',{searchText:searchTxt,replaceText:replaceNum,change:{rowChange:0,colChange:2},filePath:FilePath})
        cy.get('#fileinput').selectFile(FilePath);

    cy.contains(searchTxt).parent().parent().find("#cell-4-undefined").should('have.text',replaceNum)
        

    })
})