/// <reference types="cypress" />

class PaymentPageLocators {
    constructor() {
        this.cardName = 'input[data-qa = "name-on-card"]'
        this.cardNumber = 'input[data-qa = "card-number"]'
        this.cvc = 'input[data-qa = "cvc"]'
        this.expMonth = 'input[data-qa = "expiry-month"]'
        this.expYear = 'input[data-qa = "expiry-year"]'
        this.payButton = 'button[data-qa = "pay-button"]'
        this.continueButton = 'a[data-qa = "continue-button"]'
    };
};

export default class PaymentPage {
    constructor() {
        this.locators = new PaymentPageLocators();
    };

    getCardName(){
        return cy.get(this.locators.cardName);
    }

    getCardNumber(){
        return cy.get(this.locators.cardNumber);
    }

    getCvc(){
        return cy.get(this.locators.cvc);
    }

    getExpMonth(){
        return cy.get(this.locators.expMonth);
    }

    getExpYear(){
        return cy.get(this.locators.expYear);
    }

    getPayButton(){
        return cy.get(this.locators.payButton);
    }

    getContinueButton(){
        return cy.get(this.locators.continueButton);
    }

    payWithCard(cardName, cardNumber, cvc, expMonth, expYear){
        this.getCardName().type(cardName);
        this.getCardNumber().type(cardNumber);
        this.getCvc().type(cvc);
        this.getExpMonth().type(expMonth);
        this.getExpYear().type(expYear);
        this.getPayButton().click();
    }
};