# C2 : Especificação de Requisitos

Descrição dos requisitos para um sistema de informação para o metro, que permitirá gerir os cartões Andante e as viagens realizadas pelos utilizadores do sistema. O sistema será utilizado pelos utilizadores do metro, pelos fiscalizadores e pelos gestores do sistema.
## **Descrição dos requisitos do utilizador**

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


---
   
[< Previous](rei01.md) | [^ Main](https://github.com/a041326/TCM22-SIBD-G01/blob/main/README.md) | [Next >](rei03.md)
:--- | :---: | ---: 