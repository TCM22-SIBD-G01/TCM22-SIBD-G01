INSERT INTO andante_database.Assinatura (TipodeAssinatura, Validade, Preco)
VALUES ('Sub23', '2023-07-25', '30.00');

INSERT INTO andante_database.CartaoAndante (CartaoID, Validade)
VALUES ('924836', '2025-07-25');

INSERT INTO andante_database.Contem (AssinaturaID, CartaoID)
VALUES ('62', '924836');

INSERT INTO andante_database.Possui_um ( NIF, CartaoID)
VALUES ('398252733', '924836');