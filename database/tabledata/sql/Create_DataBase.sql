CREATE TABLE `andante_database`.`Utilizador` (
  `NIF` INT(9) NOT NULL,
  `UtilizadorID` INT(5) NOT NULL,
  `Nome` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `NumeroTelemovel` INT(9) NOT NULL,
  `Endereco` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`NIF`),
  UNIQUE INDEX `NIF_UNIQUE` (`NIF` ASC) ,
  UNIQUE INDEX `UtilizadorID_UNIQUE` (`UtilizadorID` ASC) );
  
  CREATE TABLE `andante_database`.`Assinatura` (
  `AssinaturaID` INT(11) NOT NULL,
  `TipodeAssinatura` VARCHAR(45) NOT NULL,
  `Validade` DATE NOT NULL,
  `Preco` DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (`AssinaturaID`),
  UNIQUE INDEX `AssinaturaID_UNIQUE` (`AssinaturaID` ASC) );
  
CREATE TABLE `andante_database`.`CartaoAndante` (
  `CartaoID` INT(11) NOT NULL,
  `Validade` DATE NOT NULL,
  PRIMARY KEY (`CartaoID`),
  UNIQUE INDEX `CartaoID_UNIQUE` (`CartaoID` ASC) );
  
CREATE TABLE `andante_database`.`Viagem` (
  `ViagemID` INT(11) NOT NULL,
  `InicioViagem` VARCHAR(45) NOT NULL,
  `DataViagem` DATE NOT NULL,
  `Validacao` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`ViagemID`),
  UNIQUE INDEX `ViagemID_UNIQUE` (`ViagemID` ASC) );
CREATE TABLE `andante_database`.`Contem` (
  `ContemID` INT(11) NOT NULL AUTO_INCREMENT,
  `Contem_AssinaturaID` INT(11) NOT NULL,
  `Contem_CartaoID` INT(11) NOT NULL,
  PRIMARY KEY (`ContemID`),
  UNIQUE INDEX `ContemID_UNIQUE` (`ContemID` ASC) );  
  
CREATE TABLE `Possui_um` (
  `NIF` int(9) NOT NULL,
  `CartaoID` int(11) NOT NULL,
  KEY `NIF_idx` (`NIF`),
  KEY `CartaoID_idx` (`CartaoID`),
  CONSTRAINT `CartaoID` FOREIGN KEY (`CartaoID`) REFERENCES `CartaoAndante` (`CartaoID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `NIF` FOREIGN KEY (`NIF`) REFERENCES `Utilizador` (`NIF`) ON DELETE NO ACTION ON UPDATE CASCADE);

CREATE TABLE `Efetua` (
  `EfetuaID` int(11) NOT NULL AUTO_INCREMENT,
  `CartaoID` int(11) NOT NULL,
  `ViagemID` int(11) NOT NULL,
  PRIMARY KEY (`EfetuaID`),
  UNIQUE KEY `EfetuaID_UNIQUE` (`EfetuaID`),
  KEY `Efetua_ViagemID` (`ViagemID`),
  KEY `Efetua_CartaoID` (`CartaoID`),
  CONSTRAINT `Efetua_CartaoID` FOREIGN KEY (`CartaoID`) REFERENCES `CartaoAndante` (`CartaoID`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `Efetua_ViagemID` FOREIGN KEY (`ViagemID`) REFERENCES `Viagem` (`ViagemID`) ON DELETE NO ACTION ON UPDATE NO ACTION);