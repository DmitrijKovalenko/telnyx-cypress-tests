class PricingPage {
  voiceApiButton() {
    return cy
      .get('.c-uXJmG a[href="/pricing/call-control"]')
      .contains("Voice API");
    }
    
    
}
export const pricingPage = new PricingPage();
