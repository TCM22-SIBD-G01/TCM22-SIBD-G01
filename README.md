 # TCM22-SIBD-G01
## **Metro**

Repositório para hospedar o projeto desenvolvido para *Sistemas de Informação e Bases de Dados*. Desenvolvido pelo Grupo G01: [@AnaFaria](https://github.com/FariaAna), [@DavidLima](https://github.com/D-S-Lima) e [@InêsSousa](https://github.com/a041326).

## Breve descrição do tema

Este projeto busca resolver um problema de multas injustas no sistema de transporte público de metro, ao organizar os dados dos usuários com passe/cartão Andante para que os fiscalizadores possam verificar se o mesmo se encontra no sistema, mesmo sem o passe em mãos, garantindo assim eficiência e evitando multas indevidas.

## Grupo 01

- Ana Faria [@AnaFaria](https://github.com/FariaAna)

- David Lima [@DavidLima](https://github.com/D-S-Lima)

- Inês Sousa [@InêsSousa](https://github.com/a041326)

# **Relatório de Especificação da Informação**

## C1 : Introdução

### **Descrição do trabalho**

Para resolver este problema, vamos utilizar um sistema de gestão de cartões de andante que esteja interligado com uma base de dados central, que permite a identificação dos utilizadores e os seus respetivos passes.

Primeiramente, para os utilizadores desfrutarem deste serviço, é necessário que estes se registem no sistema. Fornecendo informações como o seu nome, email, número de telefone, endereço e NIF. Posteriormente, cada utilizador pode adquirir um cartão de andante, que estará associado a um tipo de assinatura (passe geral, passe sub23, passe família, entre outros).

Cada cartão de andante terá um número único de identificação e informações como o preço do cartão, data de validade e tarifas associadas ao tipo de assinatura do utilizador. Além disso, será possível registrar cada viagem realizada pelo utilizador, indicando a zona de viagem, data e hora.

No caso de um fiscalizador abordar um utilizador que indica ter um passe, mas não o tem consigo, o fiscalizador poderá verificar a base de dados central para validar se o utilizador possui realmente um passe ativo. Se for confirmado que o utilizador possui um passe válido, o fiscalizador poderá prosseguir, sem aplicar a multa.

Em suma, um sistema de gestão de cartões de andante interligado com uma base de dados central permite a organização dos dados dos utilizadores e a validação dos passes em tempo real, evitando multas indevidas por parte dos fiscalizadores.


### **Descrição dos requisitos do utilizador**

Os  tipos de utilizadores (actores) do sistema de informação e as funcionalidade (casos de uso) a que estes terão acesso são:

1. Developer: Pessoa responsável por desenvolver e manter o sistema de cartões de andante. As funcionalidades a que ele tem acesso incluem:

   - Criar e manter o banco de dados de usuários e seus passes de zona geral;

   - Criar e manter a interface de usuário para comprar e recarregar o cartão de andante;

   - Criar e manter a interface de usuário para os fiscalizadores inserir os dados necessários e visualizar o status do passe do usuário;

   - Criar e manter a interface de usuário para os fiscalizadores verificarem o histórico do  usuário;

   - Implementar a lógica para determinar as ações que serão tomadas pelo fiscalizador (permite que o usuário continue a usar o serviço ou multá-lo por não ter um passe válido);

   - Implementar a notificação ao usuário, se este for multado, recebe uma notificação no e-mail ou número de telefone, informando sobre a multa e como pagar a mesma;
   
2. Fiscalizador: Pessoa responsável por verificar se os usuários estão a usar o sistema de transporte público corretamente. As funcionalidades a que ele tem acesso incluem:

   - Verificar se o usuário possui um cartão de andante válido;

   - Verificar se o usuário possui um passe de zona geral válido;

   - Verificar o status do passe/cartão andante;

   - Multar o usuário, se ele não estiver usando o sistema corretamente;

3. Usuário Final: Pessoa que usa o sistema de transporte público, possui um cartão de andante e pode ter ou não um passe de zona geral associado a ele. As funcionalidades a que ele tem acesso incluem:

   - Registrar-se no sistema de cartões de andante;

   - Recarregar o cartão de andante;

   - Informar ID ao fiscalizador (caso não tenha o seu cartão/passe consigo);

## C2 : Esquema conceptual
### **Modelo E/A**
 ![Esquema Conceptual](/doc/imagens/EsquemaConceptual.jpg)
### **Regras de negócio adicionais (Restrições)**

1. Um cartão de andante só pode estar associado a um usuário.

2. Um usuário só pode viajar em uma zona que corresponda ao seu passe.

3. Um cartão de andante só pode ter uma viagem registrada de cada vez.

4. O preço vai depender do tipo de passe e da zona do mesmo.

5. Um usuário deve ser multado se estiver sem um passe válido, no sistema, durante uma viagem. Caso tenha um passe valido mas não o tenha (fisicamente) não é multado, mas deve dizer o seu andante ID ou NIF ao fiscalizador para o mesmo confirmar se está valido, se a zona corresponde à do seu andante.

6. As informações pessoais dos usuários devem ser protegidas e mantidas confidenciais.

7. O sistema deve ter um backup diário para garantir que as informações dos usuários sejam mantidas seguras e não sejam perdidas em caso de falha de hardware ou software.
