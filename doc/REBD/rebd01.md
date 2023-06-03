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