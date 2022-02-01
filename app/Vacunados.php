<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Vacunados extends Model
{
    protected $table = 'vacunados';

    protected $fillable  = [ 

        'tipo_identificacion',
        'cedula',
        'nombres',
        'apellidos',
        'sexo',
        'fecha_nacimiento',
        'email',
        'dosis1',
        'fecha_dosis1',
        'lote1',
        'dosis2',
        'fecha_dosis2',
        'lote2',
        'dosis3',
        'fecha_dosis3',
        'lote3',
        'tipo_vacuna_id',
        'estado_id',
        'municipio_id',
        'parroquia_id',
        'direccion',

    ];
}
