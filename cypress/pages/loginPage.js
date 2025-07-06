class LoginPage {

    loginButton() {
    return cy.get(".MuiButtonBase-root.MuiButton-root").contains("Log in");
}

}
export const loginPage = new LoginPage();