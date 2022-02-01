<?php

namespace App\Http\Controllers;

use App\Procesovacunacion;
use Illuminate\Http\Request;

class ProcesovacunacionController extends Controller
{
    public function index()
    {
        $vacunados =Procesovacunacion::get();
        echo json_encode($vacunados);
    }

 
  
    public function store(Request $request)
    {
        $vacunado = new Procesovacunacion();
        $vacunado->paciente_id = $request->input('paciente_id');
        $vacunado->ingreso_vacunacion = $request->input('ingreso_vacunacion');
        $vacunado->fecha_vacunacion = $request->input('fecha_vacunacion');
        $vacunado->hora_vacunacion = $request->input('hora_vacunacion');
        $vacunado->numero_vacunacion = $request->input('numero_vacunacion');
        $vacunado->realizado_por_vacunacion = $request->input('realizado_por_vacunacion');
        $vacunado->notas_vacunacion = $request->input('notas_vacunacion');
       


        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
    public function show($espromed_id)
    {
        $vacunados =Procesovacunacion::where('paciente_id', '=', $espromed_id)->first();
      //  $vacunados =Procesovacunacion::find($espromed_id);
        echo json_encode($vacunados);
    }
      

   
    public function update(Request $request, $espromed_id)
    {
        $vacunado =Procesovacunacion::find($espromed_id);
        $vacunado->paciente_id = $request->input('paciente_id');
        $vacunado->ingreso_vacunacion = $request->input('ingreso_vacunacion');
        $vacunado->fecha_vacunacion = $request->input('fecha_vacunacion');
        $vacunado->hora_vacunacion = $request->input('hora_vacunacion');
        $vacunado->numero_vacunacion = $request->input('numero_vacunacion');
        $vacunado->realizado_por_vacunacion = $request->input('realizado_por_vacunacion');
        $vacunado->notas_vacunacion = $request->input('notas_vacunacion');
      
        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
  

   
    public function destroy($espromed_id)
    {
        $vacunado =Procesovacunacion::find($espromed_id);
        $vacunado->delete();
    }

}
