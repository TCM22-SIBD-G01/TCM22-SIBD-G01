 # TCM22-SIBD-G01
## **Metro**

Repositório para hospedar o projeto desenvolvido para *Sistemas de Informação e Bases de Dados*. Desenvolvido pelo Grupo G01: [@AnaFaria](https://github.com/FariaAna), [@DavidLima](https://github.com/D-S-Lima) e [@InêsSousa](https://github.com/a041326).

## Breve descrição do tema

Resolução de um problema no sistema de transporte público do metro, em que os fiscalizadores podem multar usuários que indicam possuir um passe de zona geral, mas que o perderam ou esqueceram em casa. O objetivo é resolver este problema por meio da organização dos dados dos usuários que possuem um passe, para que os fiscalizadores possam verificar facilmente se o usuário está autorizado a utilizar o serviço completo, mesmo que não esteja com o passe em mãos. Isso evita que usuários sejam multados injustamente e garante a eficiência do sistema de transporte público.

## Organização do repositório

Por favor, ajude o leitor a navegar descrevendo como o repositório está organizado, *fornecendo links*.


## Grupo 01

- Ana Faria [@AnaFaria](https://github.com/FariaAna)

- David Lima [@DavidLima](https://github.com/D-S-Lima)

- Inês Sousa [@InêsSousa](https://github.com/a041326)

# **Relatório de Especificação da Informação**

## C1 : Introdução

### **Descrição do trabalho**

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

## C3 : Normalização

### **Relações**

Usuario (UsuarioID, Nome, Email, NumeroTelefone, Endereco, NIF) 	

Viagem (ViagemID, ZonaViagem, DataViagem, HoraViagem)

Cartão_de_Andante (UsuarioID, TipoAssinatura)

Andante sub13 (TipoAssinatura, UsuarioID, PrecoCartao, DataValidadeCartao, Tarifa)

Andante_4_18@escola (TipoAssinatura, UsuarioID, PrecoCartao, DataValidadeCartao, Tarifa)

Andante sub23 (TipoAssinatura, UsuarioID, PrecoCartao, DataValidadeCartao, Tarifa)

Andante social+ (TipoAssinatura, UsuarioID, PrecoCartao, DataValidadeCartao, Tarifa)

Andante 3ªidade (TipoAssinatura, UsuarioID, PrecoCartao, DataValidadeCartao, Tarifa)

Andante Familia (TipoAssinatura, UsuarioID, PrecoCartao, DataValidadeCartao, Tarifa)

REGISTRA (#UsuarioID -> Usuario, #NIF -> Usuario, #TipoAssinatura -> Cartão_de_Andante, Email, NomeUsuario, Endereco, NumeroTelefone)

POSSUI_UM (UsuarioID -> Usuario, NIF -> Usuario, TipoAssinatura -> Cartao_de_Andante)

EFETUA (TipoAssinatura, ViagemID, ZonaViagem, DataViagem, HoraViagem)

### **Normalização do Esquema Relacional**

### **1NF**

![Normalização, 1NF](/doc/imagens/1NF.jpg)

Usuário (**UsuarioID**,**NIF**, Nome, Email, NumeroTelefone, Endereco)

Cartão_de_Andante (**UsuarioID**, **TipoAssinatura**, PrecoCartao, DataValidadeCartao, Tarifa)

Viagem (**ViagemID**, ZonaViagem, DataViagem, HoraViagem)

### **2NF**

![Normalização, 2NF](/doc/imagens/2NF.jpg)

Usuario (**UsuarioID**,**NIF**, Nome, Email, NumeroTelefone, Endereco)

Cartao_de_Andante (**#UsuarioID** -> Usuario, **TipoAssinatura**, PrecoCartao, DataValidadeCartao, Tarifa)

Viagem (**ViagemID**, ZonaViagem, DataViagem, HoraViagem)

EFETUA_VIAGEM (**UsuarioID** -> Usuario, **ViagemID** ->Viagem)

### **3NF**

As relações já se encontram na 3NF.

## C4 : Esquema Relacional

## C5 : SQL
