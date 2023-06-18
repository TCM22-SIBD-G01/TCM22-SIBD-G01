UPDATE andante_database.Assinatura 
SET andante_database.Assinatura.Preco = 30.00 
WHERE andante_database.Assinatura.TipodeAssinatura = 'Normal' 
  AND andante_database.Assinatura.AssinaturaID = '7';