<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class VisitaTres extends Model
{
    protected $table = 'historia_clinica_visita_3';

    protected $fillable  = [
       'paciente_id',
       'numero_telemedicina',
       'fecha_telemedicina',
       'presenta_sintomas',
       'sintomas',
       'terapia_concomitante',
       'inmunidad_celular_humoral',
       'fecha_inmunidad_celular_humoral'
      
        
   ];
}
