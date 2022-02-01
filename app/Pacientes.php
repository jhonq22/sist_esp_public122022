<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pacientes extends Model
{
    protected $table = 'pacientes';

    protected $fillable  = [
        'cedula',
        'nombres',
        'apellidos',
        'fecha_nacimiento',
        'sexo',
        'raza',
        'domicilio_actual',
        'telefono_local',
        'telefono_celular',
        'email'
   ];
}
