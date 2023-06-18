# C1 : Introdução

## **Descrição do trabalho**



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