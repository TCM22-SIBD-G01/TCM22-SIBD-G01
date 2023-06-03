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