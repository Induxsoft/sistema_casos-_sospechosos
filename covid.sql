-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 192.168.0.7    Database: covid
-- ------------------------------------------------------
-- Server version	5.5.52

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `estudio_epidemiologico`
--

DROP TABLE IF EXISTS `estudio_epidemiologico`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estudio_epidemiologico` (
  `sys_pk` int(11) NOT NULL AUTO_INCREMENT,
  `sys_timestamp` datetime NOT NULL,
  `sys_guid` varchar(32) CHARACTER SET latin1 NOT NULL,
  `sys_dtcreated` datetime NOT NULL,
  `sys_deleted` tinyint(4) DEFAULT NULL,
  `sys_lock` int(11) DEFAULT NULL,
  `sys_recver` int(11) DEFAULT NULL,
  `entidad` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `jurisdiccion` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `municipio` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `nombreunidadmedica` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `institucion` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `clues` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `fechaingresounidad` date DEFAULT NULL,
  `primerapellido` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `segundoapellido` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `nombres` varchar(45) CHARACTER SET latin1 DEFAULT NULL,
  `fechanacimientodia` int(11) DEFAULT NULL,
  `fechanacimientomes` int(11) DEFAULT NULL,
  `fechanacimientoanio` int(11) DEFAULT NULL,
  `edad` int(11) DEFAULT NULL,
  `curp` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `sexo` int(11) DEFAULT NULL,
  `embarazo` int(11) DEFAULT NULL,
  `mesesembarazo` varchar(20) CHARACTER SET latin1 DEFAULT NULL,
  `puerperio` int(11) DEFAULT NULL,
  `diaspuerperio` varchar(20) CHARACTER SET latin1 DEFAULT NULL,
  `nacionalidad` int(11) DEFAULT NULL,
  `paisorigen` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `nexpedientesegsocial` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `entidadnacimiento` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `entidadresidencia` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `municipioresidencia` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `localidadresidencia` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `calleresidencia` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `numeroexternoresidencia` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `numerointernoresidencia` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `entrecallesresidencia` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `entrecallesresidencia2` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `coloniaresidencia` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `codigopostalresidencia` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `telefono` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `esindigena` int(11) DEFAULT NULL,
  `lenguaindigena` int(11) DEFAULT NULL,
  `ocupacion` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `esmigrante` int(11) DEFAULT NULL,
  `viajetranslocalcom` int(11) DEFAULT NULL,
  `residentetranlocalcom` int(11) DEFAULT NULL,
  `fechaviajetranslocalcom` date DEFAULT NULL,
  `aerolineaviajetranslocalcom` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `fechallegadaviajetranslocalcom` date DEFAULT NULL,
  `contactopersonasintomas` int(11) DEFAULT NULL,
  `lugarcontactopersonasintomas` int(11) DEFAULT NULL,
  `contactoanimales` int(11) DEFAULT NULL,
  `contactoanimalescual` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `tipocontactoanimales` int(11) DEFAULT NULL,
  `visitamercadoanimales` int(11) DEFAULT NULL,
  `lugarmercadoanimales` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `fechamercadoanimales` date DEFAULT NULL,
  `14diascontactosospechoso` int(11) DEFAULT NULL,
  `14diascontactoconfirmado` int(11) DEFAULT NULL,
  `14diascontactoviajado` int(11) DEFAULT NULL,
  `dc_fechainiciosintomas` date DEFAULT NULL,
  `dc_fiebre` int(11) DEFAULT NULL,
  `dc_tos` int(11) DEFAULT NULL,
  `dc_dolortoracico` int(11) DEFAULT NULL,
  `dc_dificultadrespiratoria` int(11) DEFAULT NULL,
  `dc_cefalea` int(11) DEFAULT NULL,
  `dc_irritabilidad` int(11) DEFAULT NULL,
  `dc_diarrea` int(11) DEFAULT NULL,
  `dc_vomitos` int(11) DEFAULT NULL,
  `dc_calosfrios` int(11) DEFAULT NULL,
  `dc_dolorabdominal` int(11) DEFAULT NULL,
  `dc_mialgias` int(11) DEFAULT NULL,
  `dc_artralgias` int(11) DEFAULT NULL,
  `dc_ataqueestadogeneral` int(11) DEFAULT NULL,
  `dc_rinorrea` int(11) DEFAULT NULL,
  `dc_polipnea` int(11) DEFAULT NULL,
  `dc_odinofagia` int(11) DEFAULT NULL,
  `dc_conjuntivitis` int(11) DEFAULT NULL,
  `dc_cianosis` int(11) DEFAULT NULL,
  `dc_convulsiones` int(11) DEFAULT NULL,
  `dc_otrossintomas` varchar(2000) CHARACTER SET latin1 DEFAULT NULL,
  `dc_comorbilidad` int(11) DEFAULT NULL,
  `dc_diabetes` int(11) DEFAULT NULL,
  `dc_epoc` int(11) DEFAULT NULL,
  `dc_asma` int(11) DEFAULT NULL,
  `dc_inmunosupresion` int(11) DEFAULT NULL,
  `dc_hipertension` int(11) DEFAULT NULL,
  `dc_sida` int(11) DEFAULT NULL,
  `dc_cardiovascular` int(11) DEFAULT NULL,
  `dc_obsidad` int(11) DEFAULT NULL,
  `dc_insuficienciarenal` int(11) DEFAULT NULL,
  `dc_insuficienciahepatica` int(11) DEFAULT NULL,
  `dc_tabaquismo` int(11) DEFAULT NULL,
  `dc_otraenfermedad` varchar(2000) CHARACTER SET latin1 DEFAULT NULL,
  `servicioingreso` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `tipopaciente` int(11) DEFAULT NULL,
  `fechadeingresounidad` date DEFAULT NULL,
  `casoingresadouci` int(11) DEFAULT NULL,
  `casointubado` int(11) DEFAULT NULL,
  `neumoniaclinica` int(11) DEFAULT NULL,
  `neumoniaradiologica` int(11) DEFAULT NULL,
  `tratamientoantipiretico` int(11) DEFAULT NULL,
  `fechatratamientoantipiretico` date DEFAULT NULL,
  `ap_paracetamol` int(11) DEFAULT NULL,
  `ap_ibuprofeno` int(11) DEFAULT NULL,
  `ap_acidoacetilsalicilico` int(11) DEFAULT NULL,
  `ap_clonoxinatodelisina` int(11) DEFAULT NULL,
  `ap_naproxeno` int(11) DEFAULT NULL,
  `ap_piroxicam` int(11) DEFAULT NULL,
  `ap_metamizolsodico` int(11) DEFAULT NULL,
  `ap_diclofenaco` int(11) DEFAULT NULL,
  `ap_ketorolaco` int(11) DEFAULT NULL,
  `ap_otro` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `tratamientoantiviral` int(11) DEFAULT NULL,
  `fechatratamientoantiviral` date DEFAULT NULL,
  `av_amantadina` int(11) DEFAULT NULL,
  `av_rimantadina` int(11) DEFAULT NULL,
  `av_oseltamivir` int(11) DEFAULT NULL,
  `av_zanamivir` int(11) DEFAULT NULL,
  `av_peramivir` int(11) DEFAULT NULL,
  `av_ribavirina` int(11) DEFAULT NULL,
  `av_otro` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `tratamientoantibiotico` int(11) DEFAULT NULL,
  `fechatratamientoantibiotico` date DEFAULT NULL,
  `ab_penicilina` int(11) DEFAULT NULL,
  `ab_dicloxacilina` int(11) DEFAULT NULL,
  `ab_ampicilina` int(11) DEFAULT NULL,
  `ab_amikacina` int(11) DEFAULT NULL,
  `ab_doxiciclina` int(11) DEFAULT NULL,
  `ab_cefalosporina` int(11) DEFAULT NULL,
  `ab_clindamicina` int(11) DEFAULT NULL,
  `ab_claritromicina` int(11) DEFAULT NULL,
  `ab_ciprofloxacino` int(11) DEFAULT NULL,
  `ab_meropenem` int(11) DEFAULT NULL,
  `ab_vancomicina` int(11) DEFAULT NULL,
  `ab_amoxicilina` int(11) DEFAULT NULL,
  `ab_otro` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `muestrapaciente` int(11) DEFAULT NULL,
  `laboratoriodiagnostico` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `tm_exudadofaringeo` int(11) DEFAULT NULL,
  `tm_exudadonasofaringeo` int(11) DEFAULT NULL,
  `tm_lavadobronquial` int(11) DEFAULT NULL,
  `tm_biopsiapulmon` int(11) DEFAULT NULL,
  `fechatomamuestra` date DEFAULT NULL,
  `fechaenviomuestra` date DEFAULT NULL,
  `fecharecepcionmuestra` date DEFAULT NULL,
  `fecharesultado` date DEFAULT NULL,
  `resultado` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `evolucion` int(11) DEFAULT NULL,
  `fechaingreso` date DEFAULT NULL,
  `fechadefuncion` date DEFAULT NULL,
  `foliocerficiadodefuncion` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `defuncioncovid` int(11) DEFAULT NULL,
  `nombreycargoelaboro` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `nombreycargoautorizo` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  `fechaelaboracion` date DEFAULT NULL,
  `contactoelaboro` varchar(200) CHARACTER SET latin1 DEFAULT NULL,
  PRIMARY KEY (`sys_pk`),
  UNIQUE KEY `sys_pk_UNIQUE` (`sys_pk`),
  UNIQUE KEY `sys_guid_UNIQUE` (`sys_guid`)
) ENGINE=InnoDB AUTO_INCREMENT=164 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `fk_contactos`
--

DROP TABLE IF EXISTS `fk_contactos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fk_contactos` (
  `sys_pk` int(11) NOT NULL AUTO_INCREMENT,
  `primerapellido` varchar(200) DEFAULT NULL,
  `segundoapellido` varchar(200) DEFAULT NULL,
  `nombres` varchar(200) NOT NULL,
  `sexo` varchar(2) NOT NULL,
  `edad` varchar(45) NOT NULL,
  `tipo_de_contacto` varchar(45) NOT NULL,
  `correo_electronico` varchar(45) DEFAULT NULL,
  `signos_y_sintomas` varchar(200) NOT NULL,
  `observaciones` varchar(200) DEFAULT NULL,
  `fk_ee` int(11) NOT NULL,
  PRIMARY KEY (`sys_pk`),
  KEY `fkee_idx` (`fk_ee`),
  CONSTRAINT `fkee2` FOREIGN KEY (`fk_ee`) REFERENCES `estudio_epidemiologico` (`sys_pk`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `fk_paisesvisitados`
--

DROP TABLE IF EXISTS `fk_paisesvisitados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fk_paisesvisitados` (
  `sys_pk` int(11) NOT NULL AUTO_INCREMENT,
  `pais_visitado` varchar(45) DEFAULT NULL,
  `ciudad_visitada` varchar(45) DEFAULT NULL,
  `fecha_llegada` date DEFAULT NULL,
  `fecha_salida` date DEFAULT NULL,
  `aerolinea_vuelo` varchar(45) DEFAULT NULL,
  `fk_ee` int(11) NOT NULL,
  PRIMARY KEY (`sys_pk`),
  KEY `fkee_idx` (`fk_ee`),
  CONSTRAINT `fkee` FOREIGN KEY (`fk_ee`) REFERENCES `estudio_epidemiologico` (`sys_pk`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-03-27 10:24:19
