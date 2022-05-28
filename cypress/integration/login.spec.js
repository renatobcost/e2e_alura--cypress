describe('Login de usuarios alura pic', () => {

    beforeEach(() => {
      cy.visit('https://alura-fotos.herokuapp.com')
     })


    it('fazer login de usuário válido', ()=>{
        cy.loginuser(Cypress.env('userName'), Cypress.env('password'));
        cy.contains('a', '(Logout)').should('be.visible');
    })

    it('fazer login de usuário inválido', ()=>{
        cy.loginuser('julia', '123');
        cy.on('window:alert', (str) => {expect(str).to.equal('Invalid user name or password')});
    })

})

