class ContactPage {
  
  getHowCanWeHelpDropdown() {
    return cy.get("#Reason_for_Contact__c", { timeout: 10000 }); //
  }

  
  selectSupportOption() {
    this.getHowCanWeHelpDropdown().select("Support");
    }
    submitBtn() {
        return cy.get(".mktoButtonRow .mktoButton").contains("Submit");
    }
}
export const contactPage = new ContactPage();
