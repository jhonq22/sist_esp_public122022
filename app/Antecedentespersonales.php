<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Antecedentespersonales extends Model
{
    protected $table = 'antecedentes_personales';

    protected $fillable  = [
        'paciente_id',
        'patalogicos',
        'gineco_obstetrico',
        'interrogatorios_aparatos'
       
   ];
}
