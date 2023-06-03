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
---

### **Necessidades do utilizador:**

- Viagens Fáceis e Convenientes: Os utilizadores precisam de um sistema que simplifique a utilização dos cartões Andante para viagens de metro, garantindo uma experiência sem complicações e sem o risco de multas.

- Validação Fiável de Passe: Os utilizadores precisam de ter a garantia de que os seus passes válidos serão reconhecidos e validados pelos fiscalizadores, mesmo que não tenham o cartão físico consigo.

- Processo de Registo Eficiente: Os utilizadores devem ser capazes de registar-se de forma rápida e fácil, fornecendo as informações pessoais necessárias para aceder aos serviços do sistema.

### **Requisitos Funcionais:**

- Registo de Utilizador: O sistema deve permitir que os utilizadores se registem, fornecendo o seu NIF, nome, email, número de telefone e morada. Deve validar e armazenar essas informações com segurança.

- Aquisição de Cartão: Os utilizadores devem poder adquirir um cartão Andante associado a um tipo de assinatura específico. O sistema deve gerar um número de identificação único e associá-lo à conta do utilizador.

- Validação de Viagem: O sistema deve registar os detalhes da viagem, incluindo o ID da viagem, hora de início e data, quando um utilizador valida o seu cartão Andante antes de entrar no metro.

- Verificação de Validade do Passe: Os fiscalizadores devem ser capazes de verificar a validade do passe de um utilizador consultando a base de dados central e as informações do cartão Andante associado.

- Suporte Multilingua: O sistema deve oferecer opções de idioma para atender a utilizadores que falam diferentes idiomas.

### **Gestão de Dados:**

- Armazenamento de dados do Utilizador: O sistema deve armazenar com segurança os dados do utilizador, estes devem ser encriptados e armazenados de forma segura para preservar a privacidade dos utilizadores.

- Armazenamento de Cartões Andante: As informações do cartão, incluindo números de identificação únicos e datas de validade, devem ser armazenadas e associadas às respetivas contas de utilizador.

- Armazenamento de Registos de Viagem: O sistema deve armazenar os detalhes das viagens, incluindo ID da viagem, hora de início e data, para fins de auditoria e validação.

---
[< Previous](rebd00.md) | [^ Main](https://github.com/a041326/TCM22-SIBD-G01/blob/main/README.md) | [Next >](rebd02.md)
:--- | :---: | ---: 