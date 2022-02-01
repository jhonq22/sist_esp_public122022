<?php

namespace App\Http\Controllers;

use App\Procesoaleatoriazacion;
use Illuminate\Http\Request;

class ProcesoaleatoriazacionController extends Controller
{
    public function index()
    {
        $vacunados =Procesoaleatoriazacion::get();
        echo json_encode($vacunados);
    }

 
  
    public function store(Request $request)
    {
        $vacunado = new Procesoaleatoriazacion();
        $vacunado->paciente_id = $request->input('paciente_id');
        $vacunado->ingreso_proceso = $request->input('ingreso_proceso');
        $vacunado->fecha_proceso = $request->input('fecha_proceso');
        $vacunado->hora_proceso = $request->input('hora_proceso');
        $vacunado->numero_aleatoriazacion = $request->input('numero_aleatoriazacion');
        $vacunado->realizado_por = $request->input('realizado_por');
        $vacunado->notas = $request->input('notas');



        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
    public function show($espromed_id)
    {
        //$vacunados =Procesoaleatoriazacion::find($espromed_id);
        $vacunados =Procesoaleatoriazacion::where('paciente_id', '=', $espromed_id)->first();
        echo json_encode($vacunados);
    }
      

   
    public function update(Request $request, $espromed_id)
    {
        $vacunado =Procesoaleatoriazacion::find($espromed_id);
        $vacunado->paciente_id = $request->input('paciente_id');
        $vacunado->ingreso_proceso = $request->input('ingreso_proceso');
        $vacunado->fecha_proceso = $request->input('fecha_proceso');
        $vacunado->hora_proceso = $request->input('hora_proceso');
        $vacunado->numero_aleatoriazacion = $request->input('numero_aleatoriazacion');
        $vacunado->realizado_por = $request->input('realizado_por');
        $vacunado->notas = $request->input('notas');
      
        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
  

   
    public function destroy($espromed_id)
    {
        $vacunado =Procesoaleatoriazacion::find($espromed_id);
        $vacunado->delete();
    }

}
