<?php

namespace App\Http\Controllers;

use App\Vacunados;
use Illuminate\Http\Request;

class VacunadosController extends Controller
{
    public function index()
    {
        $vacunados =Vacunados::get();
        echo json_encode($vacunados);
    }

 
  
    public function store(Request $request)
    {
        $vacunado = new Vacunados();
        $vacunado->tipo_identificacion = $request->input('tipo_identificacion');
        $vacunado->cedula = $request->input('cedula');
        $vacunado->nombres = $request->input('nombres');
        $vacunado->apellidos = $request->input('apellidos');
        $vacunado->sexo = $request->input('sexo');
        $vacunado->fecha_nacimiento = $request->input('fecha_nacimiento');
        $vacunado->email = $request->input('email');
        $vacunado->dosis1 = $request->input('dosis1');
        $vacunado->fecha_dosis1 = $request->input('fecha_dosis1');
        $vacunado->lote1 = $request->input('lote1');
        $vacunado->dosis2 = $request->input('dosis2');
        $vacunado->fecha_dosis2 = $request->input('fecha_dosis2');
        $vacunado->lote2 = $request->input('lote2');
        $vacunado->dosis3 = $request->input('dosis3');
        $vacunado->fecha_dosis3 = $request->input('fecha_dosis3');
        $vacunado->lote3 = $request->input('lote3');
        $vacunado->tipo_vacuna_id = $request->input('tipo_vacuna_id');
        $vacunado->estado_id = $request->input('estado_id');
        $vacunado->municipio_id = $request->input('municipio_id');
        $vacunado->parroquia_id = $request->input('parroquia_id');
        $vacunado->direccion = $request->input('direccion');

        
        

        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
    public function show($espromed_id)
    {
        $vacunados =Vacunados::find($espromed_id);
        //$vacunados =Vacunados::where('paciente_id', '=', $espromed_id)->first();
        echo json_encode($vacunados);
    }
      

   
    public function update(Request $request, $espromed_id)
    {
        $vacunado =Vacunados::find($espromed_id);
        $vacunado->cedula = $request->input('cedula');
        $vacunado->nombres = $request->input('nombres');
        $vacunado->apellidos = $request->input('apellidos');
        $vacunado->sexo = $request->input('sexo');
        $vacunado->fecha_nacimiento = $request->input('fecha_nacimiento');
        $vacunado->email = $request->input('email');
        $vacunado->dosis1 = $request->input('dosis1');
        $vacunado->fecha_dosis1 = $request->input('fecha_dosis1');
        $vacunado->lote1 = $request->input('lote1');
        $vacunado->dosis2 = $request->input('dosis2');
        $vacunado->fecha_dosis2 = $request->input('fecha_dosis2');
        $vacunado->lote2 = $request->input('lote2');
        $vacunado->dosis3 = $request->input('dosis3');
        $vacunado->fecha_dosis3 = $request->input('fecha_dosis3');
        $vacunado->lote3 = $request->input('lote3');
        $vacunado->tipo_vacuna_id = $request->input('tipo_vacuna_id');
        $vacunado->estado_id = $request->input('estado_id');
        $vacunado->municipio_id = $request->input('municipio_id');
        $vacunado->parroquia_id = $request->input('parroquia_id');
        $vacunado->direccion = $request->input('direccion');
      
        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
  

   
    public function destroy($espromed_id)
    {
        $vacunado =Vacunados::find($espromed_id);
        $vacunado->delete();
    }
}
