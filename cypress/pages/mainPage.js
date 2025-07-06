class MainPage {

    productsBtn(){
      return  cy.get('button span.c-swQxl').contains('Products')
    }

    solutionsBtn() {
        return  cy.get('button span.c-swQxl').contains('Solutions')
    }

    pricingBtn() {
        return cy.get('#main-menu-content a[href="/pricing"]')
    }

    whyTelnyxBtn() {
        return  cy.get('button span.c-swQxl').contains('Why Telnyx')
    }
    resourcesBtn() {
        return  cy.get('button span.c-swQxl').contains('Resources')
    }
    developersBtn() {
        return  cy.get('button span.c-swQxl').contains('Developers')
    }
    shopPageBtn() {
       
         return cy.get('.c-ihSZrZ a[href="https://shop.telnyx.com"]')
    }

    loginBtn() {
        return cy.get('.c-ihSZrZ a[href="https://portal.telnyx.com"]');
    }
    contactUsBtn() {
        return cy.get('.c-ihSZrZ a[href="/contact-us"]').contains('Contact us');
    }

    

}
export const mainPage = new MainPage();