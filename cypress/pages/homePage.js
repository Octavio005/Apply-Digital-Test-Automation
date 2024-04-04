/// <reference types="cypress" />

class HomePageLocators {
    constructor() {
        this.logo = 'img[alt = "Website for automation practice"]'
        this.product = 'li a[href *= "details"]'
        this.cartHeader = 'ul a[href *= "cart"]'
        this.logoutHeader = 'ul a[href *= "logout"]'
        this.contactUsHeader = 'ul a[href *= "contact"]'
    };
};

export default class HomePage {
    constructor() {
        this.locators = new HomePageLocators();
    };

    getLogo() {
        return cy.get(this.locators.logo);
    }
    
    getProduct(index) {
        return cy.get(this.locators.product).eq(index);
    }

    getCartHeader() {
        return cy.get(this.locators.cartHeader);
    }

    getLogoutHeader() {
        return cy.get(this.locators.logoutHeader);
    }

    getContactUsHeader() {
        return cy.get(this.locators.contactUsHeader);
    }

    scrollHalfPage() {
        cy.scrollTo('center');
    }
};