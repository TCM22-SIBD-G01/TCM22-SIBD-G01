# C2 : Esquema conceptual

## **Modelo E/A**

![Esquema Conceptual](/doc/REI/imagens/Esquema_Conceptual.png)

## **Regras de negócio adicionais (Restrições)**

Com base nas restrições estabelecidas previamente, REI, aqui estão as restrições adicionais:

Restrição de Associação:

- Um cartão de Andante só pode estar associado a um único utilizador.

- Cada utilizador só pode ter um cartão de Andante associado à sua conta.

Restrição de Zona de Viagem:

- Um utilizador só pode viajar em uma zona que corresponda ao tipo de passe que ele possui.

- O sistema deve verificar a correspondência entre a zona de viagem e o tipo de passe do utilizador.

Restrição de Viagem Única:

- Um cartão de Andante só pode ter uma única viagem registrada de cada vez.

- Antes de registrar uma nova viagem, o sistema deve verificar se o cartão de Andante está atualmente em uma viagem ativa.

Restrição de Preço:

- O preço de um tipo de assinatura deve ser determinado pelo tipo de assinatura do utilizador e pela zona de viagem.

Restrição de Multa:

- Um utilizador deve ser multado se estiver sem um passe válido registrado no sistema durante uma viagem.

- Se o utilizador tiver um passe válido, mas não o tiver consigo fisicamente, o fiscalizador deve confirmar a validade do passe consultando o sistema antes de aplicar a multa.

Restrição de Privacidade:

- As informações pessoais dos utilizadores devem ser protegidas e mantidas confidenciais.

- Acesso não autorizado às informações dos utilizadores deve ser impedido.

Restrição de Backup:

- O sistema deve realizar um backup diário para garantir a segurança e a integridade das informações dos utilizadores.

- O backup deve ser realizado para evitar a perda de dados em caso de falha de hardware ou software.

---
[< Previous](rebd01.md) | [^ Main](https://github.com/exemploTrabalho/reportSIBD/) | [Next >](rebd03.md)
:--- | :---: | ---: 