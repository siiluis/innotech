
 CREATE TABLE asignaciones (
  ID int NOT NULL AUTO_INCREMENT,
  selected_tipo VARCHAR(1) NOT NULL,
  serial VARCHAR(15) NOT NULL,
  cargador VARCHAR(1) NOT NULL DEFAULT '0',
  teclado VARCHAR(1) NOT NULL DEFAULT '0',
  mouse VARCHAR(1) NOT NULL DEFAULT '0',
  base VARCHAR(1) NOT NULL DEFAULT '0',
  pantalla VARCHAR(1) NOT NULL DEFAULT '0',
  version_so VARCHAR(30) NOT NULL,
  version_office VARCHAR(30) NOT NULL,
  antivirus VARCHAR(50) NOT NULL,
  productkey_so  VARCHAR(30) NOT NULL,
  productKey_office VARCHAR(30) NOT NULL,
  empleado  VARCHAR(30) NOT NULL,
  ram VARCHAR(3) NOT NULL,
  disco VARCHAR(6) NOT NULL,
  cpu VARCHAR(15) NOT NULL,
  grafico VARCHAR(30) NOT NULL,
  date_save  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID)

)