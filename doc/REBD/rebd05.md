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

**1**. Query para obter as informações de todos ou de um cartão de andante específico com base no seu ID:

```sql
USE `test`;

SELECT andante_database.CartaoAndante.CartaoID, andante_database.Assinatura.Validade, Preco, TipodeAssinatura, andante_database.Possui_um.NIF, Nome, Email, NumeroTelemovel FROM CartaoAndante
LEFT JOIN andante_database.Possui_um
ON andante_database.CartaoAndante.CartaoID = andante_database.Possui_um.CartaoID
LEFT JOIN andante_database.Utilizador
ON andante_database.Utilizador.NIF = andante_database.Possui_um.NIF
LEFT JOIN andante_database.Contem
ON andante_database.Contem.CartaoID = andante_database.CartaoAndante.CartaoID
LEFT JOIN andante_database.Assinatura
ON andante_database.Assinatura.AssinaturaID = andante_database.Contem.AssinaturaID;

```

- **Requisito**: Essa consulta obtém as informações de todos os cartões de andante.

- **Resultado esperado**: Como resultado vamos obter colunas com "CartãoID", "Validade", "Preco", "TipodeAssinatura", "NIF", "Nome", "Email" e "NumeroTelemovel.

```sql
USE `test`;

SELECT andante_database.CartaoAndante.CartaoID, andante_database.Assinatura.Validade, Preco, TipodeAssinatura, andante_database.Possui_um.NIF, Nome, Email, NumeroTelemovel FROM CartaoAndante
LEFT JOIN andante_database.Possui_um
ON andante_database.CartaoAndante.CartaoID = andante_database.Possui_um.CartaoID
LEFT JOIN andante_database.Utilizador
ON andante_database.Utilizador.NIF = andante_database.Possui_um.NIF
LEFT JOIN andante_database.Contem
ON andante_database.Contem.CartaoID = andante_database.CartaoAndante.CartaoID
LEFT JOIN andante_database.Assinatura
ON andante_database.Assinatura.AssinaturaID = andante_database.Contem.AssinaturaID
WHERE andante_database.CartaoAndante.CartaoID = '512446';

```

- **Requisito**:Essa consulta obtém as informações de um cartão de andante especifico com base no seu ID.

- **Resultado esperado**: Como resultado vamos obter colunas com "CartãoID", "Validade", "Preco", "TipodeAssinatura", "NIF", "Nome", "Email" e "NumeroTelemovel.

**2**. Query para registar uma nova viagem para um utilizador:

```sql
USE `test`;

INSERT INTO andante_database.Viagem (ViagemID, InicioViagem, DataViagem, Validacao)
VALUES ('445', 'Francos', '2023-06-02', 'Validado');

INSERT INTO andante_database.Efetua (EfetuaID,ViagemID, CartaoID)
VALUES ('32', '445', '429700');

```
- **Requisito**: Insere uma nova viagem no sistema para um utilizador específico.

- **Resultado Esperado**: A viagem com o ID "445" é registrada no sistema com a data da viagem em 2 de junho de 2023, status de validação como "Validado" e está associada ao cartão de andante com o ID "429700".

**3**. Query para obter o histórico de viagens de todos ou de um utilizador:

```sql
USE `test`;

SELECT ViagemID, InicioViagem, DataViagem, Validacao
FROM VIAGEM
WHERE CartaoID = 'ABC123';

```
- **Requisito**: Realiza uma consulta para obter o histórico de todas as viagens.

- **Resultado Esperado**:  Serão retornadas as informações das viagens realizadas. As informações incluem o ID da viagem, data da viagem e status de validação, assim como o ID da Viagem, O ID dos cartões e ID da viagem efetuada.

```sql
USE `test`;

SELECT andante_database.Viagem.ViagemId, InicioViagem, DataViagem, Validacao, CartaoID
FROM andante_database.Viagem
LEFT JOIN andante_database.Efetua
ON andante_database.Viagem.ViagemID = andante_database.Efetua.ViagemID
WHERE CartaoID = '125872';

```
- **Requisito**: Realiza uma consulta para obter o histórico de viagens do CartaoID "125872".

- **Resultado Esperado**:  Serão retornadas as informações das viagens realizadas pelo mesmo CartaoID. As informações incluem o ID da viagem, data da viagem e status de validação, assim como o ID da Viagem, O ID dos cartões e ID da viagem efetuada.

**4**. Query para atualizar os dados de utilizador:

```sql
USE `test`

UPDATE andante_database.Utilizador
SET Nome = 'Gabriel Silva', Email = 'gabrielsilva@hotmail.com', NumeroTelemovel = '987654321', Endereco = 'Avenida dos Aliados,456,Porto,Portugal' 
WHERE NIF = '398425761';

```
- **Requisito**: Atualizar os dados de um espoecifico utilizador baseado no seu NIF.

- **Resultado Esperado**: Alterar as colunas "Nomes", "Email", "NumeroTelemovel" e "Endereco".

**5**. Query para criar um novo utilizador assim como um novo cartão:

```sql
USE `test`;

INSERT INTO Utilizador (NIF, UtilizadorID, Nome, Email, NumeroTelemovel, Endereco)
VALUES (398252733, 93358, 'Antonio Ramos', 'antonioramos@gmail.com', 925372523, 'Rua das Flores, 123, Porto,Portugal');

```

- **Requisito**: Criar um novo utilizador.

- **Resultado Esperado**: Inserir na tabeça "Utilizador", linha com os dados especificos de "NIF", "UtilizadorID", "Nome", "Email", "NumeroTelemovel" e "Endereco".

```sql
USE `test`;

INSERT INTO andante_database.Assinatura (TipodeAssinatura, Validade, Preco)
VALUES ('Sub23', '2023-07-25', '30.00');

INSERT INTO andante_database.CartaoAndante (CartaoID, Validade)
VALUES ('924836', '2025-07-25');

INSERT INTO andante_database.Contem (AssinaturaID, CartaoID)
VALUES ('62', '924836');

INSERT INTO andante_database.Possui_um ( NIF, CartaoID)
VALUES ('398252733', '924836');

```

- **Requisito**: Inserir os dados do novo cartão do Utilizador.

- **Resultado Esperado**: A primeira declaração adiciona uma nova subscrição com a sua Validade e preço na tabela "Assinatura". A segunda declaração insere um novo cartão Andante (924836) com a sua validade na tabela "CartaoAndante". A terceira declaração associa a subscrição com o cartão na tabela "Contem". A quarta declaração declara a relação de proprietário entre o utilizador e o cartão na tabela "Possui_um".

**6**. Query para atualizar o preço de uma assinatura:

```sql
USE `test`;

UPDATE andante_database.Assinatura 
SET andante_database.Assinatura.Preco = 30.00 
WHERE andante_database.Assinatura.TipodeAssinatura = 'Normal' 
  AND andante_database.Assinatura.AssinaturaID = '7';
```
- **Requisito**: Realiza a atualização do preço de uma assinatura específica. O campo a ser atualizado é o Preco. A condição WHERE especifica o TipoAssinatura da assinatura que se deseja atualizar.

- **Resultado Esperado**: O preço da assinatura com o TipoAssinatura especificado será atualizado para o novo valor fornecido.

---
[< Previous](rebd04.md) | [^ Main](https://github.com/a041326/TCM22-SIBD-G01/blob/main/README.md) | Next >
:--- | :---: | ---: 