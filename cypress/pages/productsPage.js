/// <reference types="cypress" />

class ProductPageLocators {
    constructor() {
        this.quantityInput = 'input[id="quantity"]'
        this.addToCartButton = 'button[type = "button"]'
        this.goToCartTextlink = 'div[id="cartModal"] a'
    };
};

export default class ProductPage {
    constructor() {
        this.locators = new ProductPageLocators();
    };

    getQuantityInput() {
        return cy.get(this.locators.quantityInput);
    }

    getAddToCartButton(){
        return cy.get(this.locators.addToCartButton);
    }

    getGoToCartTextlink(){
        return cy.get(this.locators.goToCartTextlink);
    }

    changeProductQuantity(quantity){
        this.getQuantityInput().clear().type(quantity);
    }
};