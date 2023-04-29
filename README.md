 # TCM22-SIBD-G01
Metro
## **Metro**

Repositório para hospedar o projeto desenvolvido para *Sistemas de Informação e Bases de Dados*. Desenvolvido pelo Grupo G01: [@AnaFaria](https://github.com/FariaAna), [@DavidLima](https://github.com/D-S-Lima) e [@InêsSousa](https://github.com/a041326).

## Breve descrição do tema

Queremos organizar o sistema do metro no sentido em que o metro tem um sistema de cartões de andante que estão associado a enumeras pessoas. As mesmas registaram-se nesse sistema e podem ou não ter um passe de zona geral, sendo assim, imaginemos o seguinte problema:

 **Os fiscalizadores pretendem multar alguém que indica ter passe, porém perdeu o mesmo ou esqueceu-se, normalmente seria multado por um serviço que está a usufruir.**

O nosso objetivo é resolver este problema de modo a que os dados de todos os que possuam um passe sejam organizados e o pica perceba que a pessoa está a pagar pelo serviço na sua totalidade e apenas teve um azar de não o ter com ele pela razão que o mesmo apresentar.

## Organização do repositório

Por favor, ajude o leitor a navegar descrevendo como o repositório está organizado, *fornecendo links*.


# Relatório de Especificação da Informação

## Índice

## Grupo 01

- Ana Faria [@AnaFaria](https://github.com/FariaAna)

- David Lima [@DavidLima](https://github.com/D-S-Lima)

- Inês Sousa [@InêsSousa](https://github.com/a041326)

# **Relatório de Especificação da Informação**

## Índice

## C1 : Introdução

### Descrição do trabalho

Queremos organizar o sistema do metro no sentido em que o metro tem um sistema de cartões de andante que estão associado a enumeras pessoas. As mesmas registaram-se nesse sistema e podem ou não ter um passe de zona geral, sendo assim, imaginemos o seguinte problema:

 **Os fiscalizadores pretendem multar alguém que indica ter passe, porém perdeu o mesmo ou esqueceu-se, normalmente seria multado por um serviço que está a usufruir.**

O nosso objetivo é resolver este problema de modo a que os dados de todos os que possuam um passe sejam organizados e o pica perceba que a pessoa está a pagar pelo serviço na sua totalidade e apenas teve um azar de não o ter com ele pela razão que o mesmo apresentar.

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