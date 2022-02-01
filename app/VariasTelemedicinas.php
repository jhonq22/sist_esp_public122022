<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class VariasTelemedicinas extends Model
{
    protected $table = 'varias_telemedicinas';

    protected $fillable  = [
        'paciente_id',
        'campo_telemedicina'

   ];
}
