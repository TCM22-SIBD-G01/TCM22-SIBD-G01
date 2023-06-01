# C1 : Introdução

## **Descrição do trabalho**

Queremos organizar o sistema do metro no sentido em que o metro tem um sistema de cartões de andante que estão associado a enumeras pessoas. As mesmas registaram-se nesse sistema e podem ou não ter um passe de zona geral, sendo assim, imaginemos o seguinte problema:

Os fiscalizadores pretendem multar alguém que indica ter passe, porém perdeu o mesmo ou esqueceu-se, normalmente seria multado por um serviço que está a usufruir.

O nosso objetivo é resolver este problema de modo a que os dados de todos os que possuam um passe sejam organizados e o pica perceba que a pessoa está a pagar pelo serviço na sua totalidade e apenas teve um azar de não o ter com ele pela razão que o mesmo apresentar.

Para resolver este problema, vamos utilizar um sistema de gestão de cartões de andante que esteja interligado com uma base de dados central, que permite a identificação dos utilizadores e os seus respetivos passes.

Primeiramente, para os utilizadores desfrutarem deste serviço, é necessário que estes se registem no sistema. Fornecendo informações como o seu nome, email, número de telefone, endereço e NIF. Posteriormente, cada utilizador pode adquirir um cartão de andante, que estará associado a um tipo de assinatura (passe geral, passe sub23, passe família, entre outros).

Cada cartão de andante terá um número único de identificação e a sua data de validade, o mesmo contem a sua assinatura (a mesma pode variar dependendo da escolhida pelo utilizador). A assinatura tem uma validade, um preço e o seu tipo de assinatura.
O utilizador após obter o cartão regista os seus dados indicados acima no sistema, o mesmo ao fazer isso quando efetuar uma viagem, será possivel verificar o ID da viagem juntamente com o inicio da mesma, a sua data e permite validar ao fiscalizador, se foi anteriormente validado por outros ou não.

No caso de um fiscalizador abordar um utilizador que indica ter um passe, mas não o tem consigo, o fiscalizador poderá verificar a base de dados central para validar se o utilizador possui realmente um passe ativo. Se for confirmado que o utilizador possui um passe válido, o fiscalizador poderá prosseguir, sem aplicar a multa.

O sistema deve armazenar as informações dos utilizadores, cartões Andante e viagens realizadas. As informações sobre os cartões Andante devem estar vinculadas à conta do utilizador correspondente. Os fiscalizadores podem verificar a validade do passe do utilizador consultando o banco de dados e as informações do cartão Andante. Se o utilizador tiver um passe válido, mas não o tiver consigo no momento da fiscalização, o fiscalizador deve considerar que o utilizador está pagando pelos serviços e apenas teve um problema de não ter o cartão com ele. Caso contrário, o fiscalizador deve aplicar a multa correspondente.

Em suma, um sistema de gestão de cartões de andante interligado com uma base de dados central permite a organização dos dados dos utilizadores e a validação dos passes em tempo real, evitando multas indevidas por parte dos fiscalizadores.

---

[< Previous](rei00.md) | [^ Main](https://github.com/a041326/TCM22-SIBD-G01/blob/main/README.md) | [Next >](rei02.md)
:--- | :---: | ---: 