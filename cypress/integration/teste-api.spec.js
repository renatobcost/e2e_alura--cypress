//testes básicos em api 

describe('buscar conteúdo', ()=>{

    it('conteúdo no body', ()=> {
        cy.request({
            method: 'GET',
            url: 'https://apialurapic.herokuapp.com/flavio/photos'
        }).then((resposta) => {
           expect(resposta.status).to.be.equal(200)                                 //status http 200
           expect(resposta.body).is.not.empty                                       //corpo da requisição não veio vazio
           expect(resposta.body[10]).to.have.property('description')                //verifica se na posição 10 tem uma descrição
           expect(resposta.body[10].description).to.be.equal('Self do self')        //verifica se na posição 10 a descrição é farol iluminado
        })
    })

    it('fazer login do flavio', ()=> {
        cy.request({
            method: 'POST',
            url: 'https://apialurapic.herokuapp.com/user/login',
            body: Cypress.env()
        }).then((res) => {
           expect(res.status).to.be.equal(200)                              //verifica o status http
           expect(res.body).is.not.empty                                    //verifica se o body não tá vazio
           expect(res.body).to.have.property('id')                          //verifica se tem id no body
           expect(res.body.id).to.be.equal(1)                               //verifica o conteúdo do id
           expect(res.body).to.have.property('email')                       //verifica se tem email no body
           expect(res.body.email).to.be.equal("flavio@alurapic.com.br")     //verifica o conteúdo do email
        })
    })

})