SELECT andante_database.Viagem.ViagemId, InicioViagem, DataViagem, Validacao, CartaoID
FROM andante_database.Viagem
LEFT JOIN andante_database.Efetua
ON andante_database.Viagem.ViagemID = andante_database.Efetua.ViagemID
WHERE CartaoID = '125872';