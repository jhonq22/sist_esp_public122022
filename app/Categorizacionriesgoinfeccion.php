<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Categorizacionriesgoinfeccion extends Model
{
    protected $table = 'categorizacion_riesgo_infeccion';

    protected $fillable  = [
        'paciente_id',
        'opciones_riesgo'
       
   ];
}
