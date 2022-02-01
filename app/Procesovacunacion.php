<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Procesovacunacion extends Model
{
    protected $table = 'proceso_vacunacion';

    protected $fillable  = [
        'paciente_id',
        'ingreso_vacunacion',
        'fecha_vacunacion',
        'hora_vacunacion',
        'numero_vacunacion',
        'realizado_por_vacunacion',
        'notas_vacunacion'
        
   ];
}
