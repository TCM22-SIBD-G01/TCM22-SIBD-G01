# C2 : MySQL

##  **O que é o MySQL**

O MySQL é um sistema de gestão de base dados relacional de código aberto amplamente utilizado.

O mesmo serve para suporte de grande volume de dados e alta performance, compatibilidade com várias plataformas, funciona com várias linguagens, oferece recursos avançados de segurança, suporta replicação, possui uma comunidade ativa que facilita o entendimento do funcionamento do mesmo.

Serve para desenvolvimento de aplicativos web e sistemas de gerenciamento de conteúdo, armazenamento de dados pala empresas e sistemas de negócios, manálise de dados para decisões e relatórios e integração com outras tecnologias.

## **Objetivo**

O objetivo deste trabalho é apresentar a estrutura das tabelas que criamos no banco de dados a que chamamos "andate_database" do MySQL. As tabelas incluem informações sobre utilizadores, assinaturas, cartões Andante, viagens e as suas relações.

## **O nosso trabalho**

1. Tabela Utilizador:
A tabela Utilizador armazena informações dos utilizadores no seu sistema. A mesma contem as seguintes informações:

-NIF: Número de Identificação Fiscal do Utilizador,

-UtilizadorID: Identificador único do utilizador,

-Nome: Nome do Utilizador,

-Email: Endereço de email do utilizador,

-NumeroTelemovel: Número de telemóvel do Utilizador,

-Endereço: Endereço do Utilizador.

2. Tabela Assinatura:
A tabela Assinatura contém informações sobre os tipos de assinaturas disponiveis. A mesma contem as seguintes informações:

-AssinaturaID: Identificador único da assinatura,

-TipodeAssinatura: Tipo da assinatura,

-Validade: Data de validade da assinatura,

-Preco: Preço da assinatura.

3. Tabela CartaoAndante:

A tabela CartaoAndante armazena informações dos cartões Andante. A mesma contem as seguintes informações:

-CartaoID: Identificador único do cartão Andante,

-Validade: Data de validade do cartão.

4. Tabela Viagem:

A tabela Viagem regista informalões sobre as viagens realizadas. A mesma contem as seguintes informações:

-ViagemID: Identificador único da viagem,

-InicioViagem: Local de início da viagem,

-DataViagem: Data da viagem,

-Validacao: Status de validação da viagem.

5. Tabela Contem:

A tabela Contem estabelece a relação entre as assinaturas e os cartões Andante. A mesma contem as seguintes informações:

-ContemID: Identificador único do relacionamento,

-Contem_AssinaturaID: Chave estrangeira referenciando a AssinaturaID,

-Contem_CartaoID: Chave estrangeira referenciando o CartaoID.

6. Tabela Possui_um:

A tabela Possui_um estabelece a relação entre os utilizadores e os cartões Andante que eles possume. A mesma contem as seguintes informações:

-NIF: Chave estrangeira referenciando o NIF do utilizador,

-CartaoID: Chave estrangeira referenciando o CartaoID do cartão Andante.

7. Tabela Efetua:

A tabela Efetua regista a relação entre os dois cartões Andante e as viagens efetuadas. A mesma contem as seguintes informações:

-EfetuaID: Identificador único do relacionamento,

-CartaoID: Chave estrangeira referenciando o CartaoID,

-ViagemID: Chave estrangeira referenciando o ViagemID.

## **MySQL a conexão com o Node.js e o LoopBack**

Após desenvolver a base de dados (andante_database) no MySQL - com a criação das tabelas que definem os dados e estabelecer a relação entre elas (tabelas) - estabelecemos a conexão entre o MySQL e o Node.js.  Preenchemos os dados necessários para que a conexão seja bem sucedida, dados como: host, porta, usuário, senha e nome da base de dados (andante_database). Após a conexão executamos consultas (SQL) na andante_database como consultas de seleção, inserção e atualização de dados, como é possível ver observar:

Relativamente à integração com o LoopBack4, este foi utilizado como  framework, de desenvolvimento de APIs, a partir do Node.js. Criamos de forma rápida a framework,  uma vez que este gera automaticamente modelos e APIs baseados nas tabelas e relações definidas na andante_database. Relativamente à criação dos endpoints, estes foram criados para manipular dados como criação de novos registros, recuperar registros existentes, atualizar dados ou excluí-los.

## **Conclusão**

 Apesar da dificuldade da criação do mesmo, acabamos por conseguir executar o trabalho que pretendiamos da melhor forma possivel.



---
[< Previous](produto01.md) | [^ Main](https://github.com/a041326/TCM22-SIBD-G01/blob/main/README.md) | [Next >](produto03.md)
:--- | :---: | ---: 