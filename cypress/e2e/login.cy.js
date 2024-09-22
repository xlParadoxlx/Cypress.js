describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('login.qa.studio');
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
         cy.get('#mail').type ('german@dolnikov.ru');
         cy.get('#pass').type ('iLoveqastudio1');
         cy.get('#loginButton').click ();
         cy.get('#messageHeader').contains ('Авторизация прошла успешно');
         cy.get('#messageHeader').should('be.visible');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

    it('Верный логин и неверный пароль', function () {
    cy.visit('login.qa.studio');
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
    cy.get('#mail').type ('german@dolnikov.ru');
    cy.get('#pass').type ('iLoveqastudio2');
    cy.get('#loginButton').click ();
    cy.get('#messageHeader').contains ('Такого логина или пароля нет');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})

    it('Проверка, что в логине есть @', function () {
    cy.visit('login.qa.studio');
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
    cy.get('#mail').type ('germandolnikov.ru');
    cy.get('#pass').type ('iLoveqastudio1');
    cy.get('#loginButton').click ();
    cy.get('#messageHeader').contains ('Нужно исправить проблему валидации');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})

    it('Проверка восстановления пароля', function () {
    cy.visit('login.qa.studio');
    cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)');
    cy.get('#forgotEmailButton').click ();
    cy.get('#mailForgot').type ('german@dolnikov.ru');
    cy.get('#restoreEmailButton').click ();
    cy.get('#messageHeader').contains ('Успешно отправили пароль на e-mail');
    cy.get('#messageHeader').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
})

})