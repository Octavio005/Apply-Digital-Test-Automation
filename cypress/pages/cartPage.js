/// <reference types="cypress" />

class CartPageLocators {
    constructor() {
        this.proceedToCheckoutButton = 'section[id="do_action"] a[class]'
        this.registerLoginTextlink = 'div[id="checkoutModal"] a'
        this.commentArea = 'div[id="ordermsg"] textarea'
        this.placeOrderButton = 'a[href *= "payment"]'
    };
};

export default class CartPage {
    constructor() {
        this.locators = new CartPageLocators();
    };

    getProceedToCheckoutButton() {
        return cy.get(this.locators.proceedToCheckoutButton);
    }

    getRegisterLoginTextlink(){
        return cy.get(this.locators.registerLoginTextlink);
    }

    getCommentArea(){
        return cy.get(this.locators.commentArea);
    }

    getPlaceOrderButton(){
        return cy.get(this.locators.placeOrderButton);
    }

    placeOrder(comment){
        this.getCommentArea().type(comment);
        this.getPlaceOrderButton().click();
    }
};