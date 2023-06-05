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