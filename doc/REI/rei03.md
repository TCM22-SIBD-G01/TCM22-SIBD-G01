# C3 : Esquema conceptual
## **Modelo E/A**

 ![Esquema Conceptual](/doc/REI/imagens/Esquema_Conceptual.png)

 Neste esquema conceptual mostramos os conteudos que pertencem em sistema ao usuario, o que o mesmo regista no sistema, assim como o memso possuir um cartão andante que é usado para efetuar viagens, o mesmo tem uma assinatura e está associado a um usuario e a um tipo de assinatura.
 
## **Regras de negócio adicionais (Restrições)**

1. Um cartão de andante só pode estar associado a um usuário.

2. Um usuário só pode viajar em uma zona que corresponda ao seu passe.

3. Um cartão de andante só pode ter uma viagem registrada de cada vez.

4. O preço vai depender do tipo de passe e da zona do mesmo.

5. Um usuário deve ser multado se estiver sem um passe válido, no sistema, durante uma viagem. Caso tenha um passe valido mas não o tenha (fisicamente) não é multado, mas deve dizer o seu andante ID ou NIF ao fiscalizador para o mesmo confirmar se está valido, se a zona corresponde à do seu andante.

6. As informações pessoais dos usuários devem ser protegidas e mantidas confidenciais.

7. O sistema deve ter um backup diário para garantir que as informações dos usuários sejam mantidas seguras e não sejam perdidas em caso de falha de hardware ou software.


---
   
[< Previous](rei02.md) | [^ Main](https://github.com/a041326/TCM22-SIBD-G01/blob/main/README.md) |  Next >
:--- | :---: | ---: 