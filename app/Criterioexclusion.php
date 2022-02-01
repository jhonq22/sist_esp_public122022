<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Criterioexclusion extends Model
{
    protected $table = 'criterio_exclusion';

    protected $fillable  = [
       'paciente_id',
       'criterioex1', 
       'criterioex2', 
        'criterioex3', 
        'criterioex4', 
        'criterioex5', 
        'criterioex6', 
        'criterioex7', 
        'criterioex8', 
        'criterioex9', 
        'criterioex10', 
        'criterioex11', 
        'criterioex12', 
        'criterioex13',
        'criterioex14',
        'criterioex15'
      
        
   ];
}
