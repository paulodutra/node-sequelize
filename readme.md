## Node Sequelize

* Implementação de uma API em node utilizando o **node**, **express**, **sequelize (Com o driver do "mysql2")**;

## Estrutura de pastas

O projeto possui a seguinte estrutura:
- src
    - models
        - routes
- index.js
- package.json

Dentro de cada pasta há a presença de um arquivo **index.js** com o intuito de realizar o carregamento das dependencias inicias de cada "serviço". 

O arquivo **index.js** na raiz do projeto, realiza algumas configurações tais como utilização das dependências instaladas (para maiores informações consulte o arquivo **package.json**), criação de uma instância do express, utilização do arquivo de roteamento e abertura da porta **9000** (listen do server);

## Como executar o projeto

Após a instalação das dependências do projeto (podendo ser instalada utilizando o gerenciador de pacotes npm ou yarn), basta executar o seguinte comando: **node index.js** na raiz do projeto; 

Para testar o recurso de contact utilize o [Postman](https://www.getpostman.com){:target="_blank"}
