//cria um comando de login que pode ser utilizado em outros componentes do teste, além de permitir melhor manutenção do código
Cypress.Commands.add('loginuser', (nome, senha) => {
    cy.get('input[formcontrolname="userName"]').type(nome);
    cy.get('input[formcontrolname="password"]').type(senha, {log: false});
    cy.get('button[type="submit"]').click();
})


