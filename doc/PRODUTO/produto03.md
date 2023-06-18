# C3 : LoopBack4

Relativamente à integração com o LoopBack4, este foi utilizado como  framework, de desenvolvimento de APIs, a partir do Node.js. Criamos de forma rápida a framework,  uma vez que este gera automaticamente modelos e APIs baseados nas tabelas e relações definidas na andante_database. Relativamente à criação dos endpoints, estes foram criados para manipular dados como criação de novos registros, recuperar registros existentes, atualizar dados ou excluí-los.

![AssinaturaController,LoopBack](/doc/PRODUTO/imagens/LoopBack-001.png)

![CartaoAndanteController,Node](/doc/PRODUTO/imagens/LoopBack-002.png)

![UtilizadorController,Node](/doc/PRODUTO/imagens/LoopBack-003.png)

![ViagemController,Node](/doc/PRODUTO/imagens/LoopBack-004.png)

![CartaoAndanteController-pedido,Node](/doc/PRODUTO/imagens/LoopBack-pedidos-001.png)

Este pedido GET retorna todos os dados da tabela _CartaoAndante_.  

![CartaoAndanteController-pedido,Node](/doc/PRODUTO/imagens/LoopBack-pedidos-002.png)

Este pedido GET retorna todos os dados das tabelas _CartaoAndante_ e _Viagens_. Este pedido demonstra as viagens feitas por cada "cartão andante".

![CartaoAndanteController-pedido,Node](/doc/PRODUTO/imagens/LoopBack-pedidos-003.png)

Este pedido GET retorna os dados de um único utilizador, neste caso para o utilizador com CartaoID = 287936. Este pedido demonstra todas as informações deste utilizador a partir do uso das tabelas _Utilizador_  e _CartaoAndante_.

![UtilizadorController-pedido,Node](/doc/PRODUTO/imagens/LoopBack-pedidos-004.png)

Este pedido GET retorna todos os dados das tabelas _Utilizador_ e _CartaoAndante_. Demonstra todos os dados pessoais dos utilizadores, assim como os correspondentes dados do seu cartão andante.

![UtilizadorController-pedido,Node](/doc/PRODUTO/imagens/LoopBack-pedidos-005.png)

Este pedido GET retorna os dados de um único utilizador, neste caso para o utilizador com CartaoID = 194512. Este pedido demonstra todas as informações deste utilizador a partir do uso das tabelas _Utilizador_  e _CartaoAndante_.

## **Conclusão**

 Apesar da dificuldade da criação do mesmo, acabamos por conseguir executar o trabalho que pretendiamos da melhor forma possivel.
---
[< Previous](produto02.md) | [^ Main](https://github.com/a041326/TCM22-SIBD-G01/blob/main/README.md) | Next >