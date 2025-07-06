import { mainPage } from "../pages/mainPage";
import { pricingPage } from "../pages/pricingPage";
import { contactPage } from "../pages/contactPage";
describe("Telnyx homepage test", () => {
  beforeEach(() => {
    cy.viewport(1440, 900);
  });

  it("should load mainPage and check main menu content", () => {
    cy.visit("https://telnyx.com");

    cy.url().should("include", "https://telnyx.com/");

    mainPage.productsBtn().should("be.visible").and("contain", "Products");

    mainPage.solutionsBtn().should("be.visible").and("contain", "Solutions");

    mainPage.pricingBtn().should("be.visible").and("contain", "Pricing");

    mainPage.whyTelnyxBtn().should("be.visible").and("contain", "Why Telnyx");

    mainPage.resourcesBtn().should("be.visible").and("contain", "Resources");

    mainPage.developersBtn().should("be.visible").and("contain", "Developers");
  });

  beforeEach(() => {
    cy.viewport(1440, 900);
  });

  it("should load shopPage and change country", () => {
    cy.visit("https://telnyx.com");
    mainPage
      .shopPageBtn()
      .should("be.visible")
      .invoke("removeAttr", "target")
      .click();

    cy.origin("https://shop.telnyx.com", () => {
      cy.scrollTo("bottom");
      cy.get(".disclosure__button").scrollIntoView().click();
      cy.get("#FooterCountryList").contains("a", "United States").click();
    });
  });

  it("should load mainPage and check hover", () => {
    cy.visit("https://telnyx.com");

    mainPage.productsBtn().click();
    cy.get('a[href="/products/voice-ai"]')
      .should("be.visible")
      .and("contain", "Voice AI")
      .click();
    cy.url().should("include", "/voice-ai-agents");
    cy.go("back");

    mainPage.productsBtn().click();
    cy.get('a[href="/products/sip-trunks"]')
      .should("be.visible")
      .and("contain", "SIP Trunking")
      .click();
    cy.url().should("include", "/sip-trunks");
    cy.go("back");

    mainPage.productsBtn().click();
    cy.get('a[href="/products/sms-api"]')
      .should("be.visible")
      .and("contain", "SMS API")
      .click();
    cy.url().should("include", "/sms-api");
    cy.go("back");

    mainPage.productsBtn().click();
    cy.get('a[href = "/products/enterprise-integrations-zoom-phone"]')
      .should("be.visible")
      .and("contain", "Zoom Phone")
      .click();
    cy.url().should("include", "/enterprise-integrations-zoom-phone");
    cy.go("back");

    mainPage.productsBtn().click();
    cy.contains(".c-EICMy", "See all products").click();

    cy.url().should("include", "https://telnyx.com/products");

    cy.get('.c-iyInjw a[href="/voice-ai"]')
      .should("contain", "Voice AI")
      .scrollIntoView();
  });

  it("should login with wright inputs", () => {
    cy.visit("https://telnyx.com");
    mainPage
      .loginBtn()
      .should("be.visible")
      .invoke("removeAttr", "target")
      .click();

    cy.origin("https://portal.telnyx.com/#/login/sign-in", () => {
      cy.url().should("include", "/sign-in");
      cy.get(".frontend-customer-portal-1ptee0p").contains("Log in");
      cy.get(".MuiBox-root.frontend-customer-portal-1rwgium")
        .contains("Login")
        .click();
      const email = "dmitrijkovalenko86@gmail.com";
      const password = "Coca-cola-1s-harmful";
      cy.get(".sc-hKwDye.gzyrim .MuiOutlinedInput-input").type(email);
      cy.get(".sc-hKwDye.gDVWox .MuiInputBase-input").type(password);
      cy.get(".MuiButtonBase-root.MuiButton-root").contains("Log in").click();
      

      cy.url().should("include", "/login/sign-in");     
      
      
    });
  });

  it("should not login with wrong password and check the error message", () => {
    cy.visit("https://telnyx.com");
    mainPage
      .loginBtn()
      .should("be.visible")
      .invoke("removeAttr", "target")
      .click();

    cy.origin("https://portal.telnyx.com/#/login/sign-in", () => {
      cy.url().should("include", "/sign-in");
      cy.get(".frontend-customer-portal-1ptee0p").contains("Log in");
      cy.get(".MuiBox-root.frontend-customer-portal-1rwgium")
        .contains("Login")
        .click();
      const email = "dmitrijkovalenko86@gmail.com";
      const password = "Coca-cola-1s-useful:)";
      cy.get(".sc-hKwDye.gzyrim .MuiOutlinedInput-input").type(email);
      cy.get(".sc-hKwDye.gDVWox .MuiInputBase-input").type(password);
      cy.get(".MuiButtonBase-root.MuiButton-root").contains("Log in").click();
      cy.wait(5000);
      cy.contains(
        "That email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.",
        { timeout: 10000 }
      ).should("be.visible");
    });
  });


  it("should check footer social media links", () => {
    cy.visit("https://telnyx.com");
    cy.get(".c-mkazC").contains(".c-mkazC", "Social").scrollIntoView();
    

    const socialLinks = [
      "https://www.linkedin.com/company/telnyx/",
      "https://x.com/telnyx",
      "https://www.facebook.com/Telnyx/",
    ];

    socialLinks.forEach((link) => {
      it(`should check that ${link} is reachable`, () => {
        cy.request(link).its("status").should("eq", 200);
      });
    });
  });


  it("should Verify outbound call price after changing region and currencys", () => {
    cy.visit("https://telnyx.com");
    mainPage.pricingBtn().click();
    pricingPage.voiceApiButton().scrollIntoView().click();
    cy.get("#country-filter .PJLV.c-gruYud").click();
    cy.contains(".c-PJLV", "France").click();
    cy.get("#currency-filter ").click();
    cy.contains(".c-PJLV", "EUR").click();
    cy.get("#currency-filter").should("contain", "EUR");
    cy.contains("Make outbound calls")
      .parent()
      .next()
      .next()
      .find(".c-PJLV")
      .should("contain", "0.0017");
  });

  it("should check developers api ", () => {
    cy.visit("https://telnyx.com");
    mainPage.developersBtn().click();
    cy.get('.c-jLWzSx a[href="https://developers.telnyx.com"]', {
      timeout: 10000,
    })
      .should("be.visible")
      .invoke("removeAttr", "target")
      .click();
    cy.origin("https://developers.telnyx.com/", () => {
      cy.url().should("include", "https://developers.telnyx.com/");
      cy.get('.ctaWrapper_HwyK a[href="/api"]').should(
        "contain",
        "Explore Apis").click();
        cy.url().should("include", "/api/");
      
    });
    
  });



  it("should check hat price, change quantity,add to cart ", () => {
    cy.visit("https://telnyx.com");
    mainPage
      .shopPageBtn()
      .should("be.visible")
      .invoke("removeAttr", "target")
      .click();

    cy.origin("https://shop.telnyx.com", () => {
      cy.url().should("include", "https://shop.telnyx.com/");
      cy.get('a[href="/collections/all"]').contains("Shop").click();
      cy.get(
        '.card__heading.h5 a[href="/products/telnyx-classic-hat"]'
      ).click();
      cy.url().should("include", "/telnyx-classic-hat");

      cy.get(".product__title").should("contain", "Telnyx Classic Hat");

      cy.get( ".price.price--large.price--show-badge span.price-item.price-item--regular")
        .invoke("text")
        .then((priceText) => {
          const cleanedPrice = priceText
            .replace(/[^\d.,]/g, "")
            .replace(",", "");
          const initialPrice = parseFloat(cleanedPrice);
          cy.log(`Ціна шапки: ${initialPrice}`);
          expect(initialPrice).to.be.a("number").and.to.be.greaterThan(0);
        });
     
      cy.get('#Quantity-Form-template--14828910936142__main button[name="plus"]').click();

      cy.get("#ProductSubmitButton-template--14828910936142__main").click();

      cy.wait(1000);
    });
  });
  
  it("should go to contact us form and send incorrect form ", () => {
    cy.visit("https://telnyx.com");
    mainPage.contactUsBtn().click();
    cy.url().should("include", "/contact-us");
    cy.get(".c-PJLV.c-rMlRu.c-hLiKYq").should("contain", "Talk to an expert");
    contactPage.selectSupportOption();
    cy.get("#FirstName").type("Dimon");
    cy.get("#LastName").type("Pokemon");
    contactPage.submitBtn().click();
    cy.get("#ValidMsgEmail").should("contain", "Must be valid email. ");
    
  });

  });




