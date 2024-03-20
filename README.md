# electron-app - Pdv para Restaurantes

Aplicativo Pdv para Restaurantes. Neste primeiro commit, desenvolvi a estrutura inicial do projeto!

## Tecnologias utilizadas
- Electron-Vite - Framework
- React
- Tailwind CSS
- JavaScript
- Knex 
- SQLite3
- Electron-Builder - (vem junto com o Electron-Vite)
- Entre outras libs mais simples...

Este projeto está em desenvolvimento. Esse é o primeiro commit e contém apenas uma tela, mas dê uma olhada e verá todo o carinho com o que está sendo produzido!

O status atual do projeto conta com apenas uma tela funcional, que permite cadastrar categorias e itens no cardápio do sistema, salvos no banco de dados, e renderizados. Conta com telas e modais para edição, adição e exclusão (CRUD).

Mesmo sendo apenas uma tela, todas as validações são feitas antes de enviar algo para o banco de dados! Dessa forma, os dados são enviados de forma segura, evitando erros.

**O template:** Baseado em React, a estrutura inicial conta com um sidebar menu reutilizável, sendo ele o elemento pai de todos os outros componentes e responsável por agregar as rotas.

**React-Router-Dom:** Depois de bastante tempo testando e pesquisando, percebi que o browserWindow do React-Router não funciona em React quando em produção. Então prossegui com a adaptação do Hash-Router do próprio React-Router, que funcionou perfeitamente.

**SQLite3:** Outro desafio que encontrei foi integrar o SQLite3 ao meu sistema. Eu sempre gosto de utilizar as dependências mais atualizadas possível, porém a versão 5.1.7 que até o momento é a mais atual do SQLite3, essa versão tem um problema que não encontrei solução. Então, depois de muita pesquisa, encontrei um comentário em um arquivo no próprio GitHub e optei por usar a versão 5.1.6, que funcionou perfeitamente.

**Knex:** Para a integração com o banco de dados e criação das migrations, utilizei o Knex, por ser uma lib que tenho mais familiaridade e obtive êxito. Funcionou perfeitamente.

**Estrutura de pastas:** Logo pretendo produzir uma documentação diferenciada, mais simples e diferente das demais, onde vou contar uma história sobre a criação e produção desse software. Ao mesmo tempo, em que explico as funções e relacionamentos de arquivos, sobre a filosofia do meu projeto. Isso ajudará futuros contribuidores a entender mais facilmente o código (que está muito bem organizado) e aprender sobre o mesmo de uma maneira diferente.

**Objeto Mode:** Ao iniciar a produção do meu aplicativo, percebi que teria que passar diversas props para meus componentes e ter funções locais nesses mesmos componentes, achei muito desorganizado dessa maneira. Então criei a grande maioria das lógicas em arquivos separados, importei para o meu componente principal e o referenciei no objeto MODE. Assim, eu passo apenas o mode para os componentes e de dentro do mode pego as props necessárias.

**Futuro:** Esse projeto é ainda apenas um embrião do que almejo torná-lo. Logo irei postar mais commits com muitas mais funcionalidades e telas. Porém, quem quiser dar uma espiada, fique à vontade.

O intuito desse primeiro texto não é ser um texto técnico e sim contar de forma mais lúdica sobre o projeto.

## Screenshot

![Screenshot Electron Pdv Restaurante](https://animecharacters.sirv.com/screenshots/Captura%20de%20tela%202024-03-20%20160307.png)

## Project Setup

### Install

```bash
$ npm install

## Project Setup

### Install

```bash
$ npm install
```

### Development

```bash
$ npm run dev
```

### Build

```bash
# For windows // FUNCIONANDO PERFEITAMENTE
$ npm run build:win

# For macOS // AINDA NÃO TESTEI
$ npm run build:mac

# For Linux // AINDA NÃO TESTEI
$ npm run build:linux
```
