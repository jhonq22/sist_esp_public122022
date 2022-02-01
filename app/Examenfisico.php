<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Examenfisico extends Model
{
    protected $table = 'examen_fisicos';

    protected $fillable  = [
        'paciente_id',
        'temperatura',
        'presion_arterial',
        'frecuencia_cardiaca',
        'frecuencia_respiratoria',
        'peso',
        'talla',
        'imc',
        'piel',
        'musculo_esqueletico',
        'cabeza_cuello',
        'ojos',
        'nariz',
        'boca',
        'oidos',
        'torax',
        'abdomen',
        'neurologico',
        'linfatico'
   ];
}
