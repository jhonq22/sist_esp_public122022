<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;


use App\Pacientes;
use Illuminate\Http\Request;

class PacientesController extends Controller
{
    public function index()
    {
        $vacunados =Pacientes::get();
        echo json_encode($vacunados);
    }


    public function Pacientescedula($cedula) 
    {
        $pacientes = DB::select("SELECT * FROM pacientes
        WHERE cedula = ?", [$cedula] );
        echo json_encode($pacientes); // para pasar en json
    }
 
  
    public function store(Request $request)
    {
        $vacunado = new Pacientes();
        $vacunado->cedula = $request->input('cedula');
        $vacunado->nombres = $request->input('nombres');
        $vacunado->apellidos = $request->input('apellidos');
        $vacunado->fecha_nacimiento = $request->input('fecha_nacimiento');
        $vacunado->sexo = $request->input('sexo');
        $vacunado->raza = $request->input('raza');
        $vacunado->domicilio_actual = $request->input('domicilio_actual');
        $vacunado->telefono_local = $request->input('telefono_local');
        $vacunado->telefono_celular = $request->input('telefono_celular');
        $vacunado->email = $request->input('email');



        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
    public function show($espromed_id)
    {
        $vacunados =Pacientes::find($espromed_id);
        echo json_encode($vacunados);
    }
      

   
    public function update(Request $request, $espromed_id)
    {
        $vacunado =Pacientes::find($espromed_id);
        $vacunado->nombres = $request->input('nombres');
        $vacunado->apellidos = $request->input('apellidos');
        $vacunado->fecha_nacimiento = $request->input('fecha_nacimiento');
        $vacunado->sexo = $request->input('sexo');
        $vacunado->raza = $request->input('raza');
        $vacunado->domicilio_actual = $request->input('domicilio_actual');
        $vacunado->telefono_local = $request->input('telefono_local');
        $vacunado->telefono_celular = $request->input('telefono_celular');
        $vacunado->email = $request->input('email');
      
        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
  

   
    public function destroy($espromed_id)
    {
        $vacunado =Pacientes::find($espromed_id);
        $vacunado->delete();
    }

}
