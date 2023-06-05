# C3 : SQL

## **DDL**

```sql
USE `test`;

-- Drop tabelas se existirem

DROP TABLE IF EXISTS `UTILIZADOR`;
DROP TABLE IF EXISTS `CARTAO_ANDANTE`;
DROP TABLE IF EXISTS `ASSINATURA`;
DROP TABLE IF EXISTS `VIAGEM`;
DROP TABLE IF EXISTS `Possui_um`;
DROP TABLE IF EXISTS `Contem`;
DROP TABLE IF EXISTS `Efetua`;

-- Criar tabela UTILIZADOR

CREATE TABLE IF NOT EXISTS `UTILIZADOR` (
  `NIF` VARCHAR(9) NOT NULL,
  `Nome` VARCHAR(255) NOT NULL,
  `Email` VARCHAR(255) NOT NULL,
  `NumeroTelemovel` VARCHAR(9) NOT NULL,
  `Endereco` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`NIF`)
);

-- Criar tabela CARTAO_ANDANTE 

CREATE TABLE IF NOT EXISTS `CARTAO_ANDANTE` (
  `CartaoID` INT UNSIGNED NOT NULL,
  `Validade` DATE NOT NULL,
  PRIMARY KEY (`CartaoID`)
);

-- Criar tabela ASSINATURA 

CREATE TABLE IF NOT EXISTS `ASSINATURA` (
  `Validade` DATE NOT NULL,
  `TipoAssinatura` VARCHAR(255) NOT NULL,
  `Preco` DECIMAL(10, 2) NOT NULL,
  PRIMARY KEY (`Validade`, `TipoAssinatura`)
);

-- Criar tabela VIAGEM 

CREATE TABLE IF NOT EXISTS `VIAGEM` (
  `ViagemID` INT UNSIGNED NOT NULL,
  `InicioViagem` VARCHAR(255) NOT NULL,
  `DataViagem` DATE NOT NULL,
  `Validacao` BOOLEAN NOT NULL,
  PRIMARY KEY (`ViagemID`)
);

-- Criar tabela Possui_um 

CREATE TABLE IF NOT EXISTS `Possui_um` (
  `NIF` VARCHAR(9) NOT NULL,
  `CartaoID` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`NIF`, `CartaoID`),
  FOREIGN KEY (`NIF`) REFERENCES `UTILIZADOR`(`NIF`),
  FOREIGN KEY (`CartaoID`) REFERENCES `CARTAO_ANDANTE`(`CartaoID`)
);

-- Criar tabela Contem 

CREATE TABLE IF NOT EXISTS `Contem` (
  `CartaoID` INT UNSIGNED NOT NULL,
  `TipoAssinatura` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`CartaoID`, `TipoAssinatura`),
  FOREIGN KEY (`CartaoID`) REFERENCES `CARTAO_ANDANTE`(`CartaoID`),
  FOREIGN KEY (`TipoAssinatura`) REFERENCES `ASSINATURA`(`TipoAssinatura`)
);

-- Criar tabela Efetua 

CREATE TABLE IF NOT EXISTS `Efetua` (
  `CartaoID` INT UNSIGNED NOT NULL,
  `ViagemID` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`CartaoID`, `ViagemID`),
  FOREIGN KEY (`CartaoID`) REFERENCES `CARTAO_ANDANTE`(`CartaoID`),
  FOREIGN KEY (`ViagemID`) REFERENCES `VIAGEM`(`ViagemID`)
);

```

## **DML**

Seguem-se alguns exemplos de queries SQL que evidenciam a conformidade com os requisitos identificados:

**1**. Query para obter as informações de um cartão de andante específico com base no seu ID:

```sql
USE `test`;

SELECT * FROM CARTAO_ANDANTE WHERE CartaoID = 'ABC123';

```

- **Requisito**: Essa consulta obtém as informações de um cartão de andante específico com base no seu ID.

- **Resultado esperado**: As informações do cartão de andante com o ID especificado.

**2**. Query para registar uma nova viagem para um utilizador:

```sql
USE `test`;

INSERT INTO VIAGEM (ViagemID, InicioViagem, DataViagem, Validacao, CartaoID)
VALUES ('123456', '09:30:00', '2023-06-02', 'Validado', 'ABC123');

```
- **Requisito**: Insere uma nova viagem no sistema para um utilizador específico.

- **Resultado Esperado**: A viagem com o ID "123456" é registrada no sistema com o horário de início da viagem às 09:30:00, data da viagem em 2 de junho de 2023, status de validação como "Validado" e está associada ao cartão de andante com o ID "ABC123".

**3**. Query para obter o histórico de viagens de um utilizador:

```sql
USE `test`;

SELECT ViagemID, InicioViagem, DataViagem, Validacao
FROM VIAGEM
WHERE CartaoID = 'ABC123';

```
- **Requisito**: Realiza uma consulta para obter o histórico de viagens de um utilizador específico.

- **Resultado Esperado**:  Serão retornadas as informações das viagens realizadas pelo utilizador associado ao cartão de andante com o ID "ABC123". As informações incluem o ID da viagem, horário de início da viagem, data da viagem e status de validação.

**4**. Query para atualizar a zona de uma viagem:

```sql
USE `test`;

UPDATE VIAGEM
SET Zona = 'Zona 2'
WHERE ViagemID = '123456789';

```
- **Requisito**: Realiza a atualização da zona de uma viagem específica. O campo a ser atualizado é a Zona. A condição WHERE especifica o ViagemID da viagem que se deseja atualizar.

- **Resultado Esperado**: A zona da viagem com o ViagemID especificado será atualizada para a nova zona fornecida.

**5**. Query para atualizar as informações pessoais de um utilizador:

```sql
USE `test`;

UPDATE UTILIZADOR
SET Nome = 'Novo Nome', Email = 'novoemail@example.com', NumeroTelemovel = '987654321', Endereco = 'Nova Morada'
WHERE NIF = '123456789';

```

- **Requisito**: Atualizar as informações pessoais de um utilizador. Os campos a serem atualizados são Nome, Email, NumeroTelemovel e Endereco.  A condição WHERE especifica o NIF do utilizador que se deseja atualizar.

- **Resultado Esperado**: As informações pessoais do utilizador com o NIF especificado serão atualizadas com os novos valores fornecidos.

**6**. Query para atualizar o preço de uma assinatura:

```sql
USE `test`;

UPDATE ASSINATURA
SET Preco = 30.00
WHERE TipoAssinatura = 'Passe Geral';
```
- **Requisito**: Realiza a atualização do preço de uma assinatura específica. O campo a ser atualizado é o Preco. A condição WHERE especifica o TipoAssinatura da assinatura que se deseja atualizar.

- **Resultado Esperado**: O preço da assinatura com o TipoAssinatura especificado será atualizado para o novo valor fornecido.

---
[< Previous](rebd04.md) | [^ Main](https://github.com/a041326/TCM22-SIBD-G01/blob/main/README.md) | Next >
:--- | :---: | ---: 