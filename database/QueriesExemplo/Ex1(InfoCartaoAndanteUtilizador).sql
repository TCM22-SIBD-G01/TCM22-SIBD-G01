SELECT andante_database.CartaoAndante.CartaoID, andante_database.Assinatura.Validade, Preco, TipodeAssinatura, andante_database.Possui_um.NIF, Nome, Email, NumeroTelemovel FROM CartaoAndante
LEFT JOIN andante_database.Possui_um
ON andante_database.CartaoAndante.CartaoID = andante_database.Possui_um.CartaoID
LEFT JOIN andante_database.Utilizador
ON andante_database.Utilizador.NIF = andante_database.Possui_um.NIF
LEFT JOIN andante_database.Contem
ON andante_database.Contem.CartaoID = andante_database.CartaoAndante.CartaoID
LEFT JOIN andante_database.Assinatura
ON andante_database.Assinatura.AssinaturaID = andante_database.Contem.AssinaturaID
WHERE andante_database.CartaoAndante.CartaoID = '512446';
