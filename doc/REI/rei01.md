# C1 : Introdução

## **Descrição do trabalho**

Para resolver este problema, vamos utilizar um sistema de gestão de cartões de andante que esteja interligado com uma base de dados central, que permite a identificação dos utilizadores e os seus respetivos passes.

Primeiramente, para os utilizadores desfrutarem deste serviço, é necessário que estes se registem no sistema. Fornecendo informações como o seu nome, email, número de telefone, endereço e NIF. Posteriormente, cada utilizador pode adquirir um cartão de andante, que estará associado a um tipo de assinatura (passe geral, passe sub23, passe família, entre outros).

Cada cartão de andante terá um número único de identificação e informações como o preço do cartão, data de validade e tarifas associadas ao tipo de assinatura do utilizador. Além disso, será possível registrar cada viagem realizada pelo utilizador, indicando a zona de viagem, data e hora.

No caso de um fiscalizador abordar um utilizador que indica ter um passe, mas não o tem consigo, o fiscalizador poderá verificar a base de dados central para validar se o utilizador possui realmente um passe ativo. Se for confirmado que o utilizador possui um passe válido, o fiscalizador poderá prosseguir, sem aplicar a multa.

O sistema deve armazenar as informações dos usuários, cartões Andante e viagens realizadas. As informações sobre os cartões Andante devem estar vinculadas à conta do usuário correspondente. Os fiscalizadores podem verificar a validade do passe do usuário consultando o banco de dados e as informações do cartão Andante. Se o usuário tiver um passe válido, mas não o tiver consigo no momento da fiscalização, o fiscalizador deve considerar que o usuário está pagando pelos serviços e apenas teve um problema de não ter o cartão com ele. Caso contrário, o fiscalizador deve aplicar a multa correspondente.

Em suma, um sistema de gestão de cartões de andante interligado com uma base de dados central permite a organização dos dados dos utilizadores e a validação dos passes em tempo real, evitando multas indevidas por parte dos fiscalizadores.

---

[< Previous](rei00.md) | [^ Main](https://github.com/a041326/TCM22-SIBD-G01/blob/main/README.md) | [Next >](rei02.md)
:--- | :---: | ---: 