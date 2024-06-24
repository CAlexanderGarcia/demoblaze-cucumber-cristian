import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

let newUser = {
  username: 'testuser',
  password: 'testpassword'
};

Given('The user opens the signup page', () => {
  cy.visit('/');
  cy.get('#signin2').click();
  cy.get('#signInModal').should('be.visible');
});

When('The user sign up with valid credentials', () => {
  cy.get('#sign-username').type(newUser.username);
  cy.get('#sign-password').type(newUser.password);
  cy.get('button[onclick="register()"]').click();
});

Then('The user should see a success message', () => {
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Sign up successful.');
  });
});

Then('The user should be able to log in with the new account', () => {
  cy.get('#login2').click();
  cy.get('#loginusername').type(newUser.username);
  cy.get('#loginpassword').type(newUser.password);
  cy.get('button[onclick="logIn()"]').click();
  cy.get('#nameofuser').should('contain', newUser.username);
});
/*
When('I try to sign up without filling all required fields', () => {
  cy.get('#sign-username').type(' ');
  cy.get('button[onclick="register()"]').click();
});

Then('I should see validation errors', () => {
  cy.on('window:alert', (str) => {
    expect(str).to.equal('Please fill out Username and Password.');
  });
});

When('I try to sign up with an existing username', () => {
  cy.get('#sign-username').type('existing_user');
  cy.get('#sign-password').type('testpassword');
  cy.get('button[onclick="register()"]').click();
});

Then('I should see an error message about the existing username', () => {
  cy.on('window:alert', (str) => {
    expect(str).to.equal('This user already exist.');
  });
});*/
