import CartPage from "../pages/cartPage";
import HomePage from "../pages/homePage";
import PaymentPage from "../pages/paymentPage";
import ProductPage from "../pages/productsPage";
import RegisterLoginPage from "../pages/registerLoginPage";
import ContactUsPage from "../pages/contactUsPage";

describe('Clothing website Automation', () => {

  const homePage = new HomePage();
  const productsPage = new ProductPage();
  const cartPage = new CartPage();
  const registerLoginPage = new RegisterLoginPage();
  const paymentPage = new PaymentPage();
  const contactUsPage = new ContactUsPage();

  it('Clothing website workflow', () => {
    
    cy.visit('https://automationexercise.com/');
    cy.url().should('include', 'automationexercise.com');
    homePage.getLogo().should('be.visible');
    homePage.scrollHalfPage();
    homePage.getProduct(23).click();
    productsPage.changeProductQuantity(30);
    productsPage.getAddToCartButton().click();
    productsPage.getGoToCartTextlink().click();
    cartPage.getProceedToCheckoutButton().click();
    cartPage.getRegisterLoginTextlink().click();
    registerLoginPage.accountSignup('Test1', 'test110@yopmail.com');
    registerLoginPage.signupWithInfo('testPsd', 'Test', '100', 'TestAdress 100', 'Uttar Pradesh', 'Agra', '15200', '1168525596');
    registerLoginPage.getContinueButton().click();
    homePage.getCartHeader().click();
    cartPage.getProceedToCheckoutButton().click();
    cartPage.placeOrder('Test comment');
    paymentPage.payWithCard('testName', '1234 1234 1234 1234', '999', '01', '2030');
    paymentPage.getContinueButton().click();
    homePage.getLogoutHeader().click();
    registerLoginPage.accountLogin('Test1', 'test101@yopmail.com');
    homePage.getContactUsHeader().click();
    contactUsPage.enterContactInfo('TestName', 'testemail@yopmail.com', 'subject', 'Test message');
  })
})