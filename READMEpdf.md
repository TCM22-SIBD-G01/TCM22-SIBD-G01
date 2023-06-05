# TCM22-SIBD-G01
## Metro

Repositório para hospedar o projeto desenvolvido para *Sistemas de Informação e Bases de Dados*. Desenvolvido pelo Grupo 01: [@AnaFaria](https://github.com/FariaAna), [@DavidLima](https://github.com/D-S-Lima) e [@InêsSousa](https://github.com/a041326).

## Breve descrição do tema

Este projeto busca resolver um problema de multas injustas no sistema de transporte público de metro, ao organizar os dados dos usuários com passe/cartão Andante para que os fiscalizadores possam verificar se o mesmo se encontra no sistema, mesmo sem o passe em mãos, garantindo assim eficiência e evitando multas indevidas.

# Organização do repositório

- Relatórios estão na :[pasta doc](/doc/)

# Galeria

|   Esquema Conceptual   |    Normalização    |   Modelo Relacional  | |
|--------------|-----------|------------|------------|
|![Esquema Conceptual](/doc/REI/imagens/Esquema_Conceptual.png)|![Normalização](/doc/REBD/imagens/1NF.png)|![ModeloRelacional1](/doc/REBD/imagens/ModeloRelacional1.png) ![ModeloRelacional2](/doc/REBD/imagens/ModeloRelacional2.png)![ModeloRelacional3](/doc/REBD/imagens/ModeloRelacional3.png) ![ModeloRelacional4](/doc/REBD/imagens/ModeloRelacional4.png)
|Restrições de Integridade Usuário| Restrições de Integridade Cartao_Andante | Restrições de Integridade Assinatura | Restrições de Integridade Viagem |
| ![Chave primaria 1](/doc/REBD/imagens/Chaveprimaria1.png) ![Unicidade 1](/doc/REBD/imagens/Unicidade1.png) | ![Chave primaria 2](/doc/REBD/imagens/Chaveprimaria2.png) ![Unicidade 2](/doc/REBD/imagens/Unicidade2.png) ![Chave Estrangeira 1](/doc/REBD/imagens/ChaveEstrangeira1.png) | ![Chave primaria 3](/doc/REBD/imagens/Chaveprimaria3.png)| ![Chave primaria 4](/doc/REBD/imagens/Chaveprimaria4.png) ![Unicidade 3](/doc/REBD/imagens/Unicidade3.png) ![Chave Estrangeira 2](/doc/REBD/imagens/ChaveEstrangeira2.png) |
# Tecnologias

- [Virtual Studio Code](https://code.visualstudio.com)

- [Diagrams](https://www.diagrams.net)

# Relatórios

:[REI, Relatório de Especificação da Informação](/doc/REI/rei00.md)

:[REBD, Relatório de Especificação da Base de Dados](/doc/REBD/rebd00.md)

:[M2 Proposta](/doc/TCM22-SIBD01-M2Proposta.md)

# **Relatório de Especificação da Informação**

## Índice

### :[Introdução](/doc/REI/rei01.md)

### :[Especificação de Requisitos](/doc/REI/rei02.md)

### :[Esquema conceptual](/doc/REI/rei03.md)

## Grupo 01

- Ana Faria [@AnaFaria](https://github.com/FariaAna)

- David Lima [@DavidLima](https://github.com/D-S-Lima)

- Inês Sousa [@InêsSousa](https://github.com/a041326)


---
< Previous | [^ Main](https://github.com/a041326/TCM22-SIBD-G01/blob/main/README.md) | [Next >](rei01.md)
:--- | :---: | ---: 

# C1 : Introdução

## **Descrição do trabalho**

O objetivo do nosso projeto é implementar uma solução abrangente para a gestão do sistema de metro que visa simplificar a utilização dos cartões Andante nas viagens de metro. O sistema foi concebido para garantir um registo eficiente, gestão de passes, validação de viagens e aplicação de tarifas.

A necessidade de solucionar esse problema surgiu a partir de um incidente envolvendo um dos membros do grupo, David. David foi multado por não ter validado o seu passe Andante antes de entrar no metro, embora seja detentor de um passe geral, pelo qual paga mensalmente para ter acesso aos serviços de transporte.

Para evitar situações semelhantes, vamos utilizar um sistema de gestão de cartões Andante que esteja interligado com uma base de dados central, permitindo a identificação dos utilizadores e seus respetivos passes.

Inicialmente, os utilizadores devem registar-se no sistema fornecendo informações como nome, email, número de telefone, endereço e NIF. Posteriormente, cada utilizador pode adquirir um cartão Andante, que estará associado a um tipo de assinatura (passe geral, passe sub23, passe família, entre outros).

Cada cartão Andante terá um número único de identificação e data de validade, contendo a informação da assinatura correspondente, a qual pode variar dependendo da opção escolhida pelo utilizador. Após obter o cartão, o utilizador regista os seus dados no sistema mencionado acima. Ao efetuar uma viagem, será possível verificar o ID, início e data da viagem, permitindo a validação pelo fiscalizador se já foi previamente validado por outros meios.

No caso de um fiscalizador abordar um utilizador que indica ter um passe, mas não o tem consigo, o fiscalizador poderá verificar a base de dados central para validar se o utilizador realmente possui um passe ativo. Confirmada a validade do passe, o fiscalizador poderá prosseguir sem aplicar a multa.

O sistema deve armazenar as informações dos utilizadores, cartões Andante e viagens realizadas. As informações sobre os cartões Andante devem estar vinculadas à conta do utilizador correspondente. Os fiscalizadores podem verificar a validade do passe do utilizador consultando a base de dados e as informações do cartão Andante. Se o utilizador tiver um passe válido, mas não o tiver consigo no momento da fiscalização, o fiscalizador deve considerar que o utilizador está a pagar pelos serviços e apenas teve um problema de não ter o cartão consigo. Caso contrário, o fiscalizador deve aplicar a multa correspondente.

Em suma, um sistema de gestão de cartões Andante interligado com uma base de dados central permite a organização dos dados dos utilizadores e a validação em tempo real dos passes, evitando multas indevidas por parte dos fiscalizadores.

## **Modelação do problema**

Estas entidades e relacionamentos fornecem uma base para representar a estrutura de dados do projeto, especificamente os utilizadores, cartões Andante, assinaturas e viagens.

### **Entidades**:

UTILIZADOR (NIF, Nome, Email, NumeroTelemovel, Endereco)

- NIF: Número de Identificação Fiscal (Chave primária)
- Nome: Nome do utilizador
- Email: Endereço Email do utilizador
- NumeroTelemovel: Número do temóvel do utilizador
- Endereco: Endereço do utilizador

CARTAO_ANDANTE (CartaoID, Validade)

- CartaoID: Identificador exclusivo para o cartão Andante (Chave primária)
- Validade: Data de validade do cartão

ASSINATURA (Validade, TipoAssinatura, Preco)

- Validade: Período de validade da assinatura (Chave primária)
- TipoAssinatura: Tipo de assinatura (por exemplo, passe geral, passe sub23, passe família, etc.)
- Preco: Preço da assinatura

VIAGEM (ViagemID, InicioViagem, DataViagem, Validacao)

- ViagemID: Identificador exclusivo para a viagem (Chave primária)
- InicioViagem: Local inicial da viagem (Local onde o utilizador validou o passe)
- DataViagem: Data da viagem
- Validacao: Indicador de se a viagem foi validada ou não

### **Relações**:

Possui_um (#NIF -> UTILIZADOR, #CartaoID -> CARTAO_ANDANTE)

- Esse relacionamento indica que um utilizador pode possuir um ou mais cartões Andante.

Contem (#CartaoID -> CARTAO_ANDANTE, #TipoAssinatura -> ASSINATURA)

- Este relacionamento vincula um cartão Andante específico ao seu tipo de assinatura.

Efetua (#CartaoID -> CARTAO_ANDANTE, #ViagemID -> Viagem)

- Essa relação significa que uma viagem está associada a um cartão Andante específico.

---

[< Previous](rei00.md) | [^ Main](https://github.com/a041326/TCM22-SIBD-G01/blob/main/README.md) | [Next >](rei02.md)
:--- | :---: | ---: 

# C2 : Especificação de Requisitos

Descrição dos requisitos para um sistema de informação para o metro, que permitirá gerir os cartões Andante e as viagens realizadas pelos utilizadores do sistema. O sistema será utilizado pelos utilizadores do metro, pelos fiscalizadores e pelos gestores do sistema.
## **Descrição dos requisitos do utilizador**

Os  tipos de utilizadores (actores) do sistema de informação e as funcionalidade (casos de uso) a que estes terão acesso são:

1. Developer: Pessoa responsável por desenvolver e manter o sistema de cartões de andante. As funcionalidades a que ele tem acesso incluem:

   - Criar e manter a base de dados de utilizadors e seus passes de zona geral;

   - Criar e manter a interface de utilizador para comprar e recarregar o cartão de andante;

   - Criar e manter a interface de utilizador para os fiscalizadores inserir os dados necessários e visualizar o status do passe do utilizador;

   - Criar e manter a interface de utilizador para os fiscalizadores verificarem o histórico do  utilizador;

   - Implementar a lógica para determinar as ações que serão tomadas pelo fiscalizador (permite que o utilizador continue a usar o serviço ou multá-lo por não ter um passe válido);

   - Implementar a notificação ao utilizador, se este for multado, recebe uma notificação no e-mail ou número de telefone, informando sobre a multa e como pagar a mesma;
   
2. Fiscalizador: Pessoa responsável por verificar se os utilizadores estão a usar o sistema de transporte público corretamente. As funcionalidades a que ele tem acesso incluem:

   - Verificar se o utilizador possui um cartão de andante válido;

   - Verificar se o utilizador possui um passe de zona geral válido;

   - Verificar o status do passe/cartão andante;

   - Multar o utilizador, se ele não estiver usando o sistema corretamente;

3. Utilizador Final: Pessoa que usa o sistema de transporte público, possui um cartão de andante e pode ter ou não um passe de zona geral associado a ele. As funcionalidades a que ele tem acesso incluem:

   - Registrar-se no sistema de cartões de andante;

   - Recarregar o cartão de andante;

   - Informar ID ao fiscalizador (caso não tenha o seu cartão/passe consigo);


---
   
[< Previous](rei01.md) | [^ Main](https://github.com/a041326/TCM22-SIBD-G01/blob/main/README.md) | [Next >](rei03.md)
:--- | :---: | ---: 

# C3 : Esquema conceptual
## **Modelo E/A**

 ![Esquema Conceptual](/doc/REI/imagens/Esquema_Conceptual.png)

 Neste esquema conceptual mostramos os conteudos que pertencem em sistema ao usuario, o que o mesmo regista no sistema, assim como o memso possuir um cartão andante que é usado para efetuar viagens, o mesmo tem uma assinatura e está associado a um usuario e a um tipo de assinatura.
 
## **Regras de negócio adicionais (Restrições)**

1. Um cartão de andante só pode estar associado a um utilizador.

2. Um utilizador só pode viajar em uma zona que corresponda ao seu passe.

3. Um cartão de andante só pode ter uma viagem registrada de cada vez.

4. O preço vai depender do tipo de passe e da zona do mesmo.

5. Um utilizador deve ser multado se estiver sem um passe válido, no sistema, durante uma viagem. Caso tenha um passe valido mas não o tenha (fisicamente) não é multado, mas deve dizer o seu andante ID ou NIF ao fiscalizador para o mesmo confirmar se está valido, se a zona corresponde à do seu andante.

6. As informações pessoais dos utilizadores devem ser protegidas e mantidas confidenciais.

7. O sistema deve ter um backup diário para garantir que as informações dos utilizadores sejam mantidas seguras e não sejam perdidas em caso de falha de hardware ou software.

---
   
[< Previous](rei02.md) | [^ Main](https://github.com/a041326/TCM22-SIBD-G01/blob/main/README.md) |  Next >
:--- | :---: | ---: 

# Relatório de Especificação da Base de Dados

## Índice

### :[Introdução](/doc/REBD/rebd01.md)  
### :[Esquema conceptual](/doc/REBD/rebd02.md)  
### :[Normalização](/doc/REBD/rebd03.md)  
### :[Esquema Relacional](/doc/REBD/rebd04.md)  
### :[SQL](/doc/REBD/rebd05.md) 

## Grupo 01

- Ana Faria [@AnaFaria](https://github.com/FariaAna)

- David Lima [@DavidLima](https://github.com/D-S-Lima)

- Inês Sousa [@InêsSousa](https://github.com/a041326)


---
< Previous | [^ Main](https://github.com/a041326/TCM22-SIBD-G01/blob/main/README.md) | [Next >](rebd01.md)
:--- | :---: | ---: 

# C1 : Introdução

## **Descrição do trabalho**

O objetivo do nosso projeto é implementar uma solução abrangente para a gestão do sistema de metro que visa simplificar a utilização dos cartões Andante nas viagens de metro. O sistema foi concebido para garantir um registo eficiente, gestão de passes, validação de viagens e aplicação de tarifas.

A necessidade de solucionar esse problema surgiu a partir de um incidente envolvendo um dos membros do grupo, David. David foi multado por não ter validado o seu passe Andante antes de entrar no metro, embora seja detentor de um passe geral, pelo qual paga mensalmente para ter acesso aos serviços de transporte.

Para evitar situações semelhantes, vamos utilizar um sistema de gestão de cartões Andante que esteja interligado com uma base de dados central, permitindo a identificação dos utilizadores e seus respetivos passes.

Inicialmente, os utilizadores devem registar-se no sistema fornecendo informações como nome, email, número de telefone, endereço e NIF. Posteriormente, cada utilizador pode adquirir um cartão Andante, que estará associado a um tipo de assinatura (passe geral, passe sub23, passe família, entre outros).

Cada cartão Andante terá um número único de identificação e data de validade, contendo a informação da assinatura correspondente, a qual pode variar dependendo da opção escolhida pelo utilizador. Após obter o cartão, o utilizador regista os seus dados no sistema mencionado acima. Ao efetuar uma viagem, será possível verificar o ID, início e data da viagem, permitindo a validação pelo fiscalizador se já foi previamente validado por outros meios.

No caso de um fiscalizador abordar um utilizador que indica ter um passe, mas não o tem consigo, o fiscalizador poderá verificar a base de dados central para validar se o utilizador realmente possui um passe ativo. Confirmada a validade do passe, o fiscalizador poderá prosseguir sem aplicar a multa.

O sistema deve armazenar as informações dos utilizadores, cartões Andante e viagens realizadas. As informações sobre os cartões Andante devem estar vinculadas à conta do utilizador correspondente. Os fiscalizadores podem verificar a validade do passe do utilizador consultando a base de dados e as informações do cartão Andante. Se o utilizador tiver um passe válido, mas não o tiver consigo no momento da fiscalização, o fiscalizador deve considerar que o utilizador está a pagar pelos serviços e apenas teve um problema de não ter o cartão consigo. Caso contrário, o fiscalizador deve aplicar a multa correspondente.

Em suma, um sistema de gestão de cartões Andante interligado com uma base de dados central permite a organização dos dados dos utilizadores e a validação em tempo real dos passes, evitando multas indevidas por parte dos fiscalizadores.

### **Com a modelação do problema em mente**

- O sistema inclui uma base de dados central para armazenar e gerenciar informações do utilizador, cartões Andante e dados de viagem

- O sistema permite que os fiscalizadores verifiquem a validade do passe de um utilizador consultando a base de dados central e as informações do cartão Andante.

- Cada utilizador tem um Número de Identificação Fiscal  (NIF) exclusivo.

- Cada cartão Andante tem um número de identificação exclusivo (CartaoID).

- A propriedade de um cartão Andante é representada pela relação "Possui_um" entre as entidades UTILIZADOR e CARTAO_ANDANTE.

- Cada cartão Andante está associado a um tipo de assinatura específico representado pela relação "Contem" entre as entidades CARTAO_ANDANTE e ASSINATURA.

- Cada cartão Andante pode ser associado a várias viagens, e cada viagem pode ser associada a um cartão Andante específico, representado pela relação "Efetua" entre as entidades CARTAO_ANDANTE e VIAGEM.

## **Descrição dos requisitos do utilizador**

Tendo em mente os requisitos establecidos no REI, acrescentamos mais alguns requisitos para uma compreensão mais clara das necessidades e expectativas específicas de cada papel envolvido no sistema.
### **Requisitos do Utilizador**


Registo e Gestão de Perfil:

- O utilizador deve poder registar-se facilmente no sistema, fornecendo as suas informações pessoais (NIF, Nome, Email, Número de Telemóvel, Endereço).

- O utilizador deve ter a capacidade de atualizar e gerir as informações do seu perfil.

Aquisição de Cartão e Gestão de Assinaturas:

- O utilizador deve poder adquirir um cartão Andante associado a um tipo de assinatura específico (TipoAssinatura), como passe geral, passe sub23, passe família, etc.

- O sistema deve disponibilizar opções para selecionar o tipo de assinatura desejado durante o processo de aquisição do cartão.

Validação de Viagens:

- O utilizador deve poder validar o seu cartão Andante ao embarcar numa viagem, registando os detalhes da viagem (ViagemID, InicioViagem, DataViagem, Validacao).

### **Requisitos do Fiscalizador:**

Validação de Cartões e Acesso à Base de Dados:

- O fiscalizador deve poder verificar a validade de um cartão Andante apresentado por um utilizador.

- O sistema deve permitir que o fiscalizador aceda à base de dados central para validar as assinaturas ativas do utilizador.

### **Requisitos do Developer:**

Design da Interface de Utilizador:

- A interface do sistema deve ser intuitiva, de fácil utilização e proporcionar uma navegação fácil tanto para utilizadores quanto para fiscalizadores.

- O processo de registo deve ter campos de entrada claros para que os utilizadores possam inserir as suas informações pessoais.

- A interface deve exibir informações relevantes e opções relacionadas à aquisição de cartões, assinaturas e validação de viagens.

Gestão de Dados e Segurança:

- O sistema deve armazenar e gerir com segurança as informações do utilizador e os detalhes dos cartões.

- Os dados do utilizador, incluindo histórico de viagens e informações de assinatura, devem ser adequadamente vinculados e armazenados numa base de dados centralizada.

- O sistema deve implementar medidas de segurança para proteger os dados do utilizador, incluindo encriptação e controlo de acesso.

NOTA: _Os developers podem consultar estes requisitos para projetar e implementar as funcionalidades e características necessárias._

---
[< Previous](rebd00.md) | [^ Main](https://github.com/a041326/TCM22-SIBD-G01/blob/main/README.md) | [Next >](rebd02.md)
:--- | :---: | ---: 

# C2 : Esquema conceptual

## **Modelo E/A**

![Esquema Conceptual](/doc/REI/imagens/Esquema_Conceptual.png)

## **Regras de negócio adicionais (Restrições)**

Com base nas restrições estabelecidas previamente, REI, aqui estão as restrições adicionais:

Restrição de Associação:

- Um cartão de Andante só pode estar associado a um único utilizador.

- Cada utilizador só pode ter um cartão de Andante associado à sua conta.

Restrição de Zona de Viagem:

- Um utilizador só pode viajar em uma zona que corresponda ao tipo de passe que ele possui.

- O sistema deve verificar a correspondência entre a zona de viagem e o tipo de passe do utilizador.

Restrição de Viagem Única:

- Um cartão de Andante só pode ter uma única viagem registrada de cada vez.

- Antes de registrar uma nova viagem, o sistema deve verificar se o cartão de Andante está atualmente em uma viagem ativa.

Restrição de Preço:

- O preço de um tipo de assinatura deve ser determinado pelo tipo de assinatura do utilizador e pela zona de viagem.

Restrição de Multa:

- Um utilizador deve ser multado se estiver sem um passe válido registrado no sistema durante uma viagem.

- Se o utilizador tiver um passe válido, mas não o tiver consigo fisicamente, o fiscalizador deve confirmar a validade do passe consultando o sistema antes de aplicar a multa.

Restrição de Privacidade:

- As informações pessoais dos utilizadores devem ser protegidas e mantidas confidenciais.

- Acesso não autorizado às informações dos utilizadores deve ser impedido.

Restrição de Backup:

- O sistema deve realizar um backup diário para garantir a segurança e a integridade das informações dos utilizadores.

- O backup deve ser realizado para evitar a perda de dados em caso de falha de hardware ou software.

---
[< Previous](rebd01.md) | [^ Main](https://github.com/exemploTrabalho/reportSIBD/) | [Next >](rebd03.md)
:--- | :---: | ---: 

# C3 : Normalização

## **Relações**

UTILIZADOR (_**NIF**_, Nome, Email, NumeroTelemovel, Endereco)

CARTAO_ANDANTE (_**CartaoID**_, Validade)

ASSINATURA (_**TipoAssinatura**_, Validade, Preco)

VIAGEM (_**ViagemID**_, InicioViagem, DataViagem, Validacao)
#
## **Normalização do Esquema Relacional**


### **1NF | 2NF | 3NF | BCNF**

![Normalização](/doc/REBD/imagens/1NF.png)

A normalização do nosso esquema, após a 1NF, não tem mais  dependências funcionais além das chaves primárias (PK). Portanto, sem nenhuma normalização adicional, o processo de normalização está completo.

---
[< Previous](rebd02.md) | [^ Main](https://github.com/exemploTrabalho/reportSIBD/) | [Next >](rebd04.md)
:--- | :---: | ---: 

# C4 : Modelo Relacional

- [Relações](#relações)
  - [Tabela Utilizador](#tabela-utilizador)
  - [Tabela CartaoAndante](#tabela-cartaoandante)
  - [Tabela Assinatura](#tabela-assinatura)
  - [Tabela Viagem](#tabela-viagem)

## **Relações**

### **Tabela Utilizador**
### Descrição da Tabela utilizador ###
Esta tabela reflete como todas as informções estão relacionadas entre si, as informações sobre cada uma das colunas, entre outras.
### **Colunas**

![ModeloRelacional1](/doc/REBD/imagens/ModeloRelacional1.png)

### **Restrições de Integridade**
- **Chave Primária:**

![ChavePrimaria1](/doc/REBD/imagens/Chaveprimaria1.png)

- **Unicidade:**

![Unicidade1](/doc/REBD/imagens/Unicidade1.png)

### **Tabela CartaoAndante**
### Descrição da Tabela CartaoAndante ###
Esta tabela reflete como todas as informções estão relacionadas entre si, as informações sobre cada uma das colunas, entre outras.
### **Colunas**

![ModeloRelacional2](/doc/REBD/imagens/ModeloRelacional2.png)

### **Restrições de Integridade**
- **Chave Primária:**

![ChavePrimaria2](/doc/REBD/imagens/Chaveprimaria2.png)

- **Unicidade:**

![Unicidade2](/doc/REBD/imagens/Unicidade2.png)

- **Chave Estrangeira:**

![ChaveEstrangeira](/doc/REBD/imagens/ChaveEstrangeira1.png)

### **Tabela Assinatura**
### Descrição da Tabela Assinatura ###
Esta tabela reflete como todas as informções estão relacionadas entre si, as informações sobre cada uma das colunas, entre outras.
### **Colunas**

![ModeloRelacional3](/doc/REBD/imagens/ModeloRelacional3.png)

### **Restrições de Integridade**
- **Chave Primária:**

![ChavePrimaria3](/doc/REBD/imagens/Chaveprimaria3.png)

### **Tabela Viagem**
### Descrição da Tabela Viagem ###
Esta tabela reflete como todas as informções estão relacionadas entre si, as informações sobre cada uma das colunas, entre outras.
### **Colunas**

![ModeloRelacional4](/doc/REBD/imagens/ModeloRelacional4.png)

### **Restrições de Integridade**
- **Chave Primária:**

![ChavePrimaria4](/doc/REBD/imagens/Chaveprimaria4.png)

- **Unicidade:**

![Unicidade4](/doc/REBD/imagens/Unicidade3.png)

- **Chave Estrangeira:**

![ChaveEstrangeira2](/doc/REBD/imagens/ChaveEstrangeira2.png)
---
[< Previous](rebd03.md) | [^ Main](https://github.com/a041326/TCM22-SIBD-G01/blob/main/README.md) | [Next >](rebd05.md)
:--- | :---: | ---: 

# C3 : SQL

## **DDL**

```sql
USE `test`;

-- Criar tabela para UTILIZADOR
CREATE TABLE UTILIZADOR (
  NIF INT PRIMARY KEY,
  Nome VARCHAR(255),
  Email VARCHAR(255),
  NumeroTelemovel VARCHAR(20),
  Endereco VARCHAR(255)
);

-- Criar tabela para CARTAO_ANDANTE
CREATE TABLE CARTAO_ANDANTE (
  CartaoID INT PRIMARY KEY,
  Validade DATE
);

-- Criar tabela para ASSINATURA
CREATE TABLE ASSINATURA (
  Validade DATE,
  TipoAssinatura VARCHAR(50),
  Preco DECIMAL(10, 2),
  PRIMARY KEY (Validade, TipoAssinatura)
);

-- Criar tabela para VIAGEM
CREATE TABLE VIAGEM (
  ViagemID INT PRIMARY KEY,
  InicioViagem DATETIME,
  DataViagem DATE,
  Validacao BOOLEAN
);

-- Criar tabela para relação Possui_um (Relação muitos para um, entre UTILIZADOR e CARTAO_ANDANTE)
CREATE TABLE Possui_um (
  NIF INT,
  CartaoID INT,
  PRIMARY KEY (NIF, CartaoID),
  FOREIGN KEY (NIF) REFERENCES UTILIZADOR (NIF),
  FOREIGN KEY (CartaoID) REFERENCES CARTAO_ANDANTE (CartaoID)
);

-- Criar tabela para relação Contem (Relação muitos para um, entre CARTAO_ANDANTE e ASSINATURA)
CREATE TABLE Contem (
  CartaoID INT,
  TipoAssinatura VARCHAR(50),
  PRIMARY KEY (CartaoID, TipoAssinatura),
  FOREIGN KEY (CartaoID) REFERENCES CARTAO_ANDANTE (CartaoID),
  FOREIGN KEY (TipoAssinatura) REFERENCES ASSINATURA (TipoAssinatura)
);

-- Criar tabela para relação Efetua (Relação muitos para um, entre CARTAO_ANDANTE e VIAGEM)
CREATE TABLE Efetua (
  CartaoID INT,
  ViagemID INT,
  PRIMARY KEY (CartaoID, ViagemID),
  FOREIGN KEY (CartaoID) REFERENCES CARTAO_ANDANTE (CartaoID),
  FOREIGN KEY (ViagemID) REFERENCES VIAGEM (ViagemID)
);
```

## **DML**

Seguem-se alguns exemplos de queries SQL que evidenciam a conformidade com os requisitos identificados:

**1**. Query para obter informações sobre os passes válidos de um utilizador:

```sql
USE `test`;

SELECT UTILIZADOR.Nome, CARTAO_ANDANTE.CartaoID, ASSINATURA.TipoAssinatura, ASSINATURA.Validade
FROM UTILIZADOR
JOIN Possui_um ON UTILIZADOR.NIF = Possui_um.NIF
JOIN CARTAO_ANDANTE ON Possui_um.CartaoID = CARTAO_ANDANTE.CartaoID
JOIN Contem ON CARTAO_ANDANTE.CartaoID = Contem.CartaoID
JOIN ASSINATURA ON Contem.Validade = ASSINATURA.Validade
WHERE UTILIZADOR.NIF = [NIF]
AND CARTAO_ANDANTE.Validade >= CURDATE();
```

- **Requisito**: Obter informações sobre os passes válidos de um utilizador.

- **Resultado esperado**: O query devolverá o nome do utilizador, o ID do(s) cartão(ões) válido(s) associado(s) ao utilizador, o tipo de subscrição e a data de validade de cada passe.

**2**. Query para registar uma nova viagem para um utilizador:

```sql
USE `test`;

INSERT INTO VIAGEM (ViagemID, InicioViagem, DataViagem, Validacao)
VALUES ([ViagemID], NOW(), CURDATE(), 1);
```
- **Requisito**: Registar uma nova viagem para o utilizador.

- **Resultado Esperado**: O query irá inserir um novo registo de viagem com o ViagemID especificado, a data/hora atual como hora de início, a data atual como data de viagem e a validação definida como TRUE.

**3**. Query para obter o histórico de viagens de um utilizador:

```sql
USE `test`;

SELECT ViagemID, InicioViagem, DataViagem, Validacao
FROM VIAGEM
WHERE CartaoID = [CartaoID]
ORDER BY InicioViagem DESC;
```

- **Requisito**: Obter o histórico de viagens de um utilizador.

- **Resultado Esperado**: O query devolverá o ViagemID, a hora de início, a data da viagem e o estado de validação de todas as viagens associadas à CartaoID especificado, ordenadas pela hora de início por ordem decrescente.

**4**. Query  para obter as informações pessoais de um utilizador:

```sql
USE `test`;

SELECT Nome, Email, NumeroTelemovel, Endereco
FROM UTILIZADOR
WHERE NIF = [NIF];
```
- **Requisito**: Obter as informações pessoais de um utilizador.

- **Resultado Esperado**: O query devolverá o nome, o e-mail, o número de telefone e o endereço do utilizador com base no NIF especificado.

**5**. Query para atualizar as informações pessoais de um utilizador:

```sql
USE `test`;

UPDATE UTILIZADOR
SET Nome = [NovoNome], Email = [NovoEmail], NumeroTelemovel = [NovoNumeroTelemovel], Endereco = [NovoEndereco]
WHERE NIF = [NIF];
```

- **Requisito**: Atualizar as informações pessoais de um utilizador.

- **Resultado Esperado**: O query atualizará o nome, o e-mail, o número de telefone e o endereço do usuário com os novos valores especificados com base no NIF especificado.
---
[< Previous](rebd04.md) | [^ Main](https://github.com/a041326/TCM22-SIBD-G01/blob/main/README.md) | Next >
:--- | :---: | ---: 

## Grupo 01

- Ana Faria [@AnaFaria](https://github.com/FariaAna)

- David Lima [@DavidLima](https://github.com/D-S-Lima)

- Inês Sousa [@InêsSousa](https://github.com/a041326)
