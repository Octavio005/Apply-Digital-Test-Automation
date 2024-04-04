/// <reference types="cypress" />

class RegisterLoginPageLocators {
    constructor() {
        this.signupNameField = 'input[data-qa="signup-name"]'
        this.signupEmailField = 'input[data-qa="signup-email"]'
        this.signupButton = 'button[data-qa="signup-button"]'
        this.loginEmailField = 'input[data-qa="login-email"]'
        this.loginPasswordField = 'input[data-qa="login-password"]'        
        this.loginButton = 'button[data-qa="login-button"]'
        this.passwordField = 'input[data-qa="password"]'
        this.firstNameField = 'input[data-qa="first_name"]'
        this.lastNameField = 'input[data-qa="last_name"]'
        this.addressField = 'input[data-qa="address"]'
        this.countryField = 'input[data-qa="country"]'
        this.stateField = 'input[data-qa="state"]'
        this.cityField = 'input[data-qa="city"]'
        this.zipcodeField = 'input[data-qa="zipcode"]'
        this.mobileNumberField = 'input[data-qa="mobile_number"]'
        this.createAccountButton = 'button[data-qa="create-account"]'
        this.continueButton = 'a[data-qa="continue-button"]'
    };
};

export default class RegisterLoginPage {
    constructor() {
        this.locators = new RegisterLoginPageLocators();
    };

    getSignupNameField(){
        return cy.get(this.locators.signupNameField);
    }

    getSignupEmailField(){
        return cy.get(this.locators.signupEmailField);
    }

    getSignupButton(){
        return cy.get(this.locators.signupButton);
    }

    getLoginEmailField(){
        return cy.get(this.locators.loginEmailField);
    }

    getLoginPasswordField(){
        return cy.get(this.locators.loginPasswordField);
    }

    getLoginButton(){
        return cy.get(this.locators.loginButton);
    }

    getpasswordField(){
        return cy.get(this.locators.passwordField);
    }

    getFirstNameField(){
        return cy.get(this.locators.firstNameField);
    }

    getLastNameField(){
        return cy.get(this.locators.lastNameField);
    }

    getAddressField(){
        return cy.get(this.locators.addressField);
    }

    getCountryField(){
        return cy.get(this.locators.countryField);
    }

    getStateField(){
        return cy.get(this.locators.stateField);
    }

    getCityField(){
        return cy.get(this.locators.cityField);
    }

    getZipcodeField(){
        return cy.get(this.locators.zipcodeField);
    }

    getMobileNumberField(){
        return cy.get(this.locators.mobileNumberField);
    }

    getCreateAccountButton(){
        return cy.get(this.locators.createAccountButton);
    }

    getContinueButton(){
        return cy.get(this.locators.continueButton);
    }

    accountSignup(name,email){
        this.getSignupNameField().type(name);
        this.getSignupEmailField().type(email);
        this.getSignupButton().click();
    }

    accountLogin(email, password){
        this.getLoginEmailField().type(email);
        this.getLoginPasswordField().type(password);
        this.getLoginButton().click();
    }

    signupWithInfo(psw, firstName, lastName, address, state, city, zipcode, mobileNumber){
        this.getpasswordField().type(psw);
        this.getFirstNameField().type(firstName);
        this.getLastNameField().type(lastName);
        this.getAddressField().type(address);
        this.getStateField().type(state);
        this.getCityField().type(city);
        this.getZipcodeField().type(zipcode);
        this.getMobileNumberField().type(mobileNumber);
        this.getCreateAccountButton().click();
    }
};