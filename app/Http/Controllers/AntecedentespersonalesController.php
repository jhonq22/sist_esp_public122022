<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use App\Antecedentespersonales;
use Illuminate\Http\Request;

class AntecedentespersonalesController extends Controller
{
    public function index()
    {
        $vacunados =Antecedentespersonales::get();
        echo json_encode($vacunados);
    }

 
    public function Pacientesid($paciente_id) 
    {
        $pacientes = DB::select("SELECT * FROM antecedentes_personales
        WHERE paciente_id = ?", [$paciente_id] );
        echo json_encode($pacientes); // para pasar en json
    }
 


  
    public function store(Request $request)
    {
        $vacunado = new Antecedentespersonales();
        $vacunado->paciente_id = $request->input('paciente_id');
        $vacunado->patalogicos = $request->input('patalogicos');
        $vacunado->gineco_obstetrico = $request->input('gineco_obstetrico');
        $vacunado->interrogatorios_aparatos = $request->input('interrogatorios_aparatos');




        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
    public function show($espromed_id)
    {
        $vacunados =Antecedentespersonales::where('paciente_id', '=', $espromed_id)->first();
        
        

        echo json_encode($vacunados);
    }
      

   
    public function update(Request $request, $espromed_id)
    {
        $vacunado =Antecedentespersonales::find($espromed_id);
        $vacunado->paciente_id = $request->input('paciente_id');
        $vacunado->patalogicos = $request->input('patalogicos');
        $vacunado->gineco_obstetrico = $request->input('gineco_obstetrico');
        $vacunado->interrogatorios_aparatos = $request->input('interrogatorios_aparatos');
      
        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
  

   
    public function destroy($espromed_id)
    {
        $vacunado =Antecedentespersonales::find($espromed_id);
        $vacunado->delete();
    }
}
