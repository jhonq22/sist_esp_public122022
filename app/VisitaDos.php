<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class VisitaDos extends Model
{
    protected $table = 'historia_clinica_visita_2';

    protected $fillable  = [
        'paciente_id',
        'pre_ta',
        'pre_fc',
        'pre_fr',
        'pre_temp', 
        'pre_sat2',
        'pre_general',  
        'pre_cabeza',
        'pre_cuello', 
        'pre_linfatico', 
        'pre_torax', 
        'pre_abdomen', 
        'pre_extremidades',
        'pre_neurologico',
        'post_ta',
        'post_fc',
        'post_fr',
        'post_temp', 
        'post_sat2',
        'post_general',  
        'post_cabeza',
        'post_cuello',
        'post_linfatico', 
        'post_torax', 
        'post_abdomen', 
        'post_extremidades',
        'post_neurologico',
        'vacuna',
        'fecha_vacuna',
        'lote_vacuna',
        'hora_vacuna',
        'reaccion_vacuna',
        'tipo_reaccion',
        'datos_pre_ta',
        'datos_pre_fc',
        'datos_pre_fr',
        'datos_pre_temp', 
        'datos_datos_pre_sat2',
        'datos_post_ta',
        'datos_post_fc',
        'datos_post_fr',
        'datos_post_temp', 
        'datos_post_sat2',
             
        
   ];
}
