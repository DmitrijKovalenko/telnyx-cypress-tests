class ShopPage {
  CountryRegionDropDownList() {
    return cy.get(".disclosure__button");
  }
  shopBtn() {
    return cy.get('a[href="/collections/all"]').contains("Shop");
  }
  cartBtn() {
    return cy.get('a[href="/cart"]').should("contain", "Cart");
  }
  
}

export const shopPage = new ShopPage();
