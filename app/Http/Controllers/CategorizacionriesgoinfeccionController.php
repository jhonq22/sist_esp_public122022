<?php

namespace App\Http\Controllers;

use App\Categorizacionriesgoinfeccion;
use Illuminate\Http\Request;

class CategorizacionriesgoinfeccionController extends Controller
{
    public function index()
    {
        $vacunados =Categorizacionriesgoinfeccion::get();
        echo json_encode($vacunados);
    }

 
  
    public function store(Request $request)
    {
        $vacunado = new Categorizacionriesgoinfeccion();
        $vacunado->paciente_id = $request->input('paciente_id');
        $vacunado->opciones_riesgo = $request->input('opciones_riesgo');
     
      



        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
    public function show($espromed_id)
    {
        //$vacunados =Categorizacionriesgoinfeccion::find($espromed_id);
        $vacunados =Categorizacionriesgoinfeccion::where('paciente_id', '=', $espromed_id)->first();
        echo json_encode($vacunados);
    }
      

   
    public function update(Request $request, $espromed_id)
    {
        $vacunado =Categorizacionriesgoinfeccion::find($espromed_id);
        $vacunado->paciente_id = $request->input('paciente_id');
        $vacunado->opciones_riesgo = $request->input('opciones_riesgo');
      
      
        $vacunado->save(); // para guardar en json

        echo json_encode($vacunado); // para pasar en json
    }

 
  

   
    public function destroy($espromed_id)
    {
        $vacunado =Categorizacionriesgoinfeccion::find($espromed_id);
        $vacunado->delete();
    }
}
