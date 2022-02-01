<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Criterioinclusion extends Model
{
    protected $table = 'criterio_inclusion';

    protected $fillable  = [
       'paciente_id',
       'criterioin1', 
       'criterioin2', 
        'criterioin3', 
        'criterioin4', 
        'criterioin5', 
        'criterioin6', 
        'criterioin7', 
        'criterioin8', 
        'criterioin9', 
        'criterioin10', 
        'criterioin11', 
        'criterioin12', 
        'criterioin13'
      
        
   ];
}
