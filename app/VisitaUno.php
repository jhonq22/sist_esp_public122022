<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class VisitaUno extends Model
{
    protected $table = 'historia_clinica_visita_1';

    protected $fillable  = [
        'paciente_id',
        'vacuna_previa_sars_cov2',
        'fecha_ultima_dosis',
        'hta',
        'asma',
        'dm',
        'artritis',
        'tbc',
        'hepatitis',
        'vih_sida',
        'otras',
        'alergias',
        'reaccion_vacuna',
        'signo_ta',
        'signo_fc',
        'signo_fr',
        'signo_tmp',
        'signo_sat2',
        'examenf_general',
        'examenf_cabeza',
        'examenf_cuello',
        'examenf_sistema_linfatico',
        'examenf_torax',
        'examenf_abdomen',
        'examenf_extremidades',
        'examenf_neurologico',
        'otros',
        'pcr_sars_cov2',
        'vacunacion_previa',
        'lote1',
        'fecha_dosis1',
        'lote2',
        'fecha_dosis2',
        'datos_signo_ta',
        'datos_signo_fc',
        'datos_signo_fr',
        'datos_signo_tmp',
        'datos_signo_sat2',

   ];

}
