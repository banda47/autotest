describe('Позитивный кейс авторизации', function () {

it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/'); // зашли на сайт
         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин 
         cy.get('#pass').type('iLoveqastudio1'); // ввведи верный пароль
         cy.get('#loginButton').click(); // нашел кнопку "войти", и нажал ее
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка текста в элементе успешной авторизации
         cy.get('#messageHeader').should('be.visible'); // текст виден пользователю "Авторизация прошла успешно"
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка элемента, то что он виден пользователю "крестик"

 })


 it('Проверка логики восстановления пароля', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#forgotEmailButton').click(); // найти кнопку "Забыли пароль" и нажать ее
    cy.get('#mailForgot').type('bondarevich.a32@gmai.com'); // найти поле "email", вводим свой email
    cy.get('#restoreEmailButton').click(); // найти кнопку "Отправить код" , нажимаем на нее
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверка текста в элементе восстановление пароля
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователю "Успешно отправили пароль на e-mail"
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //проверка элемента, то что он виден пользователю "крестик"
})


it('Проверка на негативный кейс авторизации ПАРОЛЬ', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин 
    cy.get('#pass').type('iLoveqastudio123'); // ввведи неверный пароль
    cy.get('#loginButton').click(); // нашел кнопку "войти", и нажал ее
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка текста в элементе успешной авторизации
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователю "Такого логина или пароля нет"
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка элемента, то что он виден пользователю "крестик"

})

it('проверку на негативный кейс авторизации ЛОГИН', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#mail').type('german@dolnikov123.ru'); // ввели неверный логин 
    cy.get('#pass').type('iLoveqastudio1'); // ввведи верный пароль
    cy.get('#loginButton').click(); // нашел кнопку "войти", и нажал ее
    cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка текста в элементе успешной авторизации
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователю "Такого логина или пароля нет"
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка элемента, то что он виден пользователю "крестик"

})


it('Проверка на негативный кейс валидации', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#mail').type('germandolnikov123.ru'); // ввели неверный логин 
    cy.get('#pass').type('iLoveqastudio1'); // ввведи верный пароль
    cy.get('#loginButton').click(); // нашел кнопку "войти", и нажал ее
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверка текста в элементе успешной авторизации
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователю "Нужно исправить проблему валидации"
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка элемента, то что он виден пользователю "крестик"

})


it('Верный пароль и верный логин', function () {
    cy.visit('https://login.qa.studio/'); // зашли на сайт
    cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели верный логин 
    cy.get('#pass').type('iLoveqastudio1'); // ввведи верный пароль
    cy.get('#loginButton').click(); // нашел кнопку "войти", и нажал ее
    cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка текста в элементе успешной авторизации
    cy.get('#messageHeader').should('be.visible'); // текст виден пользователю "Авторизация прошла успешно"
    cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // проверка элемента, то что он виден пользователю "крестик"

 })

})

