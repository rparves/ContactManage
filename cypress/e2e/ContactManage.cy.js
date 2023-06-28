describe('ContactManage', () => {

    beforeEach(() => {
        cy.visit('http://159.89.38.11/login')
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
    });
    it('login', () => {
        cy.viewport(1920, 1080)
        cy.get('#email-1').should('exist').type('test@orangetoolz.com')
        cy.get('#password-1').should('exist').type('8Kh8nTe*^jdk')
        cy.get('#m_login_signin_submit').should('exist').click()
        // cy.url().should('eq', 'http://159.89.38.11/')
        cy.get('.dt-page__title').invoke('text').should('eq', 'Dashboard')
        cy.get('.dt-sidebar__container > ul > li:nth-child(4) > a').click();
        cy.get('.dt-sidebar__container > ul > li:nth-child(4) > a').click();
        cy.get('.add-contact').click()
        cy.get('#contact-form > div:nth-child(6) > div:nth-child(1) input').type('0134500000000')
        cy.get('#contact-form > div:nth-child(6) > div:nth-child(2) input').type('jabsdhasd@asdhasd')
        cy.get('#contact-form > div:nth-child(7) > div:nth-child(1) input').type('first name')
        cy.get('#contact-form > div:nth-child(7) > div:nth-child(2) input').type('last name')
        cy.get('#date-time-picker-1').click()
        cy.get('#contact-form > div:nth-child(11) > div:nth-child(1) > input').type('Test City')
        cy.get('#contact-form > div:nth-child(11) > div:nth-child(2) > input').type('Test State')
        cy.get('#contact-form > div:nth-child(11) > div:nth-child(3) > input').type('2000')
        cy.get('#contact-form > div:nth-child(12) > div:nth-child(1) > input').type('Bangladesh')
        cy.get('#contact-form > div:nth-child(12) > div:nth-child(2) > textarea'). type('Test Address')
        cy.get('#contact-form > button'). click()


    });

})