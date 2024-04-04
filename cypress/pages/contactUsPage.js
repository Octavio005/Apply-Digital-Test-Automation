/// <reference types="cypress" />

class ContactUsPageLocators {
    constructor() {
        this.nameField = 'input[data-qa="name"]'
        this.emailField = 'input[data-qa="email"]'
        this.subjectField = 'input[data-qa="subject"]'
        this.messageArea = 'textarea[data-qa="message"]'
        this.submitButton = 'input[data-qa="submit-button"]'
    };
};

export default class ContactUsPage {
    constructor() {
        this.locators = new ContactUsPageLocators();
    };

    getNameField() {
        return cy.get(this.locators.nameField);
    }

    getEmailField() {
        return cy.get(this.locators.emailField);
    }

    getSubjectField() {
        return cy.get(this.locators.subjectField);
    }

    getMessageArea() {
        return cy.get(this.locators.messageArea);
    }

    getSubmitButton() {
        return cy.get(this.locators.submitButton);
    }

    enterContactInfo(name, email, subject, message) {
        this.getNameField().type(name);
        this.getEmailField().type(email);
        this.getSubjectField().type(subject);
        this.getMessageArea().type(message);
        this.getSubmitButton().click();
    }
};