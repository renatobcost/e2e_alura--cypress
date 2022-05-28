## 🚀 Cypress: automação de testes E2E 🚀

Projeto de estudo sobre [Cypress](https://www.cypress.io/). O material disponível neste repositório foi desenvolvido durante o curso [Cypress: automação de testes E2E](https://www.alura.com.br/curso-online-cypress-automacao-testes-e2e), disponibilizado pela [Alura](https://www.alura.com.br).

O objetivo deste projeto é compreender um pouco mais sobre o funcionamento do cypress aplicado a um caso real. Para tanto, foi utilizado o [AluraPic](https://alura-fotos.herokuapp.com/#/home) como objeto de testes. 

Os testes criados analisaram a adição de um novo usuário à plataforma, validação de login nos cenários de usuários válidos e inválidos, validação da tela inicial e teste de API.


### 💡 Conceitos abordados
-----------------------

- Checkpoints na Automação Web;
- Conceitos iniciais sobre testes de API utilizando cypress;
- CSS Selector;
- Evitar flaky tests e diversas boas práticas de escrita e organização;
- Massa de testes estática (*.json);
- Submeter forms e validar modal;
- Testar dados sensíveis;
- Visualizar e personalizar relatórios de execução dos testes automatizados;


### ⚠️ Instalação e uso do projeto
-----------------------
- Instale o [Node.js](https://nodejs.org/en/download/);
- Abra o diretório do projeto e execute o comando:
    - `npm install`
    - `npm i --save-dev mochawesome` (para instalar o reporter)
- Para abrir a interface de execução do Cypress, execute no diretório do projeto:
    - `npx cypress open`
    - `npx cypress run --reporter mochawesome` (para executar o teste utilizando o reporter)


### ⚙️ Arquitetura do projeto
-----------------------

```
e2e-alura/
  ├─  cypress/
  │        ├── fixtures/
  │        │   └── usuarios.json       
  │        │
  │        ├── integration/
  │        │   ├── buscar-curso.spec.js
  │        │   ├── login.spec.js
  │        │   ├── register.spec.js
  │        │   ├── tela-inicial.spec.js
  │        │   └── teste-api.spec.js
  │        │
  │        ├── plugins/
  │        │   └── mochawesome-report/
  │        |       └── assets/
  │        |           └── *.html
  │        │
  │        ├── support/
  │        │   ├── Commandos.js
  │        │   ├── commands.js
  │        │   └── index.js
  │        │  
  │        └── videos/
  │ 
  ├── node_modules/
  ├── cypress.env.json
  ├── cypress.json
  ├── package-lock.json
  ├── package.json
  └── README.md
```

## 🔍 Camadas do projeto
-----------------------

 - **fixtures:** arquivos para massa de dados estática para os testes (.json);
 - **integration:** arquivos de testes separados em categorias a organização (*.spec.js);
 - **plugins:** plugins que são utilizados na solução ficam dentro do arquivo "plugins/index.js";
    - **reporter:** contém os relatórios gerados pelo mochawesome;
 - **support:** camada com comandos Cypress customizados e sobrescritas globais:
    - Arquivo commands.js responsável de receber os comandos globais no cypress;
    - Arquivo index.js responsável de receber as importações dos comandos cypress;
 - **videos:** geração opcional de videos das execução dos testes;
 - **node_modules:** arquivos ou diretórios que podem ser carregados pelo Node.js;
 - **cypress.env.json:** arquivo contendo username e password para encapsulamento em testes;
 - **cypress.json:** arquivo de configuração do Cypress;
 - **package-lock.json:** gerado automaticamente com as instalações e atualizações de pacotes;


### 💡 Features
-----------------------
</details>

<details><summary><i>Mochawesome reporter</i></summary>

Adicionar o reporter no arquivo cypress.json

```js
    {
    "reporter": "mochawesome",
    "reporterOptions": {
    "reportDir": "cypress/report/mochawesome-report",
    "overwrite": true,
    "html": true,
    "json": false,
    "timestamp": "mmddyyyy_HHMMss"
    }
}
```
Para visualizar o relatório gerado: Acesse o respectivo arquivo na pasta report, clice com o botão direito e selecione a opção Open in Default Browser.

</details>
