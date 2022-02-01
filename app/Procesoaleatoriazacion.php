<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Procesoaleatoriazacion extends Model
{
    protected $table = 'proceso_aleatoriazacion';

    protected $fillable  = [
        'paciente_id',
        'ingreso_proceso',
        'fecha_proceso',
        'hora_proceso',
        'numero_aleatoriazacion',
        'realizado_por',
        'notas'
   ];
}
