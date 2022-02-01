<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Paraclinicos extends Model
{
    protected $table = 'paraclinicos';

    protected $fillable  = [
        'paciente_id',
        'anticuerpo_contra_sars_cov2',
        'fecha_hora_toma_muestra_anticuerpo',
        'igm',
        'igg',
        'prueba_embarazo',
        'fecha_hora_toma_muestra_antigeno',
        'observacion',
        'prueba_pcr',
        'fecha_hora_toma_muestra_pcr',
        'hgb',
        'serologias',
        'vih',
        'vdrl',
        'hepatitisb',
        'hepatitisc',
        'radiografia_torax'
     
   ];
}
