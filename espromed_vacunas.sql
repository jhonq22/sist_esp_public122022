-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-02-2022 a las 09:34:33
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `espromed_vacunas`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `antecedentes_personales`
--

CREATE TABLE `antecedentes_personales` (
  `paciente_id` int(11) DEFAULT NULL,
  `patalogicos` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `gineco_obstetrico` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `interrogatorios_aparatos` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `antecedentes_personales`
--

INSERT INTO `antecedentes_personales` (`paciente_id`, `patalogicos`, `gineco_obstetrico`, `interrogatorios_aparatos`, `id`, `created_at`, `updated_at`) VALUES
(2, 'orden 2', 'parana', 'pilo', 1, NULL, '2021-12-14 00:11:48'),
(1, 'labina 3', 'paruana 488448', 'oloea 484', 4, '2021-12-14 00:25:21', '2021-12-14 00:26:20'),
(3, 'mexico', 'peru', 'Chile', 5, '2021-12-14 00:26:42', '2021-12-14 00:26:54');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorizacion_riesgo_infeccion`
--

CREATE TABLE `categorizacion_riesgo_infeccion` (
  `paciente_id` int(11) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `opciones_riesgo` varchar(80) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `categorizacion_riesgo_infeccion`
--

INSERT INTO `categorizacion_riesgo_infeccion` (`paciente_id`, `id`, `opciones_riesgo`, `created_at`, `updated_at`) VALUES
(1, 2, 'alto', '2022-01-05 02:30:50', '2022-01-05 02:30:50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `criterio_exclusion`
--

CREATE TABLE `criterio_exclusion` (
  `id` int(11) NOT NULL,
  `paciente_id` int(11) NOT NULL,
  `criterioex1` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioex2` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioex3` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioex4` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioex5` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioex6` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioex7` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioex8` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioex9` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioex10` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioex11` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioex12` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioex13` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioex14` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioex15` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `criterio_exclusion`
--

INSERT INTO `criterio_exclusion` (`id`, `paciente_id`, `criterioex1`, `criterioex2`, `criterioex3`, `criterioex4`, `criterioex5`, `criterioex6`, `criterioex7`, `criterioex8`, `criterioex9`, `criterioex10`, `criterioex11`, `criterioex12`, `criterioex13`, `criterioex14`, `criterioex15`, `created_at`, `updated_at`) VALUES
(1, 1, 'si', 'no', 'no', 'si', 'no', 'si', 'no', 'si', 'no', 'si', 'no', 'si', 'no', 'si', 'no', '2022-01-05 02:27:09', 2022);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `criterio_inclusion`
--

CREATE TABLE `criterio_inclusion` (
  `id` int(11) NOT NULL,
  `paciente_id` int(11) NOT NULL,
  `criterioin1` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioin2` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioin3` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioin4` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioin5` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioin6` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioin7` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioin8` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioin9` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioin10` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioin11` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioin12` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `criterioin13` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `criterio_inclusion`
--

INSERT INTO `criterio_inclusion` (`id`, `paciente_id`, `criterioin1`, `criterioin2`, `criterioin3`, `criterioin4`, `criterioin5`, `criterioin6`, `criterioin7`, `criterioin8`, `criterioin9`, `criterioin10`, `criterioin11`, `criterioin12`, `criterioin13`, `created_at`, `updated_at`) VALUES
(1, 1, 'si', 'no', 'no', 'no', 'no', 'si', 'no', 'si', 'no', 'no', 'si', 'no', 'si', '2022-01-05 02:26:45', 2022);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `examen_fisicos`
--

CREATE TABLE `examen_fisicos` (
  `paciente_id` int(11) DEFAULT NULL,
  `temperatura` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `presion_arterial` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `frecuencia_cardiaca` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `frecuencia_respiratoria` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `peso` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `imc` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `piel` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `musculo_esqueletico` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cabeza_cuello` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `ojos` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `nariz` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `boca` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `talla` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `oidos` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `torax` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `abdomen` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `neurologico` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `linfatico` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `examen_fisicos`
--

INSERT INTO `examen_fisicos` (`paciente_id`, `temperatura`, `presion_arterial`, `frecuencia_cardiaca`, `frecuencia_respiratoria`, `peso`, `imc`, `piel`, `musculo_esqueletico`, `cabeza_cuello`, `ojos`, `nariz`, `boca`, `talla`, `oidos`, `torax`, `abdomen`, `neurologico`, `linfatico`, `id`, `created_at`, `updated_at`) VALUES
(1, '846416', '156561', '15666', '161', '161616', '41846', '61466', '164846', '646846', '64648', '66446', '46848', '10664', '484664', '16486', '21514884', '16848412', '48844', 1, '2021-12-14 01:01:45', '2021-12-14 01:03:15');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historia_clinica_visita_1`
--

CREATE TABLE `historia_clinica_visita_1` (
  `id` int(11) NOT NULL,
  `paciente_id` int(11) NOT NULL,
  `vacuna_previa_sars_cov2` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fecha_ultima_dosis` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `hta` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `asma` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `dm` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `artritis` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tbc` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `hepatitis` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `vih_sida` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `otras` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `alergias` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `reaccion_vacuna` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `signo_ta` int(11) DEFAULT NULL,
  `signo_fc` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `signo_fr` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `signo_tmp` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `signo_sat2` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `datos_signo_ta` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `datos_signo_fc` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `datos_signo_fr` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `datos_signo_tmp` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `datos_signo_sat2` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `examenf_general` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `examenf_cabeza` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `examenf_cuello` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `examenf_sistema_linfatico` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `examenf_torax` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `examenf_abdomen` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `examenf_extremidades` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `examenf_neurologico` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `otros` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pcr_sars_cov2` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `prueba_embarazo` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `vacunacion_previa` varchar(80) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lote1` int(11) DEFAULT NULL,
  `fecha_dosis1` int(11) DEFAULT NULL,
  `lote2` int(11) DEFAULT NULL,
  `fecha_dosis2` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `historia_clinica_visita_1`
--

INSERT INTO `historia_clinica_visita_1` (`id`, `paciente_id`, `vacuna_previa_sars_cov2`, `fecha_ultima_dosis`, `hta`, `asma`, `dm`, `artritis`, `tbc`, `hepatitis`, `vih_sida`, `otras`, `alergias`, `reaccion_vacuna`, `signo_ta`, `signo_fc`, `signo_fr`, `signo_tmp`, `signo_sat2`, `datos_signo_ta`, `datos_signo_fc`, `datos_signo_fr`, `datos_signo_tmp`, `datos_signo_sat2`, `examenf_general`, `examenf_cabeza`, `examenf_cuello`, `examenf_sistema_linfatico`, `examenf_torax`, `examenf_abdomen`, `examenf_extremidades`, `examenf_neurologico`, `otros`, `pcr_sars_cov2`, `prueba_embarazo`, `vacunacion_previa`, `lote1`, `fecha_dosis1`, `lote2`, `fecha_dosis2`, `created_at`, `updated_at`) VALUES
(1, 1, 'Sputnik', '2021-12-28', 'si', 'no', 'si', 'no', 'si', 'no', 'no', 'Ninguna', NULL, NULL, 0, 'si', 'si', 'si', 'si', 'ta', 'fc', 'fr', 'temp', 'sat02', '1', '1', '1', '1', '1', '1', '1', '1', '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2022-01-02 19:44:37', '2022-02-01 12:05:09');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historia_clinica_visita_2`
--

CREATE TABLE `historia_clinica_visita_2` (
  `id` int(11) NOT NULL,
  `paciente_id` int(11) NOT NULL,
  `pre_ta` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pre_fc` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pre_fr` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pre_temp` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pre_sat2` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pre_general` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pre_cabeza` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pre_cuello` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pre_linfatico` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pre_torax` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pre_abdomen` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pre_extremidades` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `pre_neurologico` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `post_ta` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `post_fc` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `post_fr` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `post_temp` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `post_sat2` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `post_general` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `post_cabeza` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `post_cuello` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `post_linfatico` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `post_torax` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `post_abdomen` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `post_extremidades` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `post_neurologico` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `vacuna` varchar(80) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fecha_vacuna` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lote_vacuna` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `hora_vacuna` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `reaccion_vacuna` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tipo_reaccion` varchar(80) COLLATE utf8_unicode_ci DEFAULT NULL,
  `datos_pre_ta` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `datos_pre_fr` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `datos_pre_fc` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `datos_pre_temp` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `datos_pre_sat2` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `datos_post_ta` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `datos_post_fc` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `datos_post_fr` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `datos_post_temp` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `datos_post_sat2` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `historia_clinica_visita_2`
--

INSERT INTO `historia_clinica_visita_2` (`id`, `paciente_id`, `pre_ta`, `pre_fc`, `pre_fr`, `pre_temp`, `pre_sat2`, `pre_general`, `pre_cabeza`, `pre_cuello`, `pre_linfatico`, `pre_torax`, `pre_abdomen`, `pre_extremidades`, `pre_neurologico`, `post_ta`, `post_fc`, `post_fr`, `post_temp`, `post_sat2`, `post_general`, `post_cabeza`, `post_cuello`, `post_linfatico`, `post_torax`, `post_abdomen`, `post_extremidades`, `post_neurologico`, `vacuna`, `fecha_vacuna`, `lote_vacuna`, `hora_vacuna`, `reaccion_vacuna`, `tipo_reaccion`, `datos_pre_ta`, `datos_pre_fr`, `datos_pre_fc`, `datos_pre_temp`, `datos_pre_sat2`, `datos_post_ta`, `datos_post_fc`, `datos_post_fr`, `datos_post_temp`, `datos_post_sat2`, `created_at`, `updated_at`) VALUES
(1, 1, 'si', 'si', 'si', 'si', 'si', '1', '1', '1', '1', '1', '1', '1', '1', 'si', 'si', 'si', 'si', 'si', '1', '1', '1', '1', '1', '1', '1', '1', NULL, NULL, NULL, NULL, 'si', '1', 'prueba ta', 'fr', 'fc', 'temp', 'sat', 'ta', 'fc', 'fr', 'temp', 'sat02', '2022-02-01 12:01:35', '2022-02-01 12:03:46');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historia_clinica_visita_3`
--

CREATE TABLE `historia_clinica_visita_3` (
  `id` int(11) NOT NULL,
  `paciente_id` int(11) NOT NULL,
  `numero_telemedicina` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fecha_telemedicina` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `presenta_sintomas` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sintomas` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `terapia_concomitante` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `inmunidad_celular_humoral` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fecha_inmunidad_celular_humoral` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `historia_clinica_visita_3`
--

INSERT INTO `historia_clinica_visita_3` (`id`, `paciente_id`, `numero_telemedicina`, `fecha_telemedicina`, `presenta_sintomas`, `sintomas`, `terapia_concomitante`, `inmunidad_celular_humoral`, `fecha_inmunidad_celular_humoral`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, NULL, NULL, NULL, NULL, 'si', '2021-12-18', '2022-01-05 00:07:08', '2022-01-05 00:08:01');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historia_clinica_visita_4`
--

CREATE TABLE `historia_clinica_visita_4` (
  `id` int(11) NOT NULL,
  `paciente_id` int(11) NOT NULL,
  `numero_telemedicina` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fecha_telemedicina` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `presenta_sintomas` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sintomas` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `terapia_concomitante` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `inmunidad_celular_humoral` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fecha_inmunidad_celular_humoral` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `historia_clinica_visita_4`
--

INSERT INTO `historia_clinica_visita_4` (`id`, `paciente_id`, `numero_telemedicina`, `fecha_telemedicina`, `presenta_sintomas`, `sintomas`, `terapia_concomitante`, `inmunidad_celular_humoral`, `fecha_inmunidad_celular_humoral`, `created_at`, `updated_at`) VALUES
(1, 1, NULL, NULL, NULL, NULL, NULL, 'no', '2021-12-23', '2022-01-05 00:13:16', '2022-01-05 00:13:16');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pacientes`
--

CREATE TABLE `pacientes` (
  `id` int(11) NOT NULL,
  `nombres` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `cedula` varchar(12) COLLATE utf8_unicode_ci DEFAULT NULL,
  `apellidos` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fecha_nacimiento` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `sexo` varchar(9) COLLATE utf8_unicode_ci DEFAULT NULL,
  `raza` varchar(80) COLLATE utf8_unicode_ci DEFAULT NULL,
  `domicilio_actual` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `telefono_local` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `telefono_celular` varchar(15) COLLATE utf8_unicode_ci DEFAULT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `pacientes`
--

INSERT INTO `pacientes` (`id`, `nombres`, `cedula`, `apellidos`, `fecha_nacimiento`, `sexo`, `raza`, `domicilio_actual`, `telefono_local`, `telefono_celular`, `email`, `created_at`, `updated_at`) VALUES
(1, 'Jhon', '24208923', 'De quesada', '2021-12-15', 'masculino', NULL, NULL, '02128607728', '0414488448', 'jhonqquesada@gmail.com', '2021-12-13 21:04:20', '2021-12-13 22:48:51'),
(5, 'Andres', '94186948', 'Pereira', '2021-12-30', NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-14 20:16:28', '2021-12-14 20:16:28'),
(6, 'Julian Andres', '4884848', 'Alvarez', '2021-12-23', NULL, NULL, NULL, NULL, NULL, NULL, '2021-12-14 20:26:04', '2021-12-14 20:26:24'),
(7, 'MARTIN JAVIER', '11701380', 'MARQUEZ OCANTO', '1973-12-28', NULL, NULL, NULL, NULL, NULL, NULL, '2022-01-05 02:33:12', '2022-01-05 02:33:12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `paraclinicos`
--

CREATE TABLE `paraclinicos` (
  `paciente_id` int(11) DEFAULT NULL,
  `anticuerpo_contra_sars_cov2` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fecha_hora_toma_muestra_anticuerpo` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `igm` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `igg` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `prueba_embarazo` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fecha_hora_toma_muestra_antigeno` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `hgb` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `prueba_pcr` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fecha_hora_toma_muestra_pcr` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `observacion` text COLLATE utf8_unicode_ci DEFAULT NULL,
  `serologias` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `vih` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `vdrl` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `hepatitisb` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `hepatitisc` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `radiografia_torax` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proceso_aleatoriazacion`
--

CREATE TABLE `proceso_aleatoriazacion` (
  `paciente_id` int(11) DEFAULT NULL,
  `ingreso_proceso` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fecha_proceso` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `hora_proceso` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `numero_aleatoriazacion` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `realizado_por` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `notas` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `proceso_aleatoriazacion`
--

INSERT INTO `proceso_aleatoriazacion` (`paciente_id`, `ingreso_proceso`, `fecha_proceso`, `hora_proceso`, `numero_aleatoriazacion`, `realizado_por`, `notas`, `id`, `created_at`, `updated_at`) VALUES
(1, '511851', '2021-12-15', '155115', '155115', '15515', '1515', 1, '2021-12-14 01:53:42', '2021-12-15 00:40:17');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `proceso_vacunacion`
--

CREATE TABLE `proceso_vacunacion` (
  `paciente_id` int(11) DEFAULT NULL,
  `ingreso_vacunacion` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fecha_vacunacion` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `hora_vacunacion` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `numero_vacunacion` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `realizado_por_vacunacion` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `notas_vacunacion` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `rol_id` int(11) NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `rol_id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 1, 'Administrador', 'admin@gmail.com', '$2y$10$hrAXNep8tGaz5kH.IY19euNKXPcNF2aH/wvX6TLYxfdX7J5SCJNOe', NULL, '2021-12-30 01:46:58', '2021-12-15 01:46:58');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `vacunados`
--

CREATE TABLE `vacunados` (
  `id` int(11) NOT NULL,
  `tipo_identificacion` varchar(6) COLLATE utf8_unicode_ci NOT NULL,
  `cedula` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `nombres` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `apellidos` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `sexo` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `fecha_nacimiento` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(80) COLLATE utf8_unicode_ci NOT NULL,
  `dosis1` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fecha_dosis1` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lote1` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `dosis2` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fecha_dosis2` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lote2` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `dosis3` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `fecha_dosis3` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `lote3` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `tipo_vacuna_id` int(11) NOT NULL,
  `estado_id` int(11) NOT NULL,
  `municipio_id` int(11) NOT NULL,
  `parroquia_id` int(11) NOT NULL,
  `direccion` text COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `vacunados`
--

INSERT INTO `vacunados` (`id`, `tipo_identificacion`, `cedula`, `nombres`, `apellidos`, `sexo`, `fecha_nacimiento`, `email`, `dosis1`, `fecha_dosis1`, `lote1`, `dosis2`, `fecha_dosis2`, `lote2`, `dosis3`, `fecha_dosis3`, `lote3`, `tipo_vacuna_id`, `estado_id`, `municipio_id`, `parroquia_id`, `direccion`, `created_at`, `updated_at`) VALUES
(1, 'V', '24208923', 'JHON ANDERSON', 'DE QUESADA FERNANDEZ', 'masculino', '1993-11-05', 'jhondequesada@gmail.com', 'si', '2021-08-11', 'B0919', 'si', '2021-09-01', 'B0919', 'si', '2021-12-15', '488448', 2, 1, 10100, 10102, 'caracas', '2021-12-15 00:00:30', '2021-12-15 00:00:30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `varias_telemedicinas`
--

CREATE TABLE `varias_telemedicinas` (
  `id` int(11) NOT NULL,
  `paciente_id` int(11) NOT NULL,
  `campo_telemedicina` varchar(80) COLLATE utf8_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `antecedentes_personales`
--
ALTER TABLE `antecedentes_personales`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `categorizacion_riesgo_infeccion`
--
ALTER TABLE `categorizacion_riesgo_infeccion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `criterio_exclusion`
--
ALTER TABLE `criterio_exclusion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `criterio_inclusion`
--
ALTER TABLE `criterio_inclusion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `examen_fisicos`
--
ALTER TABLE `examen_fisicos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `historia_clinica_visita_1`
--
ALTER TABLE `historia_clinica_visita_1`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `historia_clinica_visita_2`
--
ALTER TABLE `historia_clinica_visita_2`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `historia_clinica_visita_3`
--
ALTER TABLE `historia_clinica_visita_3`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `historia_clinica_visita_4`
--
ALTER TABLE `historia_clinica_visita_4`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `paraclinicos`
--
ALTER TABLE `paraclinicos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indices de la tabla `proceso_aleatoriazacion`
--
ALTER TABLE `proceso_aleatoriazacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `proceso_vacunacion`
--
ALTER TABLE `proceso_vacunacion`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indices de la tabla `vacunados`
--
ALTER TABLE `vacunados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `varias_telemedicinas`
--
ALTER TABLE `varias_telemedicinas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `antecedentes_personales`
--
ALTER TABLE `antecedentes_personales`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `categorizacion_riesgo_infeccion`
--
ALTER TABLE `categorizacion_riesgo_infeccion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `criterio_exclusion`
--
ALTER TABLE `criterio_exclusion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `criterio_inclusion`
--
ALTER TABLE `criterio_inclusion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `examen_fisicos`
--
ALTER TABLE `examen_fisicos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `historia_clinica_visita_1`
--
ALTER TABLE `historia_clinica_visita_1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `historia_clinica_visita_2`
--
ALTER TABLE `historia_clinica_visita_2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `historia_clinica_visita_3`
--
ALTER TABLE `historia_clinica_visita_3`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `historia_clinica_visita_4`
--
ALTER TABLE `historia_clinica_visita_4`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `pacientes`
--
ALTER TABLE `pacientes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `paraclinicos`
--
ALTER TABLE `paraclinicos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `proceso_aleatoriazacion`
--
ALTER TABLE `proceso_aleatoriazacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `proceso_vacunacion`
--
ALTER TABLE `proceso_vacunacion`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `vacunados`
--
ALTER TABLE `vacunados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `varias_telemedicinas`
--
ALTER TABLE `varias_telemedicinas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
