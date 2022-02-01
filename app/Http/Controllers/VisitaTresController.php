<?php

namespace App\Http\Controllers;

use App\VisitaTres;
use Illuminate\Http\Request;

class VisitaTresController extends Controller
{
    public function index()
    {
        $vacunados =VisitaTres::get();
        echo json_encode($vacunados);
    }

 
  
    public function store(Request $request)
    {
        $vacunado = new VisitaTres();
        $vacunado->paciente_id = $request->input('paciente_id');
       $vacunado->numero_telemedicina = $request->input('numero_telemedicina');
       $vacunado->fecha_telemedicina = $request->input('fecha_telemedicina');
       $vacunado->presenta_sintomas = $request->input('presenta_sintomas');
       $vacunado->sintomas = $request->input('sintomas');
       $vacunado->terapia_concomitante = $request->input('terapia_concomitante');
       $vacunado->inmunidad_celular_humoral = $request->input('inmunidad_celular_humoral');
       $vacunado->fecha_inmunidad_celular_humoral = $request->input('fecha_inmunidad_celular_humoral');
      



        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
    public function show($espromed_id)
    {
        //$vacunados =VisitaTres::find($espromed_id);
        $vacunados =VisitaTres::where('paciente_id', '=', $espromed_id)->first();
        echo json_encode($vacunados);
    }
      

   
    public function update(Request $request, $espromed_id)
    {
        $vacunado =VisitaTres::find($espromed_id);
        $vacunado->paciente_id = $request->input('paciente_id');
        $vacunado->numero_telemedicina = $request->input('numero_telemedicina');
       $vacunado->fecha_telemedicina = $request->input('fecha_telemedicina');
       $vacunado->presenta_sintomas = $request->input('presenta_sintomas');
       $vacunado->sintomas = $request->input('sintomas');
       $vacunado->terapia_concomitante = $request->input('terapia_concomitante');
       $vacunado->inmunidad_celular_humoral = $request->input('inmunidad_celular_humoral');
       $vacunado->fecha_inmunidad_celular_humoral = $request->input('fecha_inmunidad_celular_humoral');
      
      
        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
  

   
    public function destroy($espromed_id)
    {
        $vacunado =VisitaTres::find($espromed_id);
        $vacunado->delete();
    }
}
